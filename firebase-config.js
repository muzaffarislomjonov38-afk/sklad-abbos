diff --git a/firebase-config.js b/firebase-config.js
index 1e1869ec38055a71523b3fe27832b200f465cd73..8522d01bd54b0117d102e443388a45d7ed800287 100644
--- a/firebase-config.js
+++ b/firebase-config.js
@@ -1,10 +1,15 @@
 window.SALESNILPAK_FIREBASE_CONFIG = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_PROJECT_ID.appspot.com",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID"
 };
 
 window.SALESNILPAK_FIREBASE_DOC = "salesnilpak/default";
+
+window.SALESNILPAK_NETLIFY_CONFIG = {
+    endpoint: "/.netlify/functions/sales-data",
+    token: ""
+};
