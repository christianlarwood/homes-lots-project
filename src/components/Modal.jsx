import React, { useState, useEffect } from "react";
import { default as ModalContainer } from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { fetchCombinations } from "../actions/combinations";
import { fetchHomes } from "../actions/homes";
import { fetchLots } from "../actions/lots";
import { useHistory } from "react-router-dom";
import { getCompatibleLotIds, getCompatibleLotsData } from "../selectors/lotsSelectors";
import { getCompatibleHomeIds, getCompatibleHomesData } from "../selectors/homesSelectors";
import { convertHomeName } from "../utils/convertHomeName";
import { convertLotAddress } from "../utils/convertLotAddress";
import FavoriteButton from './FavoriteButton';
import HomeInfo from './HomeInfo';
import LotInfo from "./LotInfo";
import Card from "./Card";
import "./Modal.css";

ModalContainer.setAppElement("#root");

function Modal({ name }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const allHomes = useSelector((state) => state.homes);
  const allCombinations = useSelector((state) => state.combinations);
  const allLots = useSelector((state) => state.lots);
  
  const dispatch = useDispatch();
  const history = useHistory();
  
  const isHome = history.location.pathname === '/homes';
  
  const handleModalClose = () => {
    setModalIsOpen(false);
    history.replace({
      search: "",
    });
    
    isHome ? history.go("/homes") : history.go("/lots")
  };

  const homeData = allHomes.find((home) => {
      return convertHomeName(home.name) === name;
    })

  const lotData = allLots.find((lot) => {
      return convertLotAddress(lot.address) === name;
    })

  let selectedCardDataForModal = homeData ? homeData : lotData;

  useEffect(() => {
    dispatch(fetchLots());
    dispatch(fetchCombinations());
    dispatch(fetchHomes());
    setModalIsOpen(true);
  }, [dispatch]);

  const compatibleLotIds = getCompatibleLotIds(allCombinations, selectedCardDataForModal);
  const compatibleLotsData = getCompatibleLotsData(compatibleLotIds, allLots);

  const compatibleHomeIds = getCompatibleHomeIds(allCombinations, selectedCardDataForModal);
  const compatibleHomesData = getCompatibleHomesData(compatibleHomeIds, allHomes);

  if (!name) return null;
  if (!compatibleHomesData.length === 0 && !compatibleLotsData.length === 0) return null;

  let listOfCompatibleOptions = compatibleLotsData.length > 0 ? compatibleLotsData : compatibleHomesData;

  return (
    <>
      <ModalContainer
        isOpen={modalIsOpen}
        onRequestClose={handleModalClose}
        style={{
          overlay: {
            backgroundColor: "rgb(120, 120, 120, 0.6)",
          },
        }}
      >
        <div className="modalContainer">
          <div className="selectedCardContainer">
            <div className="modalImageContainer">
              <img src={selectedCardDataForModal.image} alt={name}></img>
            </div>
            <div className="modalInformationContainer">
              {isHome 
                ? <HomeInfo home={selectedCardDataForModal} />
                : <LotInfo lot={selectedCardDataForModal}/>
              }
              <FavoriteButton name={name} />
            </div>
          </div>
          <div className="compatibleOptionsContainer">
            <div id="compatibleOptionsTitle">
              {isHome
                ? <p>Compatible Lots</p>
                : <p>Compatible Homes</p>
              }
            </div>
            <div className="compatibleOptionsList">
              {listOfCompatibleOptions.map((data) => (
                <Card key={data.lotId ? data.lotId : data.homePlanId} data={data} dataType={!isHome ? "home" : "lot"} />
              ))}
            </div>
          </div>
        </div>
      </ModalContainer>
    </>
  );
}

export default Modal;
