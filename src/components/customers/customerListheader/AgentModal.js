import React from "react";

export default function AgentModal({ handleClose, showAgentModal, children }) {
  const showHideAgentModalClassName = showAgentModal
    ? "inline-block bg-white shadow-agentModalBoxShaddow border-4"
    : "hidden";

  return (
    <div className={showHideAgentModalClassName}>
      <div className="flex-col flex-wrap items-center justify-center w-56 h-45">
        <div className="ml-3 mt-3 text-sm font-bold tracking-wide text-gray-1200">
          <label for="agents" id="checkAgent">
            Agent:
          </label>
        </div>
        <div>
          <div className="w-10 h-4 text-gray-1100 font-extralight text-sm leading-5">
            <button>
              <p className="max-w-0 underline decoration-solid">Clear</p>
            </button>
          </div>
          <div className="flex-grow-0 basis-1/2">
            <button type="button" onClick={handleClose}>
              Close
            </button>
          </div>
          <input
            className="w-10 mt-3"
            type="checkbox"
            id="checkAgent"
            name="Tim"
            value="Tim"
          />
          <label className="mr-12" for="checkAgent">
            {" "}
            Tim{" "}
          </label>
          <br></br>
          <input
            className="w-10"
            type="checkbox"
            id="checkAgent"
            name="Tim"
            value="Tim"
          />
          <label for="checkAgent"> Tim </label>
          <br></br>
          <input
            className="w-10 h-4"
            type="checkbox"
            id="checkAgent"
            name="Tim"
            value="Tim"
          />
          <label for="checkAgent"> Tim </label>
          <br></br>
          <input
            className="w-10 h-4"
            type="checkbox"
            id="checkAgent"
            name="Tim"
            value="Tim"
          />
          <label for="checkAgent"> Tim </label>
          <br></br>
          <input
            className="w-10 h-4"
            type="checkbox"
            id="checkAgent"
            name="Tim"
            value="Tim"
          />
          <label for="checkAgent"> Tim </label>
          <br></br>
          <input
            className="w-10 h-4"
            type="checkbox"
            id="checkAgent"
            name="Tim"
            value="Tim"
          />
          <label for="checkAgent"> Tim </label>
          <br></br>
          <input
            className="w-10 h-4"
            type="checkbox"
            id="checkAgent"
            name="Tim"
            value="Tim"
          />
          <label for="checkAgent"> Tim </label>
          <br></br>
          <input
            className="w-10 h-4"
            type="checkbox"
            id="checkAgent"
            name="Tim"
            value="Tim"
          />
          <label for="checkAgent"> Tim </label>
          <br></br>
        </div>

        {children}
      </div>
    </div>
  );
}
