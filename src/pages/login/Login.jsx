import React from "react";
import "./Login.scss";
import logo from "../../images/logo.png";
import { useAuth } from "../../context/AuthContext";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setError, setIsAuthenticate, setUser } from "../../store/users/userSlice";
import { Navigate, useNavigate } from "react-router-dom";


function Login() {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const auth = useAuth();
  const { displayName } = auth.user;
  console.log(auth.user);

  /* const [showAlert, setShowAlert] = useState(false); */

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleGoogle = (e) => {
    e.preventDefault();
    auth.loginWithGoogle();
  };

  const onSubmit = ({ correo, contrasena }) => {
   const userLogged = auth.login(correo, contrasena)
   console.log(userLogged);
    if (userLogged) {
      dispatch(setIsAuthenticate(true))
      dispatch(setUser({ email: userLogged.email, id: userLogged.uid, name: userLogged.name, photoURL: userLogged.photoURL, accessToken: userLogged.accessToken }))
      dispatch(setError(false))
    } else {
      dispatch(setIsAuthenticate(false))
      dispatch(
        setError({ error: true })
      )
    }
  }

  
  return (
    <body className="login-fondo">
      <div className="login-container">
        <img src={logo} className="logo" />
        <h2>¡Bienvenido!</h2>
        <p>Tu apoyo significa el mundo para nosotros</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="login-input">
            <Controller
              name="correo"
              control={control}
              rules={{
                required: "Este campo es requerido",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Formato de correo electrónico inválido",
                },
              }}
              render={({ field }) => (
                <>
                  <input
                    type="email"
                    placeholder="Correo electrónico"
                    {...field}
                  />
                  <p className="error-message">{errors.correo?.message}</p>
                </>
              )}
            />

            <Controller
              name="contrasena"
              control={control}
              rules={{ required: "Este campo es requerido" }}
              render={({ field }) => (
                <>
                  <input type="password" placeholder="Contraseña" {...field} />
                  <p className="error-message">{errors.contrasena?.message}</p>
                </>
              )}
            />
          </div>
          <button type="submit" className="enviar" onClick={() => Navigate('/Apoyanos')}>
            Enviar
          </button>
        </form>
        <button onClick={(e) => handleGoogle(e)} className="google-login-btn" >
          Iniciar sesión con Google
        </button>
        <a href="Register">
                <h4> ¿No tienes una cuenta? Regístrate aquí</h4>
              </a>
      </div>
    </body>
  );
}

export default Login;


