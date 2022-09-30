import { configureStore } from '@reduxjs/toolkit';
import cardlistSlice from './cardlistSlice';

export const store = configureStore({
  reducer: {
    cardList: cardlistSlice,

  },
});
