
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {

    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_APPID
    // apiKey: "AIzaSyALr1BlMPJnyYMF-xC1QSS8cyjYhI-jq08",
    // authDomain: "food-sharing-84884.firebaseapp.com",
    // projectId: "food-sharing-84884",
    // storageBucket: "food-sharing-84884.appspot.com",
    // messagingSenderId: "236140003138",
    // appId: "1:236140003138:web:7d87558ab29bce9c7ad2db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;