
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../styles/components/layout/Footer.css';

const Footer = (props) => {
    return (
        <footer>
    <div className="columnas">
      <div className="links">
         
          <a href="/" class="active"><i class="fa-solid fa-house-user"></i> Home</a>
        <a href="servicios"><i class="fa-solid fa-circle-plus"></i> Servicios</a>
        <a href="portfolio"><i class="fa-solid fa-eye"></i> Portfolio</a>
        <a href="staff"><i class="fa-solid fa-clipboard-user"></i> Staff</a>
        <a href="blog"><i class="fa-solid fa-blog"></i> Blog</a>
        <a href="contacto"><i class="fa-solid fa-at"></i> Contacto</a>
      </div>
    </div>

    <div class="container-redes">
    <p> Todos los derechos resevados. ProntoWeb.Site 2022</p>
      <a href="https://facebook.com/prontoweb" target="_blank"><i class="fa-brands fa-facebook-square fa-2xl"></i></a>
      <a href="https://instagram.com/prontoweb.site" target="_blank"><i
          class="fa-brands fa-instagram-square fa-2xl"></i> </a>
      <a href="https://www.linkedin.com/in/nataliaperez-prontoweb/" target="_blank"><i
          class="fa-brands fa-linkedin fa-2xl"></i> </a>
      <a href="mailto:info@prontoweb.site" target="_blank"><i class="fa-solid fa-envelope fa-2xl"></i></a>
    </div>

    <div class="container-footer">
      <img src="img/logopw3.png" width="180px" height="40px" alt="logo"></img>
    </div>
  </footer>
    );

}
export default Footer;