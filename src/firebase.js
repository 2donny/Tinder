import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCLpHyNnXXXdvUKnNSMmEVIhtTbHGUAvOY",
    authDomain: "tinder-clone-4e04d.firebaseapp.com",
    databaseURL: "https://tinder-clone-4e04d.firebaseio.com",
    projectId: "tinder-clone-4e04d",
    storageBucket: "tinder-clone-4e04d.appspot.com",
    messagingSenderId: "395769978823",
    appId: "1:395769978823:web:92ede03c72e320069103e2",
    measurementId: "G-HC8M8ZH2S2"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;