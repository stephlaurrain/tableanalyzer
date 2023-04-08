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
    const [textareaValue1, setTextareaValue1] = useState(colComment);
    const [textareaValue2, setTextareaValue2] = useState(colMapped);


    const handleChange1 = (event) => {
      setTextareaValue1(event.target.value);
    }

    const handleChange2 = (event) => {
      setTextareaValue2(event.target.value);
    }

    const handleSubmit = () => {

      let data =  {
        "col": {
            "col_comment": textareaValue1,
            "col_mapped" : textareaValue2
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
            throw new Error("Request error PUT");
          }
          return response.json();
        })
        .then(data => {
          console.log("Request response PUT :", data);
        })
        .catch(error => {
          console.error("Request error PUT :", error);
        });
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
    <td><textarea className={styles.comm_textarea} value={textareaValue1} onChange={handleChange1}></textarea></td>
    <td><textarea className={styles.mapped_textarea} value={textareaValue2} onChange={handleChange2} ></textarea></td>
    <td className={styles.validate_but} onClick={handleSubmit}>V</td>
</tr>
);
}

export default Column;
