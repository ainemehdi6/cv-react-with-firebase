// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBfjHbXOqHgUMrXai7UvNoyLzsi90WEENE",
    authDomain: "fir-test-3b75e.firebaseapp.com",
    projectId: "fir-test-3b75e",
    storageBucket: "fir-test-3b75e.appspot.com",
    messagingSenderId: "463266489665",
    appId: "1:463266489665:web:fda57f7ea504c5ebd52dc0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export default app
export const auth = getAuth(app) 