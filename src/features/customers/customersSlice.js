import { createSlice } from "@reduxjs/toolkit";

export const customersSlice = createSlice({
  name: "customers",
  initialState: {
    value: []
  },
  reducers: {
    populateCustomers: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = action.payload;
    }
  }
});

export const { populateCustomers } = customersSlice.actions;

export default customersSlice.reducer;
