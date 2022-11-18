import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database'
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCgxAEoFJshRjDg9IKZh1YHVd-Sxq_xjkI",
  authDomain: "jersey-shop-7e4a2.firebaseapp.com",
  projectId: "jersey-shop-7e4a2",
  storageBucket: "jersey-shop-7e4a2.appspot.com",
  messagingSenderId: "815238390553",
  appId: "1:815238390553:web:6bcc5710f76409a75fdb88",
  measurementId: "G-TEZG6ZYN2K"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app)
const auth = getAuth(app)
export default app
export {db,auth}