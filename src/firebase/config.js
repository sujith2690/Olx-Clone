import firebase  from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAWC0A_Q4Dad4thkka7IlCsShVcDdVnUQQ",
    authDomain: "olx-clone-1024.firebaseapp.com",
    projectId: "olx-clone-1024",
    storageBucket: "olx-clone-1024.appspot.com",
    messagingSenderId: "125061187918",
    appId: "1:125061187918:web:a4a436e908ff3606a2f61f",
    measurementId: "G-ZLX4CT6XP8"
  };

export default firebase.initializeApp(firebaseConfig)