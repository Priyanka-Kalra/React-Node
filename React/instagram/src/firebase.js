import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/storage'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCVlOsYpNQnbAu7YDXdsG9pIikzyAHraVE",
    authDomain: "reelapp-1abc0.firebaseapp.com",
    projectId: "reelapp-1abc0",
    storageBucket: "reelapp-1abc0.appspot.com",
    messagingSenderId: "573107708745",
    appId: "1:573107708745:web:75e5ec8923b76e26b03098"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth=firebase.auth();
const firestore=firebase.firestore();
export const database= {
    users: firestore.collection('users'),
    posts : firestore.collection('posts'),
    comments : firestore.collection('comments'),
    getTimeStamp: firebase.firestore.FieldValue.serverTimestamp
}

export const storage=firebase.storage()