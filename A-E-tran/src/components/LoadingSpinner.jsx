import React from "react";

const LoadingSpinner = ({ size = "md" }) => {
  const sizes = {
    sm: "w-5 h-5 border-2",
    md: "w-8 h-8 border-3",
    lg: "w-12 h-12 border-4",
  };
  return (
    <div className="flex justify-center items-center">
      <div
        className={`${sizes[size]} border-t-transparent border-indigo-600 dark:border-indigo-400 rounded-full animate-spin`}
        style={{
          borderWidth: size === "sm" ? "2px" : size === "md" ? "3px" : "4px",
        }}
      ></div>
    </div>
  );
};

export default LoadingSpinner;
