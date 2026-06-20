import React, { useState } from "react";
import { useTranslation } from "../context/TranslationContext";
import TranslationCard from "../components/TranslationCard";
import SearchBar from "../components/SearchBar";
import EmptyState from "../components/EmptyState";

const History = () => {
  const { history, deleteHistoryItem, clearHistory } = useTranslation();
  const [search, setSearch] = useState("");

  const filtered = history.filter(
    (h) =>
      h.sourceText.toLowerCase().includes(search.toLowerCase()) ||
      h.translatedText.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          History
        </h2>
        {history.length > 0 && (
          <button
            onClick={() => {
              if (window.confirm("Clear all history?")) clearHistory();
            }}
            className="text-sm text-red-600 dark:text-red-400 hover:underline"
          >
            Clear All
          </button>
        )}
      </div>

      <SearchBar
        value={search}
        onChange={setSearch}
        placeholder="Search history..."
      />

      <div className="mt-6 space-y-4">
        {filtered.length === 0 ? (
          <EmptyState
            icon="history"
            title="No history"
            description="Your translations will appear here."
          />
        ) : (
          filtered.map((entry) => (
            <div key={entry.id} className="relative">
              <TranslationCard entry={entry} />
              <button
                onClick={() => deleteHistoryItem(entry.id)}
                className="absolute top-2 right-2 text-gray-400 hover:text-red-500 dark:hover:text-red-400"
                title="Delete"
              >
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default History;
