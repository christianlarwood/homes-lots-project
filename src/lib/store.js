import { configureStore } from '@reduxjs/toolkit';
import homes from '../reducers/homes';
import lots from '../reducers/lots';
import combinations from '../reducers/combinations';
import favorites from '../reducers/favorites';

const store = configureStore({
  reducer: {
    homes: homes,
    lots: lots,
    combinations: combinations,
    favorites: favorites,
  }
})

export default store;