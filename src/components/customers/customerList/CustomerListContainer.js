import React, { useEffect } from "react";
import CustomerCard from "../customerCard/CustomerCard";
import { fetchCustomers } from "../../../features/customers/customersSlice";
import { useSelector, useDispatch } from "react-redux";

const CustomerListContainer = () => {
  const customers = useSelector((state) => state.customers.customers);
  const dispatch = useDispatch();
  const customerStatus = useSelector((state) => state.customers.status);
  const error = useSelector((state) => state.customers.error);

  useEffect(() => {
    console.log(`Customer status: ${customerStatus}`);
    if (customerStatus === "idle") {
      console.log(`Customer status: ${customerStatus}`);
      dispatch(fetchCustomers());
    }
  }, [customerStatus, dispatch]);

  const renderedCustomerListContainerContent = () => {
    if (customerStatus === "loading") {
      return <div>Loading</div>;
    } else if (customerStatus === "succeeded") {
      return customers.map((customer) => {
        return <CustomerCard key={customer.id} customer={customer} />;
      });
    } else if (customerStatus === "failed") {
      return <div>{error}</div>;
    }
  };

  return (
    <div className="h-5/6 overflow-scroll ">
      {renderedCustomerListContainerContent()}
    </div>
  );
};

export default CustomerListContainer;
