import { NavLink } from "react-router-dom";
import styles from "./Error.module.scss";

function ErrorPage() {
  return (
    <div className={`${styles.error} d-flex flex-column align-items-center`}>
      <h1>404</h1>
      <p>Oups ! La page que vous demandez n'existe pas</p>
      <div>
        <NavLink to="/">Retourner sur la page d'accueil</NavLink>
      </div>
    </div>
  );
}

export default ErrorPage;
