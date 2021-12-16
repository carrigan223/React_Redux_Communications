import { configureStore } from '@reduxjs/toolkit';
import customersReducer from '../features/customers/customersSlice';
import selectedCustomerReducer from '../features/selectedCustomer/selectedCustomerSlice';

export default configureStore({
  reducer: {
    customers: customersReducer,
    selectedCustomer: selectedCustomerReducer
  }
});
