import { API } from "../lib/apiClient";

export function combinationsFetched(data) {
  return { type: 'COMBINATIONS_FETCHED', payload: data };
}

export function fetchCombinations() {
  return async function (dispatch) {
    const allCombinations = await API.getCombinations();
    dispatch(combinationsFetched(allCombinations));
  }
}