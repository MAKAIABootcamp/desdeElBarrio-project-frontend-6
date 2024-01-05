import React from 'react'
import './Login.scss';
import logo from "../../images/logo.png";
import { useAuth } from '../../context/AuthContext';

function Login() {
  const auth = useAuth()
  const {displayName} = auth.user
  console.log(displayName)

  const handleGoogle = (e) => {
    e.preventDefault()
    auth.loginWithGoogle()
  }

    return (
        <body className="login-fondo">
        <div className="login-container">
        <img src={logo}  className="logo" />
      <h2>¡Bienvenido!</h2>
      <p>Tu apoyo significa el mundo para nosotros</p>
      <button onClick={(e)=> handleGoogle(e)} className="google-login-btn">Iniciar sesión con Google</button>
    </div>
    </body>
  );
}

export default Login;


//Funcion para cerrar la sesion actual
/*   const handleLogout = () => {
    auth.logout()
  } */
