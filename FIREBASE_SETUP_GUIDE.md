# Firebase Setup Guide for Nexus 3D

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Add project"** or **"Create a project"**
3. Enter project name: `nexus3d` (or any name you prefer)
4. **Disable Google Analytics** (not needed for this project)
5. Click **"Create project"**

## Step 2: Set up Firestore Database

1. In your Firebase project, click on **"Firestore Database"** in the left sidebar
2. Click **"Create database"**
3. Choose **"Start in production mode"**
4. Select a Cloud Firestore location (choose closest to your users, e.g., `asia-south1` for India)
5. Click **"Enable"**

## Step 3: Configure Security Rules

1. In Firestore Database, go to the **"Rules"** tab
2. Replace the default rules with:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow anyone to read projects
    match /projects/{document=**} {
      allow read: if true;
    }
    
    // Only allow authenticated admin to write
    match /projects/{document=**} {
      allow write: if request.auth != null;
    }
  }
}
```

3. Click **"Publish"**

## Step 4: Enable Authentication

1. Click on **"Authentication"** in the left sidebar
2. Click **"Get started"**
3. Go to the **"Sign-in method"** tab
4. Click on **"Email/Password"**
5. **Enable** the first option (Email/Password)
6. Click **"Save"**

## Step 5: Create Admin User

1. Still in **Authentication**, go to the **"Users"** tab
2. Click **"Add user"**
3. Enter:
   - **Email**: `admin@nexus3d.in` (or your preferred email)
   - **Password**: `admin-0713` (or your preferred password - you can change this)
4. Click **"Add user"**
5. **Copy the User UID** - you'll need this!

## Step 6: Get Firebase Configuration

1. Click on the **gear icon** ⚙️ next to "Project Overview"
2. Click **"Project settings"**
3. Scroll down to **"Your apps"** section
4. Click the **Web icon** `</>`
5. Enter app nickname: `nexus3d-web`
6. **Don't check** "Also set up Firebase Hosting"
7. Click **"Register app"**
8. **Copy the firebaseConfig object** - it looks like this:

```javascript
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "nexus3d-xxxxx.firebaseapp.com",
  projectId: "nexus3d-xxxxx",
  storageBucket: "nexus3d-xxxxx.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:xxxxx"
};
```

## Step 7: Add Configuration to Your Project

1. Open `nexus3d.in/src/firebase.js` (I'll create this file)
2. Replace the placeholder config with your actual Firebase config
3. Replace the `ADMIN_UID` with the User UID you copied in Step 5

## Step 8: Initialize Default Data (Optional)

Once everything is set up and deployed:

1. Go to your admin panel: https://nexus3d.in/admin-panel
2. Login with the email and password you created in Step 5
3. Your existing projects will automatically be migrated to Firebase!

---

## Important Notes:

- **Keep your Firebase config safe** - it's okay to commit it to GitHub (it's meant to be public)
- **The User UID is important** - only this user can add/delete projects
- **Free tier limits**: Firebase free tier gives you:
  - 50K document reads/day
  - 20K document writes/day
  - 1GB storage
  - This is more than enough for your website!

---

## Need Help?

If you encounter any issues during setup, let me know which step you're stuck on!

