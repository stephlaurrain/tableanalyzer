import styles from "./Column.module.scss";
import { useState } from "react";

function Column({ col_id,
  colKey,
  colName,
  colType,
  colNullable,
  colLength,
  colDefault,
  colCount,
  colDesc,
  colReference,
  colInfos,
  colModel,
  colComment,
  colMapped, id}) {
    const [data, setData] = useState([]);
    const handleUpdateData = (comm) => {

      let data =  {
        "col": {
            "col_comment": comm
        }
      }

      fetch(`http://localhost:3000/col/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error("Erreur lors de la requête PUT");
          }
          return response.json();
        })
        .then(data => {
          console.log("Réponse de la requête PUT :", data);
        })
        .catch(error => {
          console.error("Erreur lors de la requête PUT :", error);
        });
    };

    const handleBlur = (event) => {
      handleUpdateData(event.target.value);
    };

    const [colCommentText, setText] = useState(colComment);

    const handleTextAreaChange = (event) => {
      setText(event.target.value);

    };
return (

<tr id={col_id} className="col-row">
    <td>{colKey}</td>
    <td>{colName}</td>
    <td>{colType}</td>
    <td>{colNullable}</td>
    <td>{colLength}</td>
    <td>{colDefault}</td>
    <td>{colCount}</td>
    <td>{colDesc}</td>
    <td><div>{colReference}</div><div>{colInfos}</div></td>
    <td>{colModel}</td>
    <td><textarea className={styles.comm_textarea} value={colCommentText} onChange={handleTextAreaChange} onBlur={handleBlur}></textarea></td>
    <td><textarea className={styles.mapped_textarea} value={colMapped}></textarea></td>
    <td className="validate-but">V</td>
</tr>
);
}

export default Column;
