import { configureStore } from '@reduxjs/toolkit';
import greetings from './greeting';

const store = configureStore({
  reducer: {
    greetings,
  },
});

export default store;
