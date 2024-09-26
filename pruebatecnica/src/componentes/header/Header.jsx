import React, { useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import "./Header.module.css";
import Styles from "./Header.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../imagenes/vass-header-logo.png";

const Header = () => {
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 991);

  // Función para manejar scroll y resize
  const handleResizeAndScroll = () => {
    const smallScreen = window.innerWidth <= 991;
    setIsSmallScreen(smallScreen);

    if (!smallScreen) {
      setNavbarScrolled(window.scrollY > 50); // Si no es pantalla pequeña, aplica scroll para cambiar el fondo
    } else {
      setNavbarScrolled(true); // En pantallas pequeñas, el navbar siempre es negro
    }
  };

  useEffect(() => {
    // Detectar scroll y resize
    window.addEventListener("scroll", handleResizeAndScroll);
    window.addEventListener("resize", handleResizeAndScroll);

    // Limpieza al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleResizeAndScroll);
      window.removeEventListener("resize", handleResizeAndScroll);
    };
  }, []);  

  return (
    <header>
      {/* Imagen de fondo con el texto "CONTACTO" */}
      <div className={Styles.heroSection}>
        <nav
          className={`navbar navbar-expand-lg fixed-top ${
            isSmallScreen || navbarScrolled ? "navbar-dark bg-dark" : "navbar-transparent"
          }`}
        >
          <div className="container-fluid">
            <a className={`${Styles.navbarBrand} navbar-brand`} href="#">
              <img src={logo} alt="Logo vass" className={Styles.logo} />
            </a>
            <div className="d-flex align-items-center">
              {/* Icono de lupa */}
              <button className={Styles.iconButton}>
                <IoIosSearch size={24} color="#FFFFFF" />
              </button>

              {/* Botón de hamburguesa */}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className={Styles.navLink} href="#">
                    Casos de éxito
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className={`${Styles.navLink} dropdown-toggle`}
                    href="#"
                    id="mercadosDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Mercados
                  </a>
                  <ul
                    className={`dropdown-menu ${Styles.dropdownMenu}`}
                    aria-labelledby="mercadosDropdown"
                  >
                    <li>
                      <a
                        className={`dropdown-item ${Styles.dropdownItem}`}
                        href="#"
                      >
                        Mercado 1
                      </a>
                    </li>
                    <li>
                      <a
                        className={`dropdown-item ${Styles.dropdownItem}`}
                        href="#"
                      >
                        Mercado 2
                      </a>
                    </li>
                    <li>
                      <a
                        className={`dropdown-item ${Styles.dropdownItem}`}
                        href="#"
                      >
                        Mercado 3
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className={`${Styles.navLink} dropdown-toggle`}
                    href="#"
                    id="mercadosDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Países
                  </a>
                  <ul
                    className={`dropdown-menu ${Styles.dropdownMenu}`}
                    aria-labelledby="mercadosDropdown"
                  >
                    <li>
                      <a
                        className={`dropdown-item ${Styles.dropdownItem}`}
                        href="#"
                      >
                        Chile
                      </a>
                    </li>
                    <li>
                      <a
                        className={`dropdown-item ${Styles.dropdownItem}`}
                        href="#"
                      >
                        Colombia
                      </a>
                    </li>
                    <li>
                      <a
                        className={`dropdown-item ${Styles.dropdownItem}`}
                        href="#"
                      >
                        México
                      </a>
                    </li>
                    <li>
                      <a
                        className={`dropdown-item ${Styles.dropdownItem}`}
                        href="#"
                      >
                        Perú
                      </a>
                    </li>
                    <li>
                      <a
                        className={`dropdown-item ${Styles.dropdownItem}`}
                        href="#"
                      >
                        Reino Unido
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className={`${Styles.navLink} dropdown-toggle`}
                    href="#"
                    id="mercadosDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Somo VASS
                  </a>
                  <ul
                    className={`dropdown-menu ${Styles.dropdownMenu}`}
                    aria-labelledby="mercadosDropdown"
                  >
                    <li>
                      <a
                        className={`dropdown-item ${Styles.dropdownItem}`}
                        href="#"
                      >
                        ¿Quiénes somos?
                      </a>
                    </li>
                    <li>
                      <a
                        className={`dropdown-item ${Styles.dropdownItem}`}
                        href="#"
                      >
                        Historia
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className={`${Styles.navLink} dropdown-toggle`}
                    href="#"
                    id="mercadosDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Cómo lo hacemos
                  </a>
                  <ul
                    className={`dropdown-menu ${Styles.dropdownMenu}`}
                    aria-labelledby="mercadosDropdown"
                  >
                    <li>
                      <a
                        className={`dropdown-item ${Styles.dropdownItem}`}
                        href="#"
                      >
                        Método 1
                      </a>
                    </li>
                    <li>
                      <a
                        className={`dropdown-item ${Styles.dropdownItem}`}
                        href="#"
                      >
                        Método 2
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className={Styles.navLink} href="#">
                    Insights
                  </a>
                </li>
                <li className="nav-item">
                  <a className={Styles.navLink} href="#">
                    Noticias
                  </a>
                </li>
                <li className="nav-item">
                  <a className={Styles.navLink} href="#">
                    VASS Research
                  </a>
                </li>
                <li className="nav-item">
                  <a className={Styles.navLink} href="#">
                    EN
                  </a>
                </li>
                <li className={`${Styles.navLink} ${Styles.largeScreenIcon}`}>
                  <IoIosSearch size={24} color="#FFFFFF" />
                </li>
                <li className="nav-item">
                  <a className={Styles.navLink} href="#">
                    Talento
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
