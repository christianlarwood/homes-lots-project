export function addToFavoritesSuccess(data) {
  return { type: 'ADD_TO_FAVORITES_SUCCESS', payload: data }
}

export function removeFromFavoritesSuccess(data) {
  return { type: 'REMOVE_FROM_FAVORITES_SUCCESS', payload: data }
}
    
export function addToFavorites(data) {
  return function (dispatch) {
    dispatch(addToFavoritesSuccess(data))
  }
}

export function removeFromFavorites(data) {
  return function (dispatch) {
    dispatch(removeFromFavoritesSuccess(data))
  }
}