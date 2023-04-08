import React from "react";
import etoile from "../../assets/images/stargray.png";
import etoileColor from "../../assets/images/starscolor.png";

function StarsPage({ rating }) {
  let numberStar = rating;

  const starsMax = 5;
  const stars = [];

  for (let i = 1; i <= starsMax; i++) {
    if (i <= numberStar) {
      stars.push(<img key={i} src={etoileColor} alt="étoile color" />);
    } else {
      stars.push(<img key={i} src={etoile} alt="étoile" />);
    }
  }
  return <>{stars}</>;
}
export default StarsPage;
