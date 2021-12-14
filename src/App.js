import './App.css';
import CustomerList from './components/customers/customerList/CustomerList';
import CustomerListHeader from './components/customers/customerListheader/CustomerListHeader';
import { populateCustomers } from './features/customers/customersSlice';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const customers = useSelector((state) => state.customers.value);
  const dispatch = useDispatch();

  const getData = () => {
    fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
      });
  };

  return (
    <div className='App'>
      <h1>
        {customers.length === 0
          ? 'empty list'
          : customers.map((x) => <div>{x.id}</div>)}
      </h1>
      <h1>Hello World</h1>
      <CustomerListHeader />
      <CustomerList />
    </div>
  );
}

export default App;
