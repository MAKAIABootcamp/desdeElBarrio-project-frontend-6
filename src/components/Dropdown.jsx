import { useDispatch, useSelector } from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";
import { Link, useNavigate } from "react-router-dom"; // Importa el componente Link de React Router
// import { useAuth } from "../context/AuthContext";
import { logoutAsync } from "../store/users/userThunks";
import Swal from "sweetalert2";

function DropDown() {

  const dispatch = useDispatch();
  const user = useSelector((store) => store.user.user);

  const handleClick = () => {
    dispatch(logoutAsync());
    Swal.fire("Sesión Cerrada", "Has cerrado sesión", "info").then(() =>
      navigate("/Home")
    );
    //  auth.logout()
    //  navigate('/Home')
  };
  // const auth = useAuth();
  const navigate = useNavigate();
  return (
    <Dropdown>
      <Dropdown.Toggle>
        <div className="loginIcon-container">
          <img
            src={
              user && user?.photoURL
                ? user?.photoURL
                : "https://res.cloudinary.com/dpc1vrbek/image/upload/v1703314387/user_1_zgjlax.png"
            }
            alt="avatar"
          />
        </div>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {/* Utiliza el componente Link para redirigir a la página de inicio de sesión */}
        {user && user?.name ? (
          <Dropdown.Item onClick={handleClick}>Logout</Dropdown.Item>
        ) : (
          <Dropdown.Item as={Link} to="/login">
            Login
          </Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDown;
