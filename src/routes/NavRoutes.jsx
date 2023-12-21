import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/home/Home';
import NavBar from '../components/NavBar';
import Apoyanos from '../pages/apoyanos/Apoyanos';


export const NavRoutes = () => {
    return (
      <>
        <Routes>
            <Route element={<NavBar/>}>                    
                <Route index element={<Home/>} />
                <Route path='home' element={<Home/>} />
                <Route path='Apoyanos' element={<Apoyanos/>} />
               
            </Route>
        </Routes>
      </>
    )
  }
  
  export default NavRoutes;