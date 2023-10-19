
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcfT1jmFj7oukY_w_9Uz6fIcbIADA5lhM",
  authDomain: "react-portfolio-nilesh.firebaseapp.com",
  projectId: "react-portfolio-nilesh",
  storageBucket: "react-portfolio-nilesh.appspot.com",
  messagingSenderId: "169632853903",
  appId: "1:169632853903:web:56706e4d757ecd2543e5fa"
};


export const app = initializeApp(firebaseConfig);
export const db=getFirestore()