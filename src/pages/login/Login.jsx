import React from "react";
import "./Login.scss";
import logo from "../../images/logo.png";
// import { useAuth } from "../../context/AuthContext";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
// import {
//   setError,
//   setIsAuthenticate,
//   setUser,
// } from "../../store/users/userSlice";
import { useNavigate } from "react-router-dom";
import {
  loginWithEmailAndPassword,
  loginGoogle,
} from "../../store/users/userThunks";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const user = useSelector((store) => store.user.user);
  // const auth = useAuth();
  // const { displayName } = user;

  /* const [showAlert, setShowAlert] = useState(false); */

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleGoogle = () => {
    dispatch(loginGoogle()).then(() => {
      navigate("/Home");
    });
    
  };

  const onSubmit = (data) => {
    console.log("Data", data);
    dispatch(loginWithEmailAndPassword(data));
    Swal.fire({
      title: "",
      text: "¡Bienvenido!",
      icon: "",
    }).then(() => {
      navigate("/Home");
    });
    //  const userLogged = auth.login(correo, contrasena)
    //  console.log(userLogged);
    //   if (userLogged) {
    //     dispatch(setIsAuthenticate(true))
    //     dispatch(setUser({ email: userLogged.email, id: userLogged.uid, name: userLogged.name, photoURL: userLogged.photoURL, accessToken: userLogged.accessToken }))
    //     dispatch(setError(false))
    //   } else {
    //     dispatch(setIsAuthenticate(false))
    //     dispatch(
    //       setError({ error: true })
    //     )
    //   }
  };

  return (
    <body className="login-fondo">
      <div className="login-container">
        <img src={logo} className="logo" />
        <h2>¡Bienvenido!</h2>
        <p>Tu apoyo significa el mundo para nosotros</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="login-input">
            <input
              type="email"
              placeholder="Correo electrónico"
              {...register("correo", {
                required: "Correo electrónico requerido",
              })}
            />
            <p className="error-message">{errors.correo?.message}</p>
            {/* <Controller
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
                    { ...register('email', { required: 'Correo electrónico requerido' }) }
                  />
                  <p className="error-message">{errors.correo?.message}</p>
                </>
              )}
            /> */}

            <input
              type="password"
              placeholder="Contraseña"
              {...register("contrasena", { required: true, minLength: 8 })}
            />
            <p className="error-message">{errors.contrasena?.message}</p>

            {/* <Controller
              name="contrasena"
              control={control}
              rules={{ required: "Este campo es requerido" }}
              render={({ field }) => (
                <>
                  <input type="password" placeholder="Contraseña" {...field} />
                  <p className="error-message">{errors.contrasena?.message}</p>
                </>
              )}
            /> */}
          </div>
          <button
            type="submit"
            className="enviar"
          >
            Enviar
          </button>
        </form>
        <button type="button" onClick={handleGoogle} className="google-login-btn">
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
