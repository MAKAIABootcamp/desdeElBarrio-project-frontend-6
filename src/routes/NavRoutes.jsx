import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/home/Home";
import NavBar from "../components/NavBar";
import Apoyanos from "../pages/apoyanos/Apoyanos";
import Login from "../pages/login/Login";
import Eventos from "../pages/novedades/Eventos";
import Talleres from "../pages/novedades/Talleres";
import Noticias from "../pages/novedades/Noticias";
import Register from "../pages/Register/register";
import { useAuth } from "../context/AuthContext";
import PublicRoutes from "./PublicRoutes";
import PrivatedRoutes from "./PrivatedRoutes";

export const NavRoutes = () => {
  const auth = useAuth();
  return (
    <>
      <Routes>
        <Route element={<NavBar />}>
          <Route index element={<Home />} />
          <Route element={<PublicRoutes isAuthenticate={auth.user.uid!== undefined} />}>
            <Route path="Login" element={<Login />} />
            <Route path="home" element={<Home />} />
            <Route path="Apoyanos" element={<Apoyanos />} />
          </Route>
          <Route element={<PrivatedRoutes isAuthenticate={auth.user.uid === undefined} />}>
            <Route path="Eventos" element={<Eventos />} />
            <Route path="Talleres" element={<Talleres />} />
            <Route path="Noticias" element={<Noticias />} />
          </Route>
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
};

export default NavRoutes;
