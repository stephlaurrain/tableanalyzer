import styles from "./Table.module.scss";
import validate from "../../assets/images/validate.png";
import Column from "../Column/Column";
import { useEffect, useState, useContext } from "react";
import MyContext from '../../CreateContext.js';
import config from '../../config/config';

function Table({ tabCollection, tabName, tabDesc, tabEnum, tabCount, tabModel, tabComment, tabLastCreated, tabLastUpdated,tabId, id }) {
  const [data, setData] = useState([]);


  const [value, setValue] = useState('');
  const myContext = useContext(MyContext);
  const handleChildClick = (childValue) => {
    myContext.onClick(childValue)
    setValue(childValue); // set value up to date in the parent component
  };

  useEffect(() => {
    async function fetchdata() {
      const response = await fetch(`${config.backurl}/col/${id}`);
      const data = await response.json();
      setData(data);
    }
    fetchdata();
  }, [id]);

  const handleUpdateData = (comm) => {

    let data = {
      "tab": {
        "tab_comment": comm
      }
    }

    fetch(`${config.backurl}/tab/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Request error PUT");
        }
        return response.json();
      })
      .then(data => {
        // console.log("Request response PUT :", data);
      })
      .catch(error => {
        console.error("Request error PUT :", error);
      });
  };

  const handleBlurTxtAreaComm = (event) => {
    handleUpdateData(event.target.value);
  };

  const [tabCommentText, setText] = useState(tabComment);

  const handleValidTxtAreaComm = (event) => {
    setText(event.target.value);

  };

  return (
    <div className={styles.table_container} id={tabId}>
      <table>
        <tbody>
          <tr>
            <td className={styles.table_name}>{tabCollection}.{tabName}</td>
          </tr>
          <tr>
            <td>{tabDesc}</td>
          </tr>
          <tr>
            <td>Last created : {tabLastCreated} - Last updated : {tabLastUpdated}</td>
          </tr>
          <tr>
            <td>{tabEnum}</td>
          </tr>
          <tr>
            <td>count : {tabCount}</td>
          </tr>
          <tr>
            <td>SELECT * FROM {tabCollection}.{tabName}</td>
          </tr>
          <tr>
            <td className={styles.table_info_zone} ><textarea className={styles.model_textarea} value={tabModel}></textarea>
              <textarea className={styles.model_textarea} value={tabCommentText} onChange={handleValidTxtAreaComm} onBlur={handleBlurTxtAreaComm}></textarea>
              <div className="validate_but" onClick={handleValidTxtAreaComm}><img src={validate} alt="Validate" /></div>
            </td>

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
            <th></th>
          </tr>
        </thead>
        <tbody>
          <MyContext.Provider value={{ onClick: handleChildClick }}>
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
          </MyContext.Provider>
        </tbody>
      </table>



    </div>

  );
}

export default Table;
