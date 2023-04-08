import styles from "./Accueil.module.scss";
import Table from "../../components/tables/table";
import { useEffect, useState } from "react";

function Accueilpage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const response = await fetch("http://localhost:3000/tab");
      const data = await response.json();
      setData(data);
    }
    fetchdata();
  }, []);

  return (

      <div className={styles.contentcard}>
        <div className={styles.grid}>
          {data.map((table) => (
            <Table
              key={table.id}
              tabName={table.tab_name}
              tabDesc={table.tab_desc}
              tabEnum={table.tab_enum}
              tabCount={table.tab_count}
              tabModel={table.tab_model}
              id={table.tab_id}
            />
          ))}
        </div>
      </div>


  );
}
export default Accueilpage;
