import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import "./HomePlans.css";
import { fetchHomes } from "../actions/homes";
import { useLocation } from "react-router-dom";
import Modal from "./Modal";

const HomePlans = () => {
  const homes = useSelector((state) => state.homes);
  const dispatch = useDispatch();
  const query = new URLSearchParams(useLocation().search);
  const name = query.get("selectedHomePlan");

  useEffect(() => {
    dispatch(fetchHomes());
  }, [dispatch]);

  if (homes.length === 0) return null;

  return (
    <>
      <div className="homesListContainer">
        <button className="button">Show Saved Homes</button>
        <div className="homesList">
        {homes.map((home) => (
          <Card key={home.homePlanId} data={home} dataType="home" />
        ))}
        {name ? <Modal name={query.get("selectedHomePlan")} /> : null}
        </div>
      </div>
    </>
  );
};

export default HomePlans;
