import React, { useState } from "react";
import { dictionaryEntries } from "../data/dictionary";
import SearchBar from "../components/SearchBar";
import EmptyState from "../components/EmptyState";

const Dictionary = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = dictionaryEntries.filter(
    (entry) =>
      entry.en.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.am.includes(searchTerm),
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Dictionary
      </h2>
      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        placeholder="Search English or Amharic word..."
      />

      <div className="mt-6 space-y-3">
        {filtered.length === 0 ? (
          <EmptyState
            icon="search"
            title="No results"
            description="Try a different word."
          />
        ) : (
          filtered.map((entry, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {entry.en}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">{entry.am}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    / {entry.pronunciation} /
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Dictionary;
