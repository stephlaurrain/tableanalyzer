import { NavLink } from "react-router-dom";
import styles from "./table.module.scss";

function Table({ title, image, id }) {
  return (
    <NavLink to={`/logement/${id}`}>
      <div className={styles.cards}>
        <img className={styles.cardsimg} src={image} alt={title} />
        <h3>{title}</h3>
      </div>
      <div className="table-container" id="$table_id">
        <table>
          <tr>
            <td className="table-name">$table_name</td>
          </tr>
          <tr>
            <td>$table_desc</td>
          </tr>
          <tr>
            <td>$table_enum</td>
          </tr>
          <tr>
            <td>count : $table_count</td>
          </tr>
          <tr>
            <td>SELECT * FROM $collection.$table_name</td>
          </tr>
          <tr>
            <td><textarea className="model-textarea">$model</textarea></td>
          </tr>

        </table>
        <table>
          <tr>
            <th>Is Key</th>
            <th>Colonne</th>
            <th>Type</th>
            <th>Null</th>
            <th className="length">Ln</th>
            <th className="default">Default</th>
            <th className="count">Count</th>
            <th className="desc">Description</th>
            <th className="link">Links</th>
            <th className="model">Model</th>
            <th className="comm">Comments</th>
            <th className="mapped">Mapped</th>
            <th>V</th>
            $rows
          </tr>
        </table>
      </div>
    </NavLink>
  );
}

export default Table;
