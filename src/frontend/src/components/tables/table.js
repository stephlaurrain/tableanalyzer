import { NavLink } from "react-router-dom";
import styles from "./table.module.scss";

function Table({ title, image, id }) {
  return (
    <NavLink to={`/logement/${id}`}>
      <div className={styles.cards}>
        <img className={styles.cardsimg} src={image} alt={title} />
        <h3>{title}</h3>
      </div>
    </NavLink>
  );
}

export default Table;
