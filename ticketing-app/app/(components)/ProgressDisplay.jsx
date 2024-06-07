import React from "react";

const ProgressDisplay = () => {
  return (
    <div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: "75%" }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressDisplay;
