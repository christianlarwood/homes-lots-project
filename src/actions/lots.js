import { API } from "../lib/apiClient";

export function lotsFetched(data) {
  return { type: 'LOTS_FETCHED', payload: data };
}

export function fetchLots() {
  return async function (dispatch, getState) {
    const response = await API.getLots();
    dispatch(lotsFetched(response));
  }
}