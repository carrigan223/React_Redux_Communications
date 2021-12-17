import React from "react";
import CustomerInitials from "../customerInitials/CustomerInitials";
import CustomerCardBody from "./CustomerCardBody";

export default function CustomerCard({ customer }) {
  let dateString = "";
  if (customer.messages.length > 0) {
    const firstMessageDate = new Date(customer.messages[0].created_at);
    dateString = firstMessageDate.toLocaleString();
  }

  return (
    <div className="flex p-3 border-b-2">
      <CustomerInitials
        firstName={customer.first_name}
        lastName={customer.last_name}
        id={customer.id}
      />
      <CustomerCardBody customer={customer} dateString={dateString} />
    </div>
  );
}
