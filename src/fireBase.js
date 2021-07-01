// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCvkMqh-CgtpIKrSISxD61QImzJJhD37SQ",
  authDomain: "clone-bb26a.firebaseapp.com",
  projectId: "clone-bb26a",
  storageBucket: "clone-bb26a.appspot.com",
  messagingSenderId: "917175249872",
  appId: "1:917175249872:web:e421558693d716176727d5",
  measurementId: "G-LLF1PEJ9HB"
};

const firebaseApp= firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };