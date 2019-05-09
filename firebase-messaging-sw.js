importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

var firebaseConfig = {
  apiKey: "AIzaSyDed0wplBQAobaE0qLFcaa3X_XWjCwOgRE",
  authDomain: "pwa-push-test-33892.firebaseapp.com",
  databaseURL: "https://pwa-push-test-33892.firebaseio.com",
  projectId: "pwa-push-test-33892",
  storageBucket: "pwa-push-test-33892.appspot.com",
  messagingSenderId: "540875100731",
  appId: "1:540875100731:web:0a20afa4e5eb652a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
const messaging = firebase.messaging();
console.log('aabb');
