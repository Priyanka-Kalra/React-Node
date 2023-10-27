import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/storage'
import 'firebase/compat/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-IuJTySjJMEQWMUDKLQEPHmEOUvTh9H4",
    authDomain: "fir-8dcc5.firebaseapp.com",
    projectId: "fir-8dcc5",
    storageBucket: "fir-8dcc5.appspot.com",
    messagingSenderId: "290138231122",
    appId: "1:290138231122:web:44aca83a59d9707ebbaa8b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth=firebase.auth();
const firestore=firebase.firestore();
export const database= {
    users: firestore.collection('users')
}
export const storage=firebase.storage()