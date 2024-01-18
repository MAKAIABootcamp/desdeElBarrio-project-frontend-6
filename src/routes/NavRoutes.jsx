import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/home/Home';
import NavBar from '../components/NavBar/NavBar';
import Apoyanos from '../pages/apoyanos/Apoyanos';
import Login from '../pages/login/Login';
import Eventos from '../pages/novedades/Eventos';
import Talleres from '../pages/novedades/Talleres';
import Noticias from '../pages/novedades/Noticias';
import History from '../pages/history/History';
import Contacto from '../pages/contact/Contacto';

import AdminPanel from '../pages/adminPanel/AdminPanel';

export const NavRoutes = () => {
    return (
      <>
        <Routes>
            <Route element={<NavBar/>}>                    
                <Route index element={<Home/>} />
                <Route path='Login' element={<Login/>} />
                <Route path='home' element={<Home/>} />
                <Route path='Apoyanos' element={<Apoyanos/>} />       
                <Route path='Eventos' element={<Eventos/>} />
                <Route path='Talleres' element={<Talleres/>} />
                <Route path='Noticias' element={<Noticias/>} />
                <Route path='History' element={<History/>} />
                <Route path='Contacto' element={<Contacto/>} />
                <Route path='Apoyanos' element={<Apoyanos/>} />
                <Route path='Admin' element={<AdminPanel/>} />
            </Route>
        </Routes>
      </>
    )
  }
  
  export default NavRoutes;