import styles from "./Footer.module.scss";
import { NavLink } from "react-router-dom";
import LogoFooter from "../../assets/images/logofooter.png";

function Footer() {
  return (
    <footer
      className={`${styles.footer} d-flex flex-column align-items-center justify-content-center`}
    >
      <NavLink to="/">
        <img className={styles.logofooter} src={LogoFooter} alt="Logo Kasa" />
      </NavLink>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
