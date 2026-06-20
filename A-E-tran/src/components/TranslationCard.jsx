import React from "react";
import { useTranslation } from "../context/TranslationContext";
import { copyToClipboard } from "../utils/copyText";
import { formatDate } from "../utils/formatDate";

const TranslationCard = ({ entry }) => {
  const { addFavorite, removeFavorite, isFavorite } = useTranslation();
  const fav = isFavorite(entry.id);

  const toggleFavorite = () => {
    if (fav) {
      removeFavorite(entry.id);
    } else {
      addFavorite(entry);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {entry.sourceLang.toUpperCase()} → {entry.targetLang.toUpperCase()}
          </p>
          <p className="text-gray-800 dark:text-gray-200 font-medium mt-1">
            {entry.sourceText}
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-1">
            {entry.translatedText}
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
            {formatDate(entry.timestamp)}
          </p>
        </div>
        <div className="flex space-x-2 ml-4">
          <button
            onClick={() => copyToClipboard(entry.translatedText)}
            className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
            title="Copy"
          >
            <i className="fas fa-copy"></i>
          </button>
          <button
            onClick={toggleFavorite}
            className={`${fav ? "text-yellow-500" : "text-gray-400 hover:text-yellow-500"}`}
            title={fav ? "Remove favorite" : "Add favorite"}
          >
            <i className={`fas fa-star`}></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TranslationCard;
