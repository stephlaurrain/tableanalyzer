import styles from "./table.module.scss";

function Table({ title, image, id }) {
  return (
       <div class={styles.table_container} id="$table_id">
        <table>
          <tr>
            <td class={styles.table_name}>$table_name</td>
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
            <td><textarea class={styles.model_textarea}>$model</textarea></td>
          </tr>

        </table>
        <table>
          <tr>
            <th>Is Key</th>
            <th>Colonne</th>
            <th>Type</th>
            <th>Null</th>
            <th class={styles.length}>Ln</th>
            <th class={styles.default}>Default</th>
            <th class={styles.count}>Count</th>
            <th class={styles.desc}>Description</th>
            <th class={styles.link}>Links</th>
            <th class={styles.model}>Model</th>
            <th class={styles.comm}>Comments</th>
            <th class={styles.mapped}>Mapped</th>
            <th>V</th>
            $rows
          </tr>
        </table>
      </div>

  );
}

export default Table;
