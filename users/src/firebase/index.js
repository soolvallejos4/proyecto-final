import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD2tTis6VCaA-jJ23bt0V2PbDae-4CE-1A",
  authDomain: "doble5.firebaseapp.com",
  projectId: "doble5",
  storageBucket: "doble5.appspot.com",
  messagingSenderId: "44649553705",
  appId: "1:44649553705:web:22c056117367b29b5c6138",
  measurementId: "G-YH02GRZBFF"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);

export {auth,db}