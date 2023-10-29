import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDD5ocPfVvKz2FrK_NhyAEBDxm_Zfpdq7w",
  authDomain: "spck-3c530.firebaseapp.com",
  projectId: "spck-3c530",
  storageBucket: "spck-3c530.appspot.com",
  messagingSenderId: "682032601285",
  appId: "1:682032601285:web:9d04b91cedcccc2a7cf8ac",
  measurementId: "G-B5G178WYMQ",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const signup = async (auth, email, password) => {
  let isChecked;
  let info;
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    console.log(user);
    isChecked = true;
  } catch (error) {
    console.log(error.code);
    isChecked = false;
    info = error.code;
  }
  return {
    isChecked,
    info,
  };
};

export const Login = async (auth, email, password) => {
  let isChecked;
  let info;
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    console.log(user);
    isChecked = true;
  } catch (error) {
    console.log(error.code);
    isChecked = false;
    info = error.code;
  }
  return {
    isChecked,
    info,
  };
};
