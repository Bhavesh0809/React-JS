# Firebase Storage Upload App

This small React-style Firebase Storage demo uses Firebase CDN modules and plain JavaScript.

## Setup

1. Open the Firebase Console: https://console.firebase.google.com/
2. Create a new Firebase project (or open an existing one).
3. In Project Settings, add a Web app and copy the Firebase config.
4. Replace the placeholder values in `src/firebase-config.js` with your values.

Example config:

```js
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};
```

## Firebase Storage Rules

For testing, use a simple rule like this, then tighten it before production:

```js
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow write, read: if true;
    }
  }
}
```

## Run locally

Open `index.html` in a browser or use a local server. The app will upload selected images to Firebase Storage and show the uploaded image preview.
