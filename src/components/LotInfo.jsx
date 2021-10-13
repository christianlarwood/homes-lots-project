import React from "react";
import { convertAcresToSqft } from "../utils/convertAcresToSqft";

const LotInfo = ({ lot }) => {
  const [street, cityState] = lot.address.split(/,(.+)/);

  return (
    <div className="lotInfoContainer">
      <h2>{street}</h2>
      <p id="cityState">{cityState}</p>
      <p id="acreage">
        {lot.acres} acres -{" "}
        {convertAcresToSqft(lot.acres)} sqft
      </p>
      <p className="lotDescription">{lot.description}</p>
    </div>
  );
};

export default LotInfo;
