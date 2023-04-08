import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer
      className={`${styles.footer} d-flex flex-column align-items-center justify-content-center`}
    >
      <p>© 2023 Table Analyzer</p>
    </footer>
  );
}

export default Footer;
