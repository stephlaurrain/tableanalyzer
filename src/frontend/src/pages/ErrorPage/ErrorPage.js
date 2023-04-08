import { NavLink } from "react-router-dom";
import styles from "./Error.module.scss";

function ErrorPage() {
  return (
    <div className={`${styles.error} d-flex flex-column align-items-center`}>
      <h1>404</h1>
      <p>Oups ! You did it again</p>
      <div>
        <NavLink to="/">Get back</NavLink>
      </div>
    </div>
  );
}

export default ErrorPage;
