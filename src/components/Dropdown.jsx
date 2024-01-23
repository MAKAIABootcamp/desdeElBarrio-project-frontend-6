import Dropdown from 'react-bootstrap/Dropdown';
import { Link, useNavigate } from 'react-router-dom'; // Importa el componente Link de React Router
import { useAuth } from '../context/AuthContext';

function DropDown() {
  const handleClick = ()=> {
   auth.logout()
   navigate('/Home')
  }
  const auth = useAuth();
  const navigate = useNavigate();
  return (
    <Dropdown>
      <Dropdown.Toggle>
        <div className='loginIcon-container'>
          <img src="https://res.cloudinary.com/dpc1vrbek/image/upload/v1703314387/user_1_zgjlax.png" alt="" />
        </div>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {/* Utiliza el componente Link para redirigir a la página de inicio de sesión */}
        <Dropdown.Item as={Link} to="/login">LogIn</Dropdown.Item>
        <Dropdown.Item onClick= {handleClick} >LogOut</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDown;
