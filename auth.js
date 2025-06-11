import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Your config
const firebaseConfig = {
  apiKey: "AIzaSyAjrk9qoc7BoIxTeNkrpiTb_Ka1v2ULMgM",
  authDomain: "library-system-5eee6.firebaseapp.com",
  projectId: "library-system-5eee6",
  storageBucket: "library-system-5eee6.appspot.com",
  messagingSenderId: "87185397772",
  appId: "1:87185397772:web:a2a0a6609b998d42503629"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle register
document.getElementById("registerForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      return updateProfile(userCredential.user, {
        displayName: name
      });
    })
    .then(() => {
      alert("Registration successful! You can now log in.");
      window.location.href = "login.html";
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
});

// Handle login
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Login successful!");
      window.location.href = "userdashboard.html";  // Redirect after login
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
    });
});
