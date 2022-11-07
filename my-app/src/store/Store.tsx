import { configureStore } from '@reduxjs/toolkit';
import { Reducer } from './Reducer';

const store = configureStore({
  reducer: Reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
