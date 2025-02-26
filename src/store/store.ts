import { configureStore } from "@reduxjs/toolkit";
import HeaderReducer from './reducer/HeaderSlice';

const store = configureStore({
  reducer: {
    header: HeaderReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export default store;