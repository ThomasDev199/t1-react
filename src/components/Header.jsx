
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/global.css";

function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo de la marca */}
        <NavLink to="/" className="logo" onClick={cerrarMenu}>
          <span className="logo-icon">N</span>
          <span>Nova<span className="logo-punto">.</span></span>
        </NavLink>

        {/* Botón para abrir el menú en móviles */}
        <button
          className="menu-toggle"
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuAbierto}
          aria-controls="navegacion-principal"
        >
          {menuAbierto ? "✕" : "☰"}
        </button>

        {/* Navegación con React Router DOM */}
        <nav
          id="navegacion-principal"
          className={`nav ${menuAbierto ? "nav-abierto" : ""}`}
          aria-label="Navegación principal"
        >
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-link activo" : "nav-link"
            }
            onClick={cerrarMenu}
          >
            Inicio
          </NavLink>

          <NavLink
            to="/servicios"
            className={({ isActive }) =>
              isActive ? "nav-link activo" : "nav-link"
            }
            onClick={cerrarMenu}
          >
            Servicios
          </NavLink>
          <NavLink
            to="/RickMorty"
            className={({ isActive }) =>
              isActive ? "nav-link activo" : "nav-link"
            }
            onClick={cerrarMenu}
          >
            Rick and Morty
          </NavLink>

          <NavLink
            to="/contacto"
            className={({ isActive }) =>
              isActive ? "nav-link activo" : "nav-link"
            }
            onClick={cerrarMenu}
          >
            Contacto
          </NavLink>

          <NavLink
            to="/contacto"
            className="nav-cta"
            onClick={cerrarMenu}
          >
            Hablemos <span aria-hidden="true">↗</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
