import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDequzwDNsiMJ3Uvp_KaLKNJ-2WWYIu99E",
  authDomain: "todo-reactjs-firebase.firebaseapp.com",
  databaseURL: "https://todo-reactjs-firebase-default-rtdb.firebaseio.com",
  projectId: "todo-reactjs-firebase",
  storageBucket: "todo-reactjs-firebase.appspot.com",
  messagingSenderId: "610872491499",
  appId: "1:610872491499:web:e0e34b31a6e4e5f25aedae",
  measurementId: "G-3C6BJT6ECS",
});

const db = firebaseApp.firestore();

export default db;
