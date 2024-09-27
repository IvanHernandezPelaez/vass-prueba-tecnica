import React from "react";
import Styles from "./Footer.module.css";
import { FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import logo from "../../imagenes/vass-header-logo.png";
import certificadoFooter from "../../imagenes/certificado-footer.png";

const Footer = () => {
  return (
    <footer className={`py-5 ${Styles.footer}`}>
      <div className={`row ${Styles.topSection}`}>
        <div className={Styles.text}>
          {" "}          
          <p>Complex</p>
          <p>made</p>
          <p>simple</p>
        </div>

        <div className={`col-6 col-md-2 mb-3 ${Styles.section1}`}>
          <h5>Sitemap VASS</h5>
          <ul className="nav flex-column">
            <li className={Styles.navItem}>
              <a href="#" className="nav-link p-0 text-body-secondary">
                Home
              </a>
            </li>
            <li className={Styles.navItem}>
              <a href="#" className="nav-link p-0 text-body-secondary">
                Casos éxito
              </a>
            </li>
            <li className={Styles.navItem}>
              <a href="#" className="nav-link p-0 text-body-secondary">
                Somos VASS
              </a>
            </li>
            <li className={Styles.navItem}>
              <a href="#" className="nav-link p-0 text-body-secondary">
                Impactos
              </a>
            </li>
            <li className={Styles.navItem}>
              <a href="#" className="nav-link p-0 text-body-secondary">
                Método... continúa
              </a>
            </li>
          </ul>
        </div>

        <div className="col-6 col-md-2 mb-3">
          <h5>Sitemap Talento</h5>
          <ul className="nav flex-column">
            <li className={Styles.navItem}>
              <a href="#" className="nav-link p-0 text-body-secondary">
                Talento
              </a>
            </li>
            <li className={Styles.navItem}>
              <a href="#" className="nav-link p-0 text-body-secondary">
                #LifeVASS
              </a>
            </li>
            <li className={Styles.navItem}>
              <a href="#" className="nav-link p-0 text-body-secondary">
                Beneficios
              </a>
            </li>
            <li className={Styles.navItem}>
              <a href="#" className="nav-link p-0 text-body-secondary">
                Planes para ti
              </a>
            </li>
            <li className={Styles.navItem}>
              <a href="#" className="nav-link p-0 text-body-secondary">
                Proyectos.... continúa
              </a>
            </li>
          </ul>
        </div>

        <div className={`col-6 col-md-2 mb-3 ${Styles.section1}`}>
          <h5>Empresas</h5>
          <ul className="nav flex-column">
            <li className={Styles.navItem}>
              <a href="#" className="nav-link p-0 text-body-secondary">
                VASS
              </a>
            </li>
            <li className={Styles.navItem}>
              <a href="#" className="nav-link p-0 text-body-secondary">
                Nateevo
              </a>
            </li>
            <li className={Styles.navItem}>
              <a href="#" className="nav-link p-0 text-body-secondary">
                Serbatic
              </a>
            </li>
            <li className={Styles.navItem}>
              <a href="#" className="nav-link p-0 text-body-secondary">
                vdSHOP
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center">
        <div className="col-md-2 mb-3">
          <img
            src={logo}
            alt="Logo Footer VASS"
            className={Styles.footerLogo}
          />
        </div>
        <div className="col-md-2 mb-3">
          <img
            src={certificadoFooter}
            alt="Certificación"
            className={Styles.certificacionFooter}
          />
        </div>
      </div>

      <div className={`bottomSection py-4 my-4 border-top`}>
        <p className="text-center">
          Copyright © 2021 Todos los derechos reservados
        </p>

        <div className={Styles.politicaLinks}>
          <a href="#" className="me-3">
            Memoria ambiental
          </a>
          <a href="#" className="me-3">
            Política de cookies
          </a>
          <a href="#" className="me-3">
            Política de privacidad
          </a>
          <a href="#">Política de calidad y medio ambiente</a>
        </div>

        <ul
          className={`list-unstyled d-flex justify-content-center ${Styles.socialIcons}`}
        >
          <li className="ms-3">
            <a className="link-body-emphasis" href="#">
              <FaTwitter />
            </a>
          </li>
          <li className="ms-3">
            <a className="link-body-emphasis" href="#">
              <FaLinkedin />
            </a>
          </li>
          <li className="ms-3">
            <a className="link-body-emphasis" href="#">
              <FaInstagram />
            </a>
          </li>
          <li className="ms-3">
            <a className="link-body-emphasis" href="#">
              <FaYoutube />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
