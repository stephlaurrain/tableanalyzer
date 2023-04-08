import styles from "./column.module.scss";

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
    <td><textarea className={styles.comm_textarea} value={colComment}></textarea></td>
    <td><textarea className={styles.mapped_textarea} value={colMapped}></textarea></td>
    <td className="validate-but">V</td>
</tr>
);
}

export default Column;
