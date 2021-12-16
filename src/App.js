import './App.css';
// import { useEffect } from 'react';
import CustomerListConatiner from './components/customers/customerList/CustomerListContainer';
import CustomerListHeader from './components/customers/customerListheader/CustomerListHeader';
// import { fetchCustomers } from './features/customers/customersSlice';
// import { useSelector, useDispatch } from 'react-redux';
import SelectedCustomer from './components/selectedCustomer/SelectedCustomer';

function App() {
  return (
    <div className='App'>
      <CustomerListHeader />
      <CustomerListConatiner />
      <SelectedCustomer />
    </div>
  );
}

export default App;
