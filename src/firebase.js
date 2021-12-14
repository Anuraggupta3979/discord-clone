// import firebase from "firebase";
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBM5JIW4ethv4pZcyzCPwSUrYW06bllyMI",
  authDomain: "discord-clone-c471e.firebaseapp.com",
  projectId: "discord-clone-c471e",
  storageBucket: "discord-clone-c471e.appspot.com",
  messagingSenderId: "846323740614",
  appId: "1:846323740614:web:5c713efbc0881bbe824cc7",
  measurementId: "G-CK0CW40979",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
