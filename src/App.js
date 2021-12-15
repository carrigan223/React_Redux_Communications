import './App.css';
import { useEffect } from 'react';
import CustomerList from './components/customers/customerList/CustomerList';
import CustomerListHeader from './components/customers/customerListheader/CustomerListHeader';
import {
  fetchCustomers,
  selectAllCustomers
} from './features/customers/customersSlice';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const customers = useSelector((state) => state.customers.customers);
  const dispatch = useDispatch();
  const customerStatus = useSelector((state) => state.customers.status);
  const error = useSelector((state) => state.customers.error);

  // const getData = () => {

  //   fetch('data.json', {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json'
  //     }
  //   })
  //     .then(function (response) {
  //       console.log(response);
  //       return response.json();
  //     })
  //     .then(function (myJson) {
  //       console.log(myJson);
  //     });
  // };

  useEffect(() => {
    console.log(`Customer status: ${customerStatus}`);
    if (customerStatus === 'idle') {
      console.log(`Customer status: ${customerStatus}`);
      dispatch(fetchCustomers());
    }
  }, [customerStatus, dispatch]);
  let content;

  if (customerStatus === 'loading') {
    content = <div>Loading</div>;
  } else if (customerStatus === 'succeeded') {
    content = customers.map((customer) => (
      <div key={customer.id}>{customer.id}</div>
    ));
  } else if (customerStatus === 'failed') {
    content = <div>{error}</div>;
  }
  // console.log(customers);

  return (
    <div className='App'>
      <h1>{content}</h1>
      <CustomerListHeader />
      <CustomerList />
    </div>
  );
}

export default App;
