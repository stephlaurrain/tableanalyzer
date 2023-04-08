import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>

      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? styles.activeStyle : undefined
        }
      >
        Accueil
      </NavLink>

    </header>
  );
}

export default Header;
