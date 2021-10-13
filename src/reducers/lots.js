export default function lots(state=[], action) {
  switch (action.type) {
    case "LOTS_FETCHED": {
      return action.payload
    }
    default:
      return state;
  }
}