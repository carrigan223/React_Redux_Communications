import React, { useEffect } from "react";
import { fetchSelectedCustomer } from "../../features/selectedCustomer/selectedCustomerSlice";
import { useSelector, useDispatch } from "react-redux";
import CustomerInitials from "../customers/customerInitials/CustomerInitials";

export default function SelectedCustomer() {
  const selectedCustomer = useSelector((state) => state.selectedCustomer);
  const selectedCustomerStatus = useSelector(
    (state) => state.selectedCustomer.status
  );
  const error = useSelector((state) => state.selectedCustomer.error);
  const dispatch = useDispatch();

  const renderedSelectedCustomerContent = () => {
    if (selectedCustomerStatus === "loading") {
      return <div>Loading</div>;
    } else if (selectedCustomerStatus === "succeeded") {
      return (
        <div className="flex items-center h-full bg-gray-50">
          <CustomerInitials
            firstName={selectedCustomer.selectedCustomer.first_name}
            lastName={selectedCustomer.selectedCustomer.last_name}
            id={selectedCustomer.selectedCustomer.id}
          />
          <div className="text-header font-bold">{selectedCustomer.selectedCustomer.name}</div>
        </div>
      );
    } else if (selectedCustomerStatus === "failed") {
      return <div>{error}</div>;
    }
  };

  useEffect(() => {
    if (selectedCustomerStatus === "idle") {
      dispatch(fetchSelectedCustomer());
    }
  }, [selectedCustomerStatus, dispatch]);
  return (
    <div className="h-1/6 border-b-2">{renderedSelectedCustomerContent()}</div>
  );
}
