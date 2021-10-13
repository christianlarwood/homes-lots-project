import React from 'react';

const HomeInfo = ({home}) => {
  return (
    <>
      <div className="homeInfoContainer">
        <h3>{home.name}</h3>      
        <p id="homeDetails">{home.numBeds} beds - {home.numBaths} baths - {home.sqft.toLocaleString()} sqft</p>
        <div className="tagsContainer">
          {home.tags.length > 0 ? home.tags.map(tag => (
            <p className="tags" key={tag} >{tag}</p>
          )) 
          : <div className="noTags"></div>}
        </div>
        <p className="description">{home.description}</p>
      </div>
    </>
  )
}

export default HomeInfo;