import { configureStore, combineReducers } from '@reduxjs/toolkit';
import rootReducer from './slice/rootSlice';

const reducer = combineReducers({
  root: rootReducer,
});

const store = configureStore({
  reducer,
});

export default store;
