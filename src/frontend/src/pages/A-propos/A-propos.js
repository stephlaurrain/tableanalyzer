import styles from "./A-propos.module.scss";
import Collapse from "../../components/Collapse/Collapse";
import { dataSection } from "../../data/dataSection";

function ProposPage() {
  const sectionData = dataSection;

  return (
    <div className="flex-fill ">
      <div
        className={`${styles.banner} d-flex align-items-center justify-content-center`}
      ></div>

      <div className={` d-flex flex-column ${styles.containerCollapse}`}>
        {sectionData.map((r) => (
          <Collapse key={r.id} title={r.title} texte={r.text} />
        ))}
      </div>
    </div>
  );
}
export default ProposPage;
