import React, {useState, useEffect} from "react"
import {auth} from "../firebase/firebase.config"
import { createContext, useContext } from "react"
import { 
    createUserWithEmailAndPassword , 
    signInWithEmailAndPassword, 
    GoogleAuthProvider, 
    signInWithPopup,
    signOut,
    onAuthStateChanged
} from "firebase/auth"

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    console.log("Error create auth context");
  }
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState("");
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    const suscribed = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        console.log("No hay usuario suscrito");
        setUser("");
        setUserInfo({});
      } else {
        setUser(currentUser);
        // Pasar a una funcion que se llama getDatabaseInfo(collection, document)
        const docRef = doc(db, "user", currentUser.uid);
        const docSnap = await getDoc(docRef);

        // This takes a snap of db and give the user info
        if (docSnap.exists()) {
          setUserInfo(docSnap.data());
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No se encontro info");
        }
      }
    });
    return () => suscribed();
  }, []);

  const register = async (email, password) => {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(response);
    return response;
  };
  const login = async (email, password) => {
    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log(response);
    return response;
  };

  const loginWithGoogle = async () => {
    const responseGoogle = new GoogleAuthProvider();
    return await signInWithPopup(auth, responseGoogle);
  };
  const logout = async () => {
    const response = await signOut(auth);
    console.log(response);
  };
  return (
    <authContext.Provider
      value={{
        register,
        login,
        loginWithGoogle,
        logout,
        user,
        userInfo,
      }}
    >
      {children}
    </authContext.Provider>
  );
}
