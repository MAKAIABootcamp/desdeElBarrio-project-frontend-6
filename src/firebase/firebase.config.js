import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from 'uuid'

// const firebaseConfig = {
//   apiKey: "AIzaSyBFi5euAUGNvXw5e7e37rmYgVsNmGEJxJ8",
//   authDomain: "reactfirebasedemoday.firebaseapp.com",
//   projectId: "reactfirebasedemoday",
//   storageBucket: "reactfirebasedemoday.appspot.com",
//   messagingSenderId: "165287269163",
//   appId: "1:165287269163:web:7a56b88cd2cb388e98eb6e",
//   measurementId: "G-ZKS68Q1W6V"
// };

const firebaseConfig = {
  apiKey: "AIzaSyAbvI7Jvi0GNFK4zbWD-wG2ROoCJQ8_Mf8",
  authDomain: "desde-el-barrio-website.firebaseapp.com",
  projectId: "desde-el-barrio-website",
  storageBucket: "desde-el-barrio-website.appspot.com",
  messagingSenderId: "238208353386",
  appId: "1:238208353386:web:1ccfba3eee5d51a35df613",
  measurementId: "G-E24H4P0V3M",

};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage(app);
export const auth = getAuth(app)
export const firestore = getFirestore(app)
export const db = getFirestore(app);

//Subida de archivos a Storage
export async function uploadFile(file) {
  const storageRef = ref(storage, v4())
  await uploadBytes(storageRef, file)
  const URL = getDownloadURL(storageRef)
  return URL
}

