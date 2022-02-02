import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../features/counter/counterSlice';

import quotesSlice from '../quotes/quotesSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    quotes: quotesSlice
  },
});
