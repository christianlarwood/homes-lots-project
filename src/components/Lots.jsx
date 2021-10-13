import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import "./Lots.css";
import { useLocation } from "react-router-dom";
import Modal from "./Modal";
import { fetchLots } from "../actions/lots";

const Lots = () => {
  const lots = useSelector((state) => state.lots);
  const dispatch = useDispatch();
  const query = new URLSearchParams(useLocation().search);
  const name = query.get("selectedLot");

  useEffect(() => {
    dispatch(fetchLots());
  }, [dispatch]);

  if (lots.length === 0) return null;

  return (
    <>
      <div className="lotsContainer">
        <button className="button">Show Saved Lots</button>
        <div className="lotsList">
        {lots.map((lot) => (
          <Card key={lot.lotId} data={lot} dataType="lot" />
        ))}
        {name ? <Modal name={query.get("selectedLot")} /> : null}
        </div>
      </div>
    </>
  );
};

export default Lots;
