import { API } from "../lib/apiClient";

export function homesFetched(data) {
  return { type: "HOMES_FETCHED", payload: data };
}

export function fetchHomes() {
  return async function (dispatch) {
    const gomes = await API.getHomePlans();
    dispatch(homesFetched(gomes));
  };
}
