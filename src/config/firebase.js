import firebase from "firebase/compat/app";
import "firebase/compat/auth";
//import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAQu32ojMCz2J-IvUzpG8aFUk2BwoBaMA4",
    authDomain: "file-management-system-53307.firebaseapp.com",
    projectId: "file-management-system-53307",
    storageBucket: "file-management-system-53307.appspot.com",
    messagingSenderId: "800929346264",
    appId: "1:800929346264:web:b24e1a698d458a90a0ddad"
  };
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;