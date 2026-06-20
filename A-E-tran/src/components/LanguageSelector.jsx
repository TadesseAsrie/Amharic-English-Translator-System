import React from "react";

const LanguageSelector = ({ value, onChange, options, label }) => {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-sm p-2"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
