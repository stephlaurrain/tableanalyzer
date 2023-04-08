import styles from "./table.module.scss";

function Table({ tabName, tabDesc, tabEnum, tabCount, tabModel, tabId, id }) {
  return (
    <div className={styles.table_container} id={id}>
      <table>
        <tbody>
          <tr>
            <td className={styles.table_name}>{tabName}</td>
          </tr>
          <tr>
            <td>{tabDesc}</td>
          </tr>
          <tr>
            <td>{tabEnum}</td>
          </tr>
          <tr>
            <td>count : {tabCount}</td>
          </tr>
          <tr>
            <td>SELECT * FROM $collection.{tabName}</td>
          </tr>
          <tr>
            <td><textarea className={styles.model_textarea} value={tabModel}></textarea></td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Is Key</th>
            <th>Colonne</th>
            <th>Type</th>
            <th>Null</th>
            <th className={styles.length}>Ln</th>
            <th className={styles.default}>Default</th>
            <th className={styles.count}>Count</th>
            <th className={styles.desc}>Description</th>
            <th className={styles.link}>Links</th>
            <th className={styles.model}>Model</th>
            <th className={styles.comm}>Comments</th>
            <th className={styles.mapped}>Mapped</th>
            <th>V</th>
          </tr>
        </thead>
      </table>
    </div>

  );
}

export default Table;
