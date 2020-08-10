import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA4rZzpEcog9xjN7LhGl3HWcrq7uN49JxU",
  authDomain: "clone-gm.firebaseapp.com",
  databaseURL: "https://clone-gm.firebaseio.com",
  projectId: "clone-gm",
  storageBucket: "clone-gm.appspot.com",
  messagingSenderId: "540892565265",
  appId: "1:540892565265:web:708dced61dc81530b986b0",
  measurementId: "G-GS0DCHFZCN",
});

const auth = firebase.auth();
export { auth };
