import React, { useState } from "react";
import { phraseCategories } from "../data/phrases";
import { copyToClipboard } from "../utils/copyText";
import SearchBar from "../components/SearchBar";

const PhraseBook = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState(
    Object.keys(phraseCategories)[0],
  );

  const categories = Object.keys(phraseCategories);

  const getPhrases = () => {
    let phrases = phraseCategories[activeCategory] || [];
    if (search.trim()) {
      phrases = phrases.filter(
        (p) =>
          p.en.toLowerCase().includes(search.toLowerCase()) ||
          p.am.includes(search),
      );
    }
    return phrases;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Phrase Book
      </h2>

      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              activeCategory === cat
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <SearchBar
        value={search}
        onChange={setSearch}
        placeholder="Search phrases..."
      />

      <div className="mt-6 space-y-3">
        {getPhrases().length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400 text-center py-8">
            No phrases found.
          </p>
        ) : (
          getPhrases().map((phrase, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700 flex justify-between items-center"
            >
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  {phrase.en}
                </p>
                <p className="text-gray-700 dark:text-gray-300">{phrase.am}</p>
              </div>
              <button
                onClick={() => copyToClipboard(phrase.am)}
                className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                title="Copy Amharic"
              >
                <i className="fas fa-copy"></i>
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PhraseBook;
