import React from "react";
import "./header.css";
import { Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface IAuthContext {
  isLogged: boolean;
  login: () => void;
  logout: () => void;
}

const Header = () => {
  const [isLogged, setIsLogged] = React.useState(false);
  const navigate = useNavigate();

 const handleAuthClick = () => {
    if (isLogged) {
      setIsLogged(false);
      navigate("/home");
    } else {
      setIsLogged(true);
      navigate("/loged");
    }
  };

  return (
    <div className="headerinside">
      <header>
        <img className="logo" src="Sigmafront.png" alt="Logo de tu sitio web" width="89" height="30" />
        <nav>
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Acerca de</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
            <button className="boton-login" onClick={handleAuthClick}>
              {isLogged ? "Cerrar sesión" : "Iniciar sesión"}
            </button>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;


