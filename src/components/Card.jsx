import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import FavoriteButton from "./FavoriteButton";
import HomeInfo from "./HomeInfo";
import LotInfo from "./LotInfo";
import { convertHomeName } from "../utils/convertHomeName";
import { convertLotAddress } from "../utils/convertLotAddress";

const Card = ({ data, dataType }) => {
  const isHome = dataType === "home";
  
  let name = isHome ? convertHomeName(data.name) : convertLotAddress(data.address)

  return (
    <>
      <Link to={isHome ? `/homes?selectedHomePlan=${name}` : `/lots?selectedLot=${name}`}>
        <div className="cardContainer">
          <div className="cardImageContainer">
              <img src={data.image} alt={name}></img>
              <FavoriteButton name={name} />
          </div>
          {isHome
            ? <HomeInfo home={data} />
            : <LotInfo lot={data} />
          }
        </div>
      </Link>
    </>
  );
};

export default Card;
