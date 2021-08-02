import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDmahKNGk1JsljSqhXfsLZwcePHgEcHIJM",
  authDomain: "slack-clone-64312.firebaseapp.com",
  projectId: "slack-clone-64312",
  storageBucket: "slack-clone-64312.appspot.com",
  messagingSenderId: "264999247742",
  appId: "1:264999247742:web:f41e95fcaf74f1bffc5d2f",
  measurementId: "G-WFKV8WJB80",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
