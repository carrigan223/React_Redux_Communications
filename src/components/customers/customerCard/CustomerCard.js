import React from "react";

export default function CustomerCard({ customer }) {
  return (
    <div className="p-3 border-b-2">
      <div>{customer.name}</div>
      <div>{customer.messages.length > 0 ? customer.messages[0].body : ""}</div>
      <div>
        Agent: {customer.assignments ? customer.assignments[0].user.name : ""}
      </div>
      <div>
        {customer.tags.length > 0 ? customer.tags[0].name : ""}
      </div>
    </div>
  );
}
