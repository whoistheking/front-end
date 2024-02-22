import { configureStore } from '@reduxjs/toolkit';
import cardChoice from '../module/CardChoiceSlice';
import connect from '../module/Connect';

const store = configureStore({
  reducer: {
    cardChoice,
    connect
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;