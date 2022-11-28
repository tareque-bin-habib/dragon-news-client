// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAcy6vpReQ9eLLxYzYE8UTLCaYb_sqkQx8",
    authDomain: "dragon-news-7db0d.firebaseapp.com",
    projectId: "dragon-news-7db0d",
    storageBucket: "dragon-news-7db0d.appspot.com",
    messagingSenderId: "23905121855",
    appId: "1:23905121855:web:895e044f7e045989492a8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;