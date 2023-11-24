// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0OSr4UZxlNa6dzbczQOx_YV-1zXjlIKs",
  authDomain: "baumuster-db.firebaseapp.com",
  projectId: "baumuster-db",
  storageBucket: "baumuster-db.appspot.com",
  messagingSenderId: "761372668277",
  appId: "1:761372668277:web:0c61a43461f7737294233c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export function FirebaseApp(){
    return app
}