import "./App.css";
// import { useEffect } from 'react';
import CustomerListConatiner from "./components/customers/customerList/CustomerListContainer";
import CustomerListHeader from "./components/customers/customerListheader/CustomerListHeader";
// import { fetchCustomers } from './features/customers/customersSlice';
// import { useSelector, useDispatch } from 'react-redux';
import SelectedCustomer from "./components/selectedCustomer/SelectedCustomer";

function App() {
  return (
    <div className="h-screen font-sans flex">
      <div className="w-1/3 border-r-2">
        <CustomerListHeader />
        <CustomerListConatiner />
      </div>
      <div className="w-2/3 flex-col items-start">
        <SelectedCustomer />
        <div>
          This will be the customer timeline
        </div>
      </div>
    </div>
  );
}

export default App;
