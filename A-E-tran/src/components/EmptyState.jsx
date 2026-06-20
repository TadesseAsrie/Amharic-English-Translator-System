import React from "react";

const EmptyState = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <div className="text-5xl text-gray-300 dark:text-gray-600 mb-4">
        <i className={`fas fa-${icon}`}></i>
      </div>
      <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
        {title}
      </h3>
      <p className="text-gray-500 dark:text-gray-400 mt-1">{description}</p>
    </div>
  );
};

export default EmptyState;
