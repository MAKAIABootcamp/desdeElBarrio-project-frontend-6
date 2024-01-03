import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './NavBar.scss';
const link = document.createElement("link");
link.href = "https://fonts.googleapis.com/css2?family=Roboto&display=swap";
link.rel = "stylesheet";
document.head.appendChild(link);


const NavBar = () => {
    return (
        <>
            <nav className='NavBar__container'>
                <div className='nav-container'>
                    <img src="https://res.cloudinary.com/dpc1vrbek/image/upload/v1703313317/WhatsApp_Image_2023-12-11_at_11.33.28_PM_oc6r8h.jpg" alt="" />
                    <div className='center-container'>
                    <div className='init-container'>
                        <Link className='NavBar__link' to="/">Inicio</Link>
                    </div>
                    <div className='novedades-container'>
                        <Link className='NavBar__link' to="/Login">Novedades</Link>
                    </div>
                    <div className='historia-container'>
                        <Link className='NavBar__link' to="/Login">Historia</Link>
                    </div>
                    <div className='contacto-container'>
                        <Link className='NavBar__link' to="/Login">Contacto</Link>
                    </div>
                    <div className='apoyanos-container'>
                        <Link className='NavBar__link' to="/Apoyanos">Apóyanos</Link>
                    </div>
                    </div>
                    <div className='loginIcon-container'>
                        <Link to="/Login">
                    <img src="https://res.cloudinary.com/dpc1vrbek/image/upload/v1703314387/user_1_zgjlax.png" alt="" />
                         </Link>
                    </div>   
             </div>
            </nav>
            <Outlet />
        </>
    )
}

export default NavBar;