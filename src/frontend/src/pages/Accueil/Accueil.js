import styles from "./Accueil.module.scss";
import Table from "../../components/tables/table";
import { useEffect, useState } from "react";

function Accueilpage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const response = await fetch("http://localhost:4000/data.json");
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
              title={table.title}
              image={table.cover}
              id={table.id}
            />
          ))}
        </div>
      </div>


  );
}
export default Accueilpage;
