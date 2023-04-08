import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import Logo from "../../assets/images/logo.svg";

function Header() {
  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <NavLink to="/">
        <img className={styles.logo} src={Logo} alt="Logo Kasa" />
      </NavLink>
      <ul>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.activeStyle : undefined
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/a-propos"
          className={({ isActive }) =>
            isActive ? styles.activeStyle : undefined
          }
        >
          A Propos
        </NavLink>
      </ul>
    </header>
  );
}

export default Header;
