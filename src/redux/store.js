import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './slices/greeting-slice';

const reducer = {
  greetingReducer,
};

const store = configureStore({
  reducer,
});

export default store;
