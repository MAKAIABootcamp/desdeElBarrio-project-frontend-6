import React from 'react'
import './Login.scss';
import logo from "../../images/logo.png";

const Login = () => {
    return (
        <body className="login-fondo">
        <div className="login-container">
        <img src={logo}  className="logo" />
      <h2>¡Bienvenido!</h2>
      <p>Tu apoyo significa el mundo para nosotros</p>
      <button className="google-login-btn">Iniciar sesión con Google</button>
    </div>
    </body>
  );
}

export default Login;