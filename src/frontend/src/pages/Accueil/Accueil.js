import styles from "./Accueil.module.scss";
import Logement from "../../components/Logements/Logement";
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
      <div
        className={`${styles.banner} d-flex align-items-center justify-content-center`}
      >
        <h2>Chez vous, partout et ailleurs</h2>
      </div>
      <div className={styles.contentCard}>
        <div className={styles.grid}>
          {data.map((logement) => (
            <Logement
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
