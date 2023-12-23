import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './NavBar.scss';

const NavBar = () => {
    return (
        <>
            <nav className='NavBar__container'>
             
                <div/>
                <ul className='NavBar__ul'>
                    <li className='NavBar__li'>
                        <Link className='NavBar__link' to="/">HOME</Link>
                    </li>
                    <li className='NavBar__li'>
                        <Link className='NavBar__link' to="/Apoyanos">Apoyanos</Link>
                    </li>
                    <li className='NavBar__li'>
                        <Link className='NavBar__link' to="/Login">Login</Link>
                    </li>
                    <li className='NavBar__li'>
                        <Link className='NavBar__link' to="/Eventos">Eventos</Link>
                    </li>
                    <li className='NavBar__li'>
                        <Link className='NavBar__link' to="/Talleres">Talleres</Link>
                    </li>
                    <li className='NavBar__li'>
                        <Link className='NavBar__link' to="/Noticias">Noticias</Link>
                    </li>             
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default NavBar;