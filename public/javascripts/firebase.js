
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD6jIJLDBX7M6CdKG8zng9SnKbaRwzapM4",
    authDomain: "fir-a0423.firebaseapp.com",
    
    projectId: "fir-a0423",
    storageBucket: "fir-a0423.appspot.com",
    messagingSenderId: "429112042781",
    appId: "1:429112042781:web:727d800520ce7c202f2df4",
    measurementId: "G-9W7ZHHSZYB"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
