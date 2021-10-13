import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from "../actions/favorites";
import './FavoriteButton.css';

const FavoriteButton = ({name}) => {
  const favorites = useSelector(state => state.favorites)
  const dispatch = useDispatch();
 
  const toggleFavorite = (e) => {
    e.preventDefault();
    if (favorites.includes(name)) {
      dispatch(removeFromFavorites(name))
    } else {
      dispatch(addToFavorites(name))
    }
  }

  let isFavorite = favorites.includes(name);

  return (
    <div>
        <button className="favoriteButton" onClick={toggleFavorite} id={isFavorite.toString()}>
          <img src="/heart.png" alt="heart icon"></img>
        </button>
    </div>
  )
}

export default FavoriteButton;