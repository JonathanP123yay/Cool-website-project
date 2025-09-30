// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCWGMtMzOwGMV3W3vju8bUrXM8q4wgMXL8",
  authDomain: "my-first-html-project-5b45f.firebaseapp.com",
  databaseURL: "https://my-first-html-project-5b45f-default-rtdb.firebaseio.com", // 👈 add this
  projectId: "my-first-html-project-5b45f",
  storageBucket: "my-first-html-project-5b45f.appspot.com", // 👈 fix `.app` to `.appspot.com`
  messagingSenderId: "271178270107",
  appId: "1:271178270107:web:e5a0cdf806524538140d3e",
  measurementId: "G-4KTMEQK205"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };
