# 🔧 Environment Setup Guide

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Add project"** or **"Create a project"**
3. Enter project name: `civicconnect` (or your preferred name)
4. Enable Google Analytics (optional)
5. Click **"Create project"**

## Step 2: Enable Firebase Services

### Firestore Database

1. In Firebase Console, go to **Firestore Database**
2. Click **"Create database"**
3. Select **"Start in test mode"** (we'll update rules later)
4. Choose location closest to your users
5. Click **"Enable"**

### Firebase Storage

1. Go to **Storage** in Firebase Console
2. Click **"Get started"**
3. Accept default security rules
4. Click **"Done"**

### Firebase Authentication

1. Go to **Authentication** in Firebase Console
2. Click **"Get started"**
3. Select **"Email/Password"** from sign-in methods
4. Enable **Email/Password**
5. Click **"Save"**

## Step 3: Get Firebase Configuration

1. In Firebase Console, go to **Project Settings** (gear icon)
2. Scroll down to **"Your apps"**
3. Click **Web icon** (</>) to add a web app
4. Register app name: `CivicConnect Web`
5. Copy the configuration object

Example:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "civicconnect-xxxxx.firebaseapp.com",
  projectId: "civicconnect-xxxxx",
  storageBucket: "civicconnect-xxxxx.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:xxxxxxxxxxxxx",
};
```

## Step 4: Get Firebase Admin SDK Credentials

1. In Firebase Console, go to **Project Settings**
2. Go to **Service accounts** tab
3. Click **"Generate new private key"**
4. Save the JSON file securely
5. Extract these values:
   - `project_id`
   - `client_email`
   - `private_key`

## Step 5: Create .env.local File

Create a file named `.env.local` in your project root:

```env
# Firebase Client Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=civicconnect-xxxxx.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=civicconnect-xxxxx
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=civicconnect-xxxxx.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789012
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789012:web:xxxxxxxxxxxxx

# Firebase Admin SDK
FIREBASE_PROJECT_ID=civicconnect-xxxxx
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@civicconnect-xxxxx.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----\n"
FIREBASE_STORAGE_BUCKET=civicconnect-xxxxx.appspot.com

# Google Maps API (Get from Step 6)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

**Important:**

- Replace all `xxxxx` with your actual values
- For `FIREBASE_PRIVATE_KEY`, keep the quotes and newlines as shown
- Never commit this file to Git (it's in .gitignore)

## Step 6: Get Google Maps API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable these APIs:
   - **Maps JavaScript API**
   - **Places API**
   - **Geocoding API**
   - **Geolocation API**

### Enable APIs:

```
1. Go to "APIs & Services" → "Library"
2. Search for each API
3. Click "Enable"
```

### Create API Key:

```
1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "API Key"
3. Copy the API key
4. Click "Restrict Key" (recommended)
```

### Restrict API Key (Production):

```
Application restrictions:
- HTTP referrers (websites)
- Add: your-domain.com/*

API restrictions:
- Restrict key to specific APIs
- Select: Maps JavaScript API, Places API, Geocoding API
```

## Step 7: Update Firebase Security Rules

### Firestore Rules

1. Go to **Firestore Database** → **Rules**
2. Replace with contents from `firestore.rules` file
3. Click **"Publish"**

### Storage Rules

1. Go to **Storage** → **Rules**
2. Replace with contents from `storage.rules` file
3. Click **"Publish"**

## Step 8: Create Firestore Indexes

Go to **Firestore Database** → **Indexes** → **Composite** and create:

**Index 1:**

```
Collection: reports
Fields:
  - status (Ascending)
  - createdAt (Descending)
Query scope: Collection
```

**Index 2:**

```
Collection: reports
Fields:
  - category (Ascending)
  - createdAt (Descending)
Query scope: Collection
```

**Index 3:**

```
Collection: reports
Fields:
  - userId (Ascending)
  - createdAt (Descending)
Query scope: Collection
```

**Index 4:**

```
Collection: reports
Fields:
  - status (Ascending)
  - category (Ascending)
  - createdAt (Descending)
Query scope: Collection
```

## Step 9: Verify Setup

### Test Firebase Connection

Create a test file `test-firebase.js`:

```javascript
import { db } from "./lib/firebase";
import { collection, addDoc } from "firebase/firestore";

async function testFirebase() {
  try {
    const docRef = await addDoc(collection(db, "test"), {
      message: "Hello from CivicConnect!",
      timestamp: new Date(),
    });
    console.log("✅ Firebase connected! Document ID:", docRef.id);
  } catch (error) {
    console.error("❌ Firebase error:", error);
  }
}

testFirebase();
```

Run: `node test-firebase.js`

### Test Google Maps

Add this to any page temporarily:

```javascript
console.log("Maps API Key:", process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);
```

## Step 10: Restart Development Server

```powershell
# Stop the current server (Ctrl+C)
# Restart with new environment variables
npm run dev
```

## Verification Checklist

- [ ] `.env.local` file created
- [ ] All Firebase credentials added
- [ ] Google Maps API key added
- [ ] Firestore security rules deployed
- [ ] Storage security rules deployed
- [ ] Composite indexes created
- [ ] Development server restarted
- [ ] No console errors
- [ ] Firebase connection test passed

## Troubleshooting

### Error: "Firebase: Error (auth/invalid-api-key)"

- Check `NEXT_PUBLIC_FIREBASE_API_KEY` in `.env.local`
- Ensure no extra spaces or quotes
- Restart dev server

### Error: "Missing or insufficient permissions"

- Check Firestore rules are deployed
- Verify user authentication status
- Check rule conditions match your data

### Error: "Storage: Object does not exist"

- Check Storage rules are deployed
- Verify file path is correct
- Ensure bucket name matches

### Google Maps not loading

- Check `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
- Verify Maps JavaScript API is enabled
- Check browser console for errors
- Ensure API key restrictions allow localhost

### Environment variables not updating

- Restart dev server after changing `.env.local`
- Clear Next.js cache: `rm -rf .next`
- Check variable names have `NEXT_PUBLIC_` prefix for client-side

## Security Best Practices

### Development

- Keep `.env.local` out of version control
- Use test mode for Firestore initially
- Enable authentication as soon as possible

### Production

- Update Firestore rules for production
- Update Storage rules for production
- Restrict API keys to your domain
- Enable rate limiting
- Set up Firebase App Check
- Monitor usage in Firebase Console

## Cost Management

### Firebase Free Tier Limits

- **Firestore**: 50K reads, 20K writes, 20K deletes per day
- **Storage**: 5GB storage, 1GB per day downloads
- **Authentication**: Unlimited

### Google Maps Free Tier

- **$200 free credit per month**
- Maps JavaScript API: $7 per 1,000 loads
- Places API: $17 per 1,000 requests
- Geocoding API: $5 per 1,000 requests

### Tips to Stay in Free Tier

- Implement caching
- Optimize map loads
- Use lazy loading
- Monitor usage in console
- Set up billing alerts

## Next Steps

1. ✅ Complete environment setup
2. Test report submission
3. Test image upload
4. Build Track Reports page
5. Implement admin dashboard

## Need Help?

- [Firebase Documentation](https://firebase.google.com/docs)
- [Google Maps API Docs](https://developers.google.com/maps/documentation)
- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)

---

**Once setup is complete, you're ready to start building! 🚀**
