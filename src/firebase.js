import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8hvbFpgwMXtAAnfdcPJWSXKmovay4Q2c",
  authDomain: "user-profile-285ff.firebaseapp.com",
  projectId: "user-profile-285ff",
  storageBucket: "user-profile-285ff.appspot.com",
  messagingSenderId: "478688893914",
  appId: "1:478688893914:web:7085fb02bd9a2a3799bee3",
  measurementId: "G-D25P4Q053P"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};
