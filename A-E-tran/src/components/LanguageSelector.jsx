import React from "react";

const LanguageSelector = ({ value, onChange, options, label }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white text-sm py-2 px-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
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
