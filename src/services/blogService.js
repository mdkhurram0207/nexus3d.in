import {
    collection,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    query,
    where,
    getDocs,
    orderBy,
    limit,
    serverTimestamp,
    onSnapshot,
    writeBatch,
    getDoc
} from "firebase/firestore";
import { db } from "../firebase";

const BLOG_COLLECTION = "blogs";
const REDIRECT_COLLECTION = "blogRedirects";

/**
 * Generates a URL-friendly slug from a title.
 * Checks Firestore to ensure uniqueness.
 */
export const generateUniqueSlug = async (title) => {
    let slug = title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/^-+|-+$/g, '');     // Trim hyphens

    let uniqueSlug = slug;
    let counter = 1;
    let isUnique = false;

    while (!isUnique) {
        // Check main collection
        const q = query(collection(db, BLOG_COLLECTION), where("slug", "==", uniqueSlug));
        const snapshot = await getDocs(q);

        // Also check redirects to avoid conflicts with old URLs
        const redirectQ = query(collection(db, REDIRECT_COLLECTION), where("oldSlug", "==", uniqueSlug));
        const redirectSnapshot = await getDocs(redirectQ);

        if (snapshot.empty && redirectSnapshot.empty) {
            isUnique = true;
        } else {
            counter++;
            uniqueSlug = `${slug}-${counter}`;
        }
    }

    return uniqueSlug;
};

/**
 * Creates a new blog post.
 */
export const createBlog = async (blogData) => {
    const slug = await generateUniqueSlug(blogData.title);

    await addDoc(collection(db, BLOG_COLLECTION), {
        ...blogData,
        slug,
        status: blogData.status || "draft", // Default to draft
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
    });
};

/**
 * Updates an existing blog post (Content only).
 * DOES NOT change slug.
 */
export const updateBlog = async (id, blogData) => {
    const blogRef = doc(db, BLOG_COLLECTION, id);
    await updateDoc(blogRef, {
        ...blogData,
        updatedAt: serverTimestamp()
    });
};

/**
 * Changes a blog's slug and creates a redirect.
 */
export const changeSlug = async (blogId, oldSlug, newSlug) => {
    const batch = writeBatch(db);

    // 1. Update the blog with the new slug
    const blogRef = doc(db, BLOG_COLLECTION, blogId);
    batch.update(blogRef, {
        slug: newSlug,
        updatedAt: serverTimestamp()
    });

    // 2. Create a redirect from oldSlug -> newSlug
    const redirectRef = doc(collection(db, REDIRECT_COLLECTION));
    batch.set(redirectRef, {
        oldSlug: oldSlug,
        newSlug: newSlug,
        timestamp: serverTimestamp()
    });

    await batch.commit();
};

/**
 * Deletes a blog post.
 */
export const deleteBlog = async (id) => {
    await deleteDoc(doc(db, BLOG_COLLECTION, id));
};

/**
 * Fetches key blog data (slug + title) for internal linking or lists.
 */
export const getBlogList = async (publishedOnly = true) => {
    let q;
    if (publishedOnly) {
        q = query(
            collection(db, BLOG_COLLECTION),
            where("status", "==", "published"),
            orderBy("createdAt", "desc")
        );
    } else {
        q = query(collection(db, BLOG_COLLECTION), orderBy("createdAt", "desc"));
    }

    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

/**
 * Fetches a single blog post by its slug.
 * Handles redirects internally.
 * @returns {Object} { data: BlogData, redirect: string | null }
 */
export const getBlogBySlug = async (slug) => {
    // 1. Try to find the blog directly
    const q = query(collection(db, BLOG_COLLECTION), where("slug", "==", slug), limit(1));
    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
        const doc = snapshot.docs[0];
        return { data: { id: doc.id, ...doc.data() }, redirect: null };
    }

    // 2. If not found, check for a redirect
    const redirectQ = query(collection(db, REDIRECT_COLLECTION), where("oldSlug", "==", slug), limit(1));
    const redirectSnapshot = await getDocs(redirectQ);

    if (!redirectSnapshot.empty) {
        const redirectData = redirectSnapshot.docs[0].data();
        return { data: null, redirect: redirectData.newSlug };
    }

    return { data: null, redirect: null };
};

/**
 * Real-time subscription for Admin Panel.
 */
export const subscribeToAllBlogs = (callback) => {
    const q = query(collection(db, BLOG_COLLECTION), orderBy("createdAt", "desc"));
    return onSnapshot(q, (snapshot) => {
        const blogs = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        callback(blogs);
    });
};
