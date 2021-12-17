import React, { useEffect } from 'react';
import { fetchSelectedCustomer } from '../../features/selectedCustomer/selectedCustomerSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function SelectedCustomer() {
  const selectedCustomer = useSelector((state) => state.selectedCustomer);
  const selectedCustomerStatus = useSelector(
    (state) => state.selectedCustomer.status
  );
  const error = useSelector((state) => state.selectedCustomer.error);
  const dispatch = useDispatch();

  const renderedSelectedCustomerContent = () => {
    if (selectedCustomerStatus === 'loading') {
      return <div>Loading</div>;
    } else if (selectedCustomerStatus === 'succeeded') {
      return <div>Selected Customer name: {selectedCustomer.selectedCustomer.messages.map(message => JSON.stringify(message))}</div>;
    } else if (selectedCustomerStatus === 'failed') {
      return <div>{error}</div>;
    }
  };

  useEffect(() => {
    if (selectedCustomerStatus === 'idle') {
      dispatch(fetchSelectedCustomer());
    }
  }, [selectedCustomerStatus, dispatch]);
  return <div className="h-1/6 border-b-2">{renderedSelectedCustomerContent()}</div>;
}
