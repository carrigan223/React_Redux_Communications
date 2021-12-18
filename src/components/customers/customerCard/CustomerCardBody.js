import React from "react";

const CustomerCardBody = ({ customer, dateString }) => {
  return (
    <div className="flex items-center w-8/12">
      <div className="w-8/12">
        <div className="flex items-center py-1">
          <div className="text-md text-gray-900 font-bold">{`${customer.first_name} ${customer.last_name}`}</div>
          <div className="text-sm text-gray-900 px-1 truncate">
            AGENT:{" "}
            {customer.assignments ? customer.assignments[0].user.name : ""}
          </div>
        </div>
        <div className="text-xs text-gray-600 truncate ">
          {customer.messages.length > 0 ? customer.messages[0].body : ""}
        </div>
      </div>
      <div className="flex items-center w-4/12 h-full justify-center">
        <div className="flex-col">
          <div className="text-xs py-1 text-gray-600 truncate">{dateString}</div>
          <div className="text-sm text-gray-900">
            {customer.tags.length > 0 ? customer.tags[0].name : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerCardBody;
