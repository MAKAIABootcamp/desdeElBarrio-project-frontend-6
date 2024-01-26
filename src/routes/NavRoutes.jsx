import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Home from "../pages/home/Home";
import NavBar from "../components/NavBar/NavBar";
import Apoyanos from "../pages/apoyanos/Apoyanos";
import Login from "../pages/login/Login";
import Eventos from "../pages/novedades/Eventos";
import Talleres from "../pages/novedades/Talleres";
import Noticias from "../pages/novedades/Noticias";
import Register from "../pages/Register/register";
import Contacto from "../pages/contact/Contacto"
// import { useAuth } from "../context/AuthContext";
import PublicRoutes from "./PublicRoutes";
import PrivatedRoutes from "./PrivatedRoutes";

import { onAuthStateChanged } from "firebase/auth";
import { setIsAuthenticate, setUser } from "../store/users/userSlice";
import { auth } from "../firebase/firebase.config";
import { getUserFromFirestoreAction } from "../store/users/userThunks";
import History from "../pages/history/History";
import AdminPanel from "../pages/adminPanel/AdminPanel";
import { useAuth } from "../context/AuthContext";
import Slider from "../components/Slider/Slider";

export const NavRoutes = () => {
  // const auth = useAuth();
  const { isAuthenticate, user } = useSelector((store) => store.user);
  const [checking, setChecking] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (userLogged) => {
      if (userLogged?.uid && !user) {
        dispatch(getUserFromFirestoreAction(userLogged.uid));
        // dispatch(setIsAuthenticate(true));

        // dispatch(
        //   setUser({
        //     id: userLogged.uid,
        //     email: userLogged.email,
        //     name: userLogged.displayName,
        //     photoURL: userLogged.photoURL,
        //     accessToken: userLogged.accessToken,
        //   })
        // );
        // dispatch(setError(false))
      }
    });

    setChecking(false);
  }, [dispatch, user]);

  if (checking) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <Routes>
        <Route element={<NavBar />}>
          <Route>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="Apoyanos" element={<Apoyanos />} />
            <Route path="History" element={<History />} />
            <Route path="Contacto" element={<Contacto />} />
            <Route path="Swiper" element={<Slider />} />

            <Route element={<PublicRoutes isAuthenticate={isAuthenticate} />}>
              <Route path="Login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
            <Route element={<PrivatedRoutes isAuthenticate={isAuthenticate} />}>
              <Route path="Eventos" element={<Eventos />} />
              <Route path="Talleres" element={<Talleres />} />
              <Route path="Noticias" element={<Noticias />} />
              {user && user?.rol === "admin" ? (
                <Route path="admin" element={<AdminPanel />} />
              ) : (
                <></>
              )}
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default NavRoutes;
