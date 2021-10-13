export default function homes(state=[], action) {
  switch (action.type) {
    case "COMBINATIONS_FETCHED": {
      return action.payload
    }
    default:
      return state;
  }
}