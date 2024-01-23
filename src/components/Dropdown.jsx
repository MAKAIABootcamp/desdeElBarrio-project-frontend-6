import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom'; // Importa el componente Link de React Router

function DropDown() {
  return (
    <Dropdown>
      <Dropdown.Toggle>
        <div className='loginIcon-container'>
          <img src="https://res.cloudinary.com/dpc1vrbek/image/upload/v1703314387/user_1_zgjlax.png" alt="" />
        </div>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {/* Utiliza el componente Link para redirigir a la página de inicio de sesión */}
        <Dropdown.Item as={Link} to="/login">Administrador</Dropdown.Item>
        <Dropdown.Item as={Link} to="/login">Usuario</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDown;
