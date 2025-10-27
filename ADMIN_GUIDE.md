# Admin Panel Guide - Nexus 3D

## 🔐 Access Information

### Login Credentials:
- **URL**: `https://nexus3d.in/admin-panel`
- **Username**: `admin`
- **Password**: `admin-0713`

---

## 📖 How to Use the Admin Panel

### 1. **Logging In**
1. Navigate to `/admin-panel` in your browser
2. Enter username: `admin`
3. Enter password: `admin-0713`
4. Click "Login"
5. You'll be automatically logged in and can manage projects

### 2. **Managing Projects**

The admin panel has **3 tabs**:

#### **Tab 1: 3D Renderings (Images)**
- View all current 3D rendering images
- Add new images by entering the image URL
- Delete images by hovering over them and clicking the trash icon
- **Image URL Format**: 
  - Local: `/src/assets/img06.webp`
  - Remote: `https://example.com/image.jpg`

#### **Tab 2: Walkthroughs (Videos)**
- View all walkthrough animation videos
- Add new YouTube videos
- Delete videos by hovering and clicking trash icon
- **Video URL Format**: `https://youtu.be/VIDEO_ID`

#### **Tab 3: Cartoon Animation**
- Manage the single cartoon animation video
- Update by adding a new YouTube URL
- **Video URL Format**: `https://youtu.be/VIDEO_ID`

---

## 🖼️ Adding Images

### Step 1: Upload Image to Project
1. Place your image file in: `nexus3d.in/src/assets/`
2. Use `.webp` format for best performance
3. Name it clearly (e.g., `img06.webp`, `project-villa.webp`)

### Step 2: Add to Admin Panel
1. Go to "3D Renderings" tab
2. In the input field, enter: `/src/assets/your-image-name.webp`
3. Click "Add" button
4. Image will appear immediately

### Example:
```
/src/assets/img06.webp
/src/assets/modern-villa.webp
https://imgur.com/example.jpg
```

---

## 🎥 Adding Videos

### Step 1: Upload Video to YouTube
1. Upload your video to YouTube
2. Click "Share" button on the video
3. Copy the share URL (format: `https://youtu.be/VIDEO_ID`)

### Step 2: Add to Admin Panel
1. Go to "Walkthroughs" or "Cartoon Animation" tab
2. Paste the YouTube URL in the input field
3. Click "Add" button
4. Video will be embedded immediately

### Example YouTube URLs:
```
https://youtu.be/jYl_fKvGaYk?si=MS7a_7VcZ1ydvLZq
https://youtu.be/W_uMtE21BFs
https://youtube.com/watch?v=VIDEO_ID (will work but share URL is better)
```

---

## 🗑️ Deleting Projects

1. Hover over any image or video
2. Click the red trash icon that appears in the top-right corner
3. Confirm the deletion
4. Item will be removed immediately

---

## 💾 How Data is Stored

- All project data is saved in **browser's localStorage**
- Changes are **instant and automatic**
- Data persists even after closing the browser
- Changes immediately reflect on the Projects page

### Important Notes:
- Data is stored locally in the browser
- Clearing browser data will reset to defaults
- For permanent storage, consider using a backend database (future enhancement)

---

## 🔄 How Projects Update on Website

### Real-Time Updates:
1. Add/delete items in admin panel
2. Changes save to localStorage automatically
3. Projects page checks for updates every second
4. New items appear without page refresh

### Manual Update:
- Refresh the Projects page to see changes immediately

---

## 🛡️ Security Features

- **Password Protection**: Only authorized users can access
- **Session Persistence**: Stay logged in until you logout
- **Logout Button**: Always visible in top-right corner
- **Clean Login UI**: Professional authentication screen

### To Logout:
1. Click "Logout" button in top-right corner
2. You'll be redirected to login screen
3. Login credentials are cleared from browser

---

## 📱 Mobile Support

- Admin panel is fully responsive
- Works on desktop, tablet, and mobile
- Touch-friendly delete buttons
- Optimized layout for all screen sizes

---

## 🎨 Features

### Current Features:
- ✅ Add unlimited images
- ✅ Add unlimited walkthrough videos
- ✅ Update cartoon animation video
- ✅ Delete any item
- ✅ Real-time preview
- ✅ YouTube video embedding
- ✅ Image URL support (local & remote)
- ✅ Auto-save functionality
- ✅ Responsive design
- ✅ Hover delete controls

### Future Enhancements (Optional):
- 📸 Direct image upload (drag & drop)
- 🗄️ Backend database integration
- 📝 Edit project titles/descriptions
- 🏷️ Add project categories/tags
- 🔄 Reorder projects (drag & drop)
- 📊 Analytics dashboard

---

## ⚠️ Troubleshooting

### Image Not Showing:
- Check file path is correct
- Ensure image exists in `/src/assets/` folder
- Verify file extension matches (.webp, .jpg, .png)
- Try using a full URL instead

### Video Not Playing:
- Ensure YouTube URL is in share format
- Check video is public (not private/unlisted)
- Try removing URL parameters (everything after `?`)
- Verify internet connection

### Can't Login:
- Check username is exactly: `admin`
- Check password is exactly: `admin-0713`
- Clear browser cache and try again

### Changes Not Appearing:
- Refresh the Projects page
- Clear browser cache
- Check localStorage is enabled in browser

---

## 🔧 Technical Details

### Files Modified:
1. `src/Components/AdminPanel.jsx` - Main admin interface
2. `src/Components/AdminLogin.jsx` - Login screen
3. `src/Components/Projects.jsx` - Updated to use localStorage
4. `src/App.jsx` - Added admin route

### Data Structure:
```json
{
  "images": ["url1", "url2", "url3"],
  "videos": ["url1", "url2", "url3"],
  "cartoonVideo": "url"
}
```

### LocalStorage Key:
- `nexus3d_projects` - Stores all project data
- `adminAuth` - Stores login status

---

## 📞 Support

For technical issues or questions:
- **Email**: nexus3dstudio@gmail.com
- **Phone**: +91-9756170713
- **WhatsApp**: +91-9756170713

---

## 🎓 Quick Start Guide

1. **Access Admin**: Go to `yourwebsite.com/admin-panel`
2. **Login**: Use `admin` / `admin-0713`
3. **Add Image**: Upload to `/src/assets/`, then add path in admin
4. **Add Video**: Upload to YouTube, copy share URL, paste in admin
5. **Delete**: Hover and click trash icon
6. **Logout**: Click logout button when done

---

**Last Updated**: October 27, 2025  
**Version**: 1.0  
**Status**: Fully Functional ✅

