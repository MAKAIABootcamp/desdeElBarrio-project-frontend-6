import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet, useLocation } from "react-router-dom";
import Logo from "../../images/logo.png";
import burgerIcon from "../../images/icon-hamburger.svg";
import closeIcon from "../../images/icon-close.svg";
import "./NavBar.scss";
import Footer from "../footer/footer";
import DropDown from "../Dropdown";

const NavBar = () => {
  const [mostrarNovedades, setMostrarNovedades] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(
    window.location.pathname.replace("/", "") || "home"
  );
  const user = useSelector((store) => store.user.user);
  console.log(user?.rol);

  const toggleNovedades = () => {
    setMostrarNovedades(!mostrarNovedades);
  };
<<<<<<< HEAD

  const location = useLocation();
  console.log(location);
  function close() {
    setOpen(false);
=======
    
  const location = useLocation()
  function close() {
      setOpen(false)
>>>>>>> a1a3e7277fa73a59d18e7c16a14cebede0371d19
  }

  useEffect(() => {
    setActive(
      location.pathname.replace("/", "")
        ? location.pathname.replace("/", "")
        : "home"
    );
    /*   if (isAuthenticate) { 

        } */
  }, [location]);

  return (
    <>
      <nav className="NavBar__container">
        <div className="nav-container">
          <img
            src="https://res.cloudinary.com/dpc1vrbek/image/upload/v1703313317/WhatsApp_Image_2023-12-11_at_11.33.28_PM_oc6r8h.jpg"
            alt=""
          />
          <div className="init-container">
            <Link className="NavBar__link" to="/">
              Inicio
            </Link>
          </div>
          <div
            className="novedades-container"
            onMouseEnter={toggleNovedades}
            onMouseLeave={toggleNovedades}
          >
            <span className="NavBar__link">Novedades</span>
            {mostrarNovedades && (
              <div className="novedades-menu">
                <Link className="NavBar__link" to="/Eventos">
                  Eventos
                </Link>
                <Link className="NavBar__link" to="/Talleres">
                  Talleres
                </Link>
                <Link className="NavBar__link" to="/Noticias">
                  Noticias
                </Link>
              </div>
            )}
          </div>
          <div className="historia-container">
            <Link className="NavBar__link" to="/History">
              Historia
            </Link>
          </div>
          <div className="contacto-container">
            <Link className="NavBar__link" to="/Contacto">
              Contacto
            </Link>
          </div>
          <div className="apoyanos-container">
            <Link className="NavBar__link" to="/Apoyanos">
              Apóyanos
            </Link>
          </div>
          {user && user?.rol === "admin" ? (
            <div className="apoyanos-container">
              <Link className="NavBar__link" to="/admin">
                Panel
              </Link>
            </div>
          ) : (
            <></>
          )}
          <DropDown />
        </div>
      </nav>

      {/* Version para movile */}
      <div className="Navbar_mobile">
        <nav className={`nav ${open ? "show" : "hide"}`}>
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <ul className={active}>
            <li onClick={close}>
              <Link to="/">Inicio</Link>
            </li>
            <li onClick={close}>
              <Link to="/Eventos">Eventos</Link>
            </li>
            <li onClick={close}>
              <Link to="/Talleres">Talleres</Link>
            </li>
            <li onClick={close}>
              <Link to="/Noticias">Noticias</Link>
            </li>
            <li onClick={close}>
              <Link to="/Login">Historia</Link>
            </li>
            <li onClick={close}>
              <Link to="/Login">Contacto</Link>
            </li>
            <li onClick={close}>
              <Link to="/Apoyanos">Apóyanos</Link>
            </li>
            {
              user && user?.rol === "admin" ?<li onClick={close}>
              <Link to="/admin">Panel</Link>
            </li>:<></>
            }
            {/* <li onClick={close}>
              {user && user?.rol === "admin" ? (
                <Link to="/admin">Pánel</Link>
              ) : (
                <Link to="/Apoyanos">Apoyanos</Link>
              )}
            </li> */}
            <li onClick={close}>
              <Link to="/Login">Perfil</Link>
            </li>
          </ul>
          <div onClick={() => setOpen(!open)} className="burger">
            {open === false ? (
              <img src={burgerIcon} alt="" />
            ) : (
              <img src={closeIcon} alt="" />
            )}
          </div>
        </nav>
      </div>

      <Outlet />
      <Footer />
    </>
  );
};

export default NavBar;
