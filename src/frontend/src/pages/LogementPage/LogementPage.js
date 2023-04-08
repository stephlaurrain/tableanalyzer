import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Error from "../ErrorPage/ErrorPage";
import Carousel from "../../components/Carousel/Carousel";
import styles from "./LogementPage.module.scss";
import Collapse from "../../components/Collapse/Collapse";
import StarsPage from "../../components/Stars/Stars";

function LogementPage() {
  const { id } = useParams();
  const [object, setObject] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchdata() {
      setLoading(true);
      const response = await fetch("http://localhost:4000/data.json");
      const data = await response.json();

      const foundObject = data.find((c) => c.id === id);
      setLoading(false);

      setObject(foundObject);
    }
    fetchdata();
  }, [id]);

  if (!object && loading) {
    return <></>;
  }
  if (!object && !loading) {
    return <Error />;
  }

  const equipementList = object.equipments.map((e) => <li key={e}>{e}</li>);

  return (
    <>
      <Carousel pictures={object.pictures} />
      <div className={`d-flex ${styles.container}`}>
        <div className={`d-flex flex-column ${styles.containerLeft}`}>
          <div>
            <h1>{object.title}</h1>
            <p>{object.location}</p>
          </div>

          <div>
            <ul className="d-flex">
              {object.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`d-flex flex-column ${styles.containerRight}`}>
          <div className={`d-flex ${styles.host}`}>
            <p>{object.host.name}</p>
            <img src={object.host.picture} alt={object.host.name} />
          </div>
          <div className={`d-flex  ${styles.stars}`}>
            <StarsPage rating={object.rating} />
          </div>
        </div>
      </div>

      <div className={`d-flex  ${styles.collapse}`}>
        <div>
          <Collapse texte={object.description} title="Description" />
        </div>
        <div>
          <Collapse texte={equipementList} title="Equipements" />
        </div>
      </div>
    </>
  );
}

export default LogementPage;
