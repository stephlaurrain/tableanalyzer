import styles from "./table.module.scss";
import Column from "../column/column";
import { useEffect, useState } from "react";

function Table({ tabName, tabDesc, tabEnum, tabCount, tabModel, tabId, id }) {
 const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const response = await fetch(`http://localhost:3000/col/${id}`);
      const data = await response.json();
      setData(data);
    }
    fetchdata();
  }, []);

  return (
    <div className={styles.table_container} id={tabId}>
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
        <tbody>
        {data.map((column) => (
            <Column
              key={column.id}
              col_id={column.col_id}
              colKey={column.col_key}
              colName={column.col_name}
              colType={column.col_type}
              colNullable={column.col_nullable}
              colLength={column.col_length}
              colDefault={column.col_default}
              colCount={column.col_count}
              colDesc={column.col_desc}
              colReference={column.col_reference}
              colInfos={column.col_infos}
              colModel={column.col_model}
              colComment={column.col_comment}
              colMapped={column.col_mapped}
              id={column.id}
            />
            ))}
      </tbody>
      </table>



    </div>

  );
}

export default Table;
