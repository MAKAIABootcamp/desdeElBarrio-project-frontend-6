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
                        <Link className='NavBar__link' to="/"><p>01</p> HOME</Link>
                    </li>
                    <li className='NavBar__li'>
                        <Link className='NavBar__link' to="/Apoyanos"><p>02</p>Apoyanos</Link>
                    </li>
                    
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default NavBar;