// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
   apiKey: "AIzaSyA05P1xTD86r4FSacfzaRiDv7hwqYFaNMo",
   authDomain: "my-kino-cms.firebaseapp.com",
   projectId: "my-kino-cms",
   storageBucket: "my-kino-cms.appspot.com",
   messagingSenderId: "18464466854",
   appId: "1:18464466854:web:80be9540c51cfc65be9167",
   measurementId: "G-2Y2KWPNMH9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const db = getFirestore()
export default db