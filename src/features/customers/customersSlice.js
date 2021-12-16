import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCustomers = createAsyncThunk(
  'customers/fetchCustomers',
  async () => {
    const response = await axios.get('data.json');
    console.log(response.data);
    return response.data;
  }
);

const initialState = {
  customers: [],
  status: 'idle',
  error: null
};

export const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    populateCustomers: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCustomers.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchCustomers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Add any fetched posts to the array
        state.customers = state.customers.concat(action.payload);
      })
      .addCase(fetchCustomers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { populateCustomers } = customersSlice.actions;

export const selectAllCustomers = (state) => state.customers.customers;

export default customersSlice.reducer;
