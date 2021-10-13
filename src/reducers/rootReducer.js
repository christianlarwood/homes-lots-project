import homes from "./homes";
import lots from "./lots";
import combinations from './combinations'
import favorites from './favorites'

const rootReducer = (state = {}, action) => {
  return {
    homes: homes(state.homes, action),
    lots: lots(state.lots, action),
    combinations: combinations(state.combinations, action),
    favorites: favorites(state.favorites, action),
  };
};

export default rootReducer;
