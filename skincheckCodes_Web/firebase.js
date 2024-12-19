import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCSoYhwQHqT5LVzeDjcuTqi5xtAOH13bkM",
    authDomain: "skincheck-435a9.firebaseapp.com",
    projectId: "skincheck-435a9",
    storageBucket: "skincheck-435a9.firebasestorage.app",
    messagingSenderId: "939869338366",
    appId: "1:939869338366:web:2d2f7e1c809f5742c283af",
    measurementId: "G-TK8CSQ0P9D"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
