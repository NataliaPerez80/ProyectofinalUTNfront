import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import '../../styles/components/layout/Nav.css';
const Nav = (props) => {
    return (
        <nav>
    <div class="menu" id="mimenu">
      <NavLink to="/"className={({ isActive })=> isActive ? "activo": undefined} ><i class="fa-solid fa-house-user"></i> Home</NavLink>
      <NavLink to="servicios"className={({ isActive })=> isActive ? "activo": undefined} > <i class="fa-solid fa-circle-plus"></i> Servicios</NavLink>
      <NavLink to="portfolio"className={({ isActive })=> isActive ? "activo": undefined} ><i class="fa-solid fa-eye"></i> Portfolio</NavLink>
      <NavLink to="staff"className={({ isActive })=> isActive ? "activo": undefined} ><i class="fa-solid fa-clipboard-user"></i> Staff</NavLink>
      <NavLink to="Blog"className={({ isActive })=> isActive ? "activo": undefined} ><i class="fa-solid fa-blog"></i> Blog</NavLink>
      <NavLink to="contacto"className={({ isActive })=> isActive ? "activo": undefined} ><i class="fa-solid fa-at"></i> Contacto</NavLink>
      <Link to="javascript:void(0);" class="icon" onclick="myFunction()"><i class="fa fa-bars"></i></Link>
      </div>
  </nav>
    );
    

}
export default Nav;