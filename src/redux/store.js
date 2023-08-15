import { configureStore, combineReducers } from '@reduxjs/toolkit';
import headerReducer from './slice/headerSlice';

const reducer = combineReducers({
  header: headerReducer,
});

const store = configureStore({
  reducer,
});

export default store;
