export default function favorites(state=[], action) {
  switch (action.type) {
    case "ADD_TO_FAVORITES_SUCCESS": {
      return [...state, action.payload]
    }
    case "REMOVE_FROM_FAVORITES_SUCCESS": {
      return state.filter(name => name !== action.payload)
    }
    default:
      return state;
  }
}