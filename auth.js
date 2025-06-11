
// auth.js (must be loaded as a type="module" script in HTML)

// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// ✅ Your Firebase config (replace with yours)
const firebaseConfig = {
  apiKey: "AIzaSyAjrk9qoc7BoIxTeNkrpiTb_Ka1v2ULMgM",
  authDomain: "library-system-5eee6.firebaseapp.com",
  projectId: "library-system-5eee6",
  storageBucket: "library-system-5eee6.firebasestorage.app",
  messagingSenderId: "87185397772",
  appId: "1:87185397772:web:a2a0a6609b998d42503629"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle Register Form Submit
document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      // ✅ Set display name in Firebase Auth
      return updateProfile(user, {
        displayName: name
      });
    })
    .then(() => {
      alert("Registration successful!");
      window.location.href = "dashboard.html"; // or home page
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
});
