import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDK7U8aKcJgZVlfuGLmkaBlQ3q-uZ25IvY",
  authDomain: "nexus3d-edf5f.firebaseapp.com",
  projectId: "nexus3d-edf5f",
  storageBucket: "nexus3d-edf5f.firebasestorage.app",
  messagingSenderId: "403950933485",
  appId: "1:403950933485:web:42ced28f647d95e39d43e4",
  measurementId: "G-3194L7TXT4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Authentication
export const auth = getAuth(app);

// Admin User UID - The UID of your admin user from Firebase Authentication
export const ADMIN_UID = "jbQAlag59rZV6GHTxMWzvOdVK1E3";

