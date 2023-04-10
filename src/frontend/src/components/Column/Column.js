import styles from "./Column.module.scss";
import { useState, useContext } from "react";
import validate from "../../assets/images/validate.png";
import MyContext from '../../CreateContext.js';
import config from '../../config/config';

function Column({ onClick, col_id,
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

    const myContext = useContext(MyContext);

    const handleClickRef = () => {
      myContext.onClick(colReference); // Appel de la fonction de rappel onClick avec la valeur en argument
    };

    const [txtareaCommVal, setTxtareaCommVal] = useState(colComment);
    const [txtareaMappedVal, setTxtareaMappedVal] = useState(colMapped);


    const handleChangeComm = (event) => {
      setTxtareaCommVal(event.target.value);
    }

    const handleChangeMapped = (event) => {
      setTxtareaMappedVal(event.target.value);
    }

    const handleSubmit = () => {

      let data =  {
        "col": {
            "col_comment": txtareaCommVal,
            "col_mapped" : txtareaMappedVal
        }
      }

      fetch(`${config.backurl}/col/${id}`, {
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

    ///


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
    <td className={styles.td_ref} onClick={handleClickRef}>{colReference}</td>
    <td>{colModel}</td>
    <td><textarea className={styles.comm_textarea} value={txtareaCommVal} onChange={handleChangeComm}></textarea></td>
    <td><textarea className={styles.mapped_textarea} value={txtareaMappedVal} onChange={handleChangeMapped} ></textarea></td>
    <td className="validate_but" onClick={handleSubmit}><img src={validate} alt="Validate" /></td>
</tr>
);
}

export default Column;
