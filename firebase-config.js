// firebase-config.js
// Shared Firebase configuration for the Smart Security System project.
// Used by: security-dashboard.html, admin-upload.html, watch-console.html
//
// Project: security-system-18c37

const firebaseConfig = {
  apiKey: "AIzaSyAhvqMnlZdobI7VmQLO9ak9_hVIfapyfHI",
  authDomain: "security-system-18c37.firebaseapp.com",
  databaseURL: "https://security-system-18c37-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "security-system-18c37",
  storageBucket: "security-system-18c37.firebasestorage.app",
  messagingSenderId: "664967667526",
  appId: "1:664967667526:web:b40fab85a5cc967d4f0f47",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
