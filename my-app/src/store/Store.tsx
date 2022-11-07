import { configureStore } from '@reduxjs/toolkit';
import { Reducer } from './Reducer';

const store = configureStore({
  reducer: Reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
