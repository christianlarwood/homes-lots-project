export default function homes(state=[], action) {
  switch (action.type) {
    case "HOMES_FETCHED": {
      return action.payload
    }
    default:
      return state;
  }
}