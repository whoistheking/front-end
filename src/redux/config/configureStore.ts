import { configureStore } from '@reduxjs/toolkit';
import cardChoice from '../module/CardChoiceSlice';

const store = configureStore({
  reducer: { cardChoice },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;