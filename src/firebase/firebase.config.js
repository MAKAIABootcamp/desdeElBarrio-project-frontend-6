// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBFi5euAUGNvXw5e7e37rmYgVsNmGEJxJ8",
  authDomain: "reactfirebasedemoday.firebaseapp.com",
  projectId: "reactfirebasedemoday",
  storageBucket: "reactfirebasedemoday.appspot.com",
  messagingSenderId: "165287269163",
  appId: "1:165287269163:web:7a56b88cd2cb388e98eb6e",
  measurementId: "G-ZKS68Q1W6V"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)