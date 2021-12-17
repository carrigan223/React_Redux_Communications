import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSelectedCustomer = createAsyncThunk(
  'selectedCustomer/fetchSelectedCustomer',
  async () => {
    const response = await axios.get('customerData.json');
    console.log(response.data);
    return response.data;
  }
);

const initialState = {
  selectedCustomer: 0,
  status: 'idle',
  error: null
};

export const selectedCustomerSlice = createSlice({
  name: 'selectedCustomer',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSelectedCustomer.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchSelectedCustomer.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Add any fetched posts to the array
        state.selectedCustomer = action.payload;
      })
      .addCase(fetchSelectedCustomer.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default selectedCustomerSlice.reducer;
