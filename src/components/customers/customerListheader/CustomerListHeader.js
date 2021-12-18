import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const CustomerListHeader = () => {
  return (
    <div className="flex flex-col h-1/6 border-b-2">
      <div className="flex flex-col border-solid h-1/2 mt-3 ml-5 text-gray-900 font-bold text-2xl">
        <h1>Communication Theater</h1>
      </div>
      <div className="flex flex-col flex-wrap justify-around h-1/2 ml-5">
        <div className="">
          <div className="flex items-center text-gray-700 text-sm font-bold">
            <h2>Agent:</h2>
          </div>
          <div className="">
            <h2 className="inline mr-1 text-orange-500 text-sm font-bold">
              Select Agent
            </h2>
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
        </div>
        <div className="flex flex-col flex-wrap justify-between mt-14 mb-8 mr-44">
          <div className="h-full w-1/2 text-gray-700 text-sm font-bold mr-10">
            <h2>Status:</h2>
          </div>
          <div className="h-full w-1/2 text-gray-700 text-sm font-bold">
            <h2>Date Range:</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerListHeader;
