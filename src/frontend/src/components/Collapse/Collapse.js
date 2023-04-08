import React from "react";
import { useState } from "react";
import styles from "./Collapse.module.scss";
import vector from "../../assets/images/vector.png";

function Collapsible({ title, texte }) {
  const [open, setOPen] = useState(false);

  const toggleCollapse = () => {
    setOPen(!open);
  };

  return (
    <div className={`d-flex flex-column ${styles.collapse}`}>
      <div className={`d-flex ${styles.containerButton}`}>
        <h2>{title}</h2>

        <button className={`${open && styles.rotate180}`}>
          <img onClick={toggleCollapse} src={vector} alt={title} />
        </button>
      </div>

      <div className={`d-flex ${styles.textOpen}`}>
        {open && (
          <div className={`d-flex ${styles.text}`}>
            <p>{texte}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Collapsible;
