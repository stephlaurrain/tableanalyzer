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
    <div className="flex-fill">
      <div className={styles.contentCard}>
        <div className={styles.grid}>
          {data.map((logement) => (
            <Table
              key={logement.id}
              title={logement.title}
              image={logement.cover}
              id={logement.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Accueilpage;
