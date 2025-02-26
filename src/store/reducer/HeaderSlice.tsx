import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hamOpen: false,
}

const HeaderSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    changeStateHamOpen(state, action) {
      state.hamOpen = action.payload;
    }
  }
});

export const { changeStateHamOpen } = HeaderSlice.actions;
export default HeaderSlice.reducer;