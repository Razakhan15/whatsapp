import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTiQW9wrig6Kkqk-rqxg4nAvBHemCUDoM",
  authDomain: "whatsapp-clone-906be.firebaseapp.com",
  projectId: "whatsapp-clone-906be",
  storageBucket: "whatsapp-clone-906be.appspot.com",
  messagingSenderId: "440703896290",
  appId: "1:440703896290:web:158e9dfc5837d3e4af2cbb",
  measurementId: "G-LFJJJ5D7E0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
