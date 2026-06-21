import React from "react";
import { useTranslation } from "../context/TranslationContext";
import { copyToClipboard } from "../utils/copyText";
import { formatDate } from "../utils/formatDate";

const TranslationCard = ({ entry }) => {
  const { addFavorite, removeFavorite, isFavorite } = useTranslation();
  const fav = isFavorite(entry.id);

  const toggleFavorite = () => {
    if (fav) removeFavorite(entry.id);
    else addFavorite(entry);
  };

  return (
    <div className="card p-5 hover:-translate-y-1 transition-transform duration-200">
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
            <span className="uppercase tracking-wider">{entry.sourceLang}</span>
            <i className="fas fa-arrow-right text-xs"></i>
            <span className="uppercase tracking-wider">{entry.targetLang}</span>
            <span className="ml-auto text-slate-400 dark:text-slate-500 text-[10px]">
              {formatDate(entry.timestamp)}
            </span>
          </div>
          <p className="text-slate-800 dark:text-slate-200 font-medium text-base">
            {entry.sourceText}
          </p>
          <p className="text-slate-600 dark:text-slate-300 mt-1.5 text-sm">
            {entry.translatedText}
          </p>
        </div>
        <div className="flex gap-2 flex-shrink-0">
          <button
            onClick={() => copyToClipboard(entry.translatedText)}
            className="p-2 rounded-lg text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            title="Copy"
          >
            <i className="fas fa-copy"></i>
          </button>
          <button
            onClick={toggleFavorite}
            className={`p-2 rounded-lg transition ${fav ? "text-yellow-500" : "text-slate-400 hover:text-yellow-500"}`}
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
