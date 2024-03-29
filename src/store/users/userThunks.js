//tramitar info de autentificación y manipular info con el store async

import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { setError, setIsAuthenticate, setUser } from "./userSlice";
import { auth } from "../../firebase/firebase.config";
import {
  createUserInCollection,
  getUserFromCollection,
  loginFromFirestore,
} from "../../services/userServices";

export const createAnAccountAsync = (newUser) => async (dispatch) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      newUser.email,
      newUser.password
    );
    await updateProfile(auth.currentUser, {
      displayName: newUser.name,
      photoURL: newUser.photoUrl,
    });
    const userLogged = await createUserInCollection(user.uid, {
      name: newUser.name,
      accessToken: user.accessToken,
      email: newUser.email,
      photoURL: newUser.photoURL,
      rol: newUser.rol,
    });
    // console.log(user)
    dispatch(
      setUser({
        id: userLogged.uid,
        displayName: userLogged.name,
        email: userLogged.email,
        photoURL: userLogged.photoURL,
        accessToken: userLogged.accessToken,
        rol: userLogged.rol,
      })
    );
    dispatch(setIsAuthenticate(true));
    dispatch(setError(false));
  } catch (error) {
    console.warn(error);
    dispatch(
      setError({ error: true, code: error.code, message: error.message })
    );
  }
};

export const loginGoogle = () => {
  const provider = new GoogleAuthProvider();
  return async (dispatch) => {
    try {
      const userCredencial = await signInWithPopup(auth, provider);
      const userLogged = await loginFromFirestore(userCredencial.user);
      console.log(userLogged);
      dispatch(setIsAuthenticate(true));
      dispatch(setUser(userLogged));
    } catch (error) {
      dispatch(setIsAuthenticate(false));
      dispatch(
        setError({ error: true, code: error.code, message: error.message })
      );
    }
  };
};

export const loginWithEmailAndPassword =
  ({ correo, contrasena }) =>
  async (dispatch) => {
    try {
      const { user } = await signInWithEmailAndPassword(
        auth,
        correo,
        contrasena
      );
      const userLogged = await getUserFromCollection(user.uid);
      console.log(userLogged);
      if (userLogged) {
        dispatch(setIsAuthenticate(true));
        dispatch(
          setUser({
            email: userLogged.email,
            id: userLogged.uid,
            name: userLogged.name,
            photoURL: userLogged.photoURL,
            accessToken: userLogged.accessToken,
          })
        );
        dispatch(setError(false));
      } else {
        dispatch(setIsAuthenticate(false));
        dispatch(setError({ error: true }));
      }
    } catch (error) {
      dispatch(setIsAuthenticate(false));
      dispatch(
        setError({ error: true, code: error.code, message: error.message })
      );
    }
  };

export const logoutAsync = () => async (dispatch) => {
  try {
    await signOut(auth);
    dispatch(setIsAuthenticate(false));
    dispatch(setUser(null));
    dispatch(setError(null));
  } catch (error) {
    dispatch(
      setError({ error: true, code: error.code, message: error.message })
    );
  }
};

export const loginWithCodeAsync = (code) => async (dispatch) => {
  const confirmationResult = window.confirmationResult;
  try {
    confirmationResult.confirm(code).then(async (response) => {
      const user = response.user.auth.currentUser;
      const userLogged = await loginFromFirestore(user);
      console.log(userLogged);
      dispatch(setIsAuthenticate(true));
      dispatch(setUser(userLogged));
      console.log(user);
      // dispatch(setUser({ email: user.email, id: user.uid, name: user.displayName, photoURL: user.photoURL, accessToken: user.accessToken }))
      dispatch(setError(false));
    });
  } catch (error) {
    dispatch(
      setError({ error: true, code: error.code, message: error.message })
    );
  }
};

export const getUserFromFirestoreAction = (uid) => async (dispatch) => {
  try {
    const user = await getUserFromCollection(uid);
    dispatch(setIsAuthenticate(true));
    dispatch(setUser(user));
    console.log(user);
    // dispatch(setUser({ email: user.email, id: user.uid, name: user.displayName, photoURL: user.photoURL, accessToken: user.accessToken }))
    dispatch(setError(false));
  } catch (error) {
    console.error(error);
    dispatch(
      setError({ error: true, code: error.code, message: error.message })
    );
  }
};
