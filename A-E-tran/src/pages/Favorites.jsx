import React, { useState } from "react";
import { useTranslation } from "../context/TranslationContext";
import TranslationCard from "../components/TranslationCard";
import SearchBar from "../components/SearchBar";
import EmptyState from "../components/EmptyState";

const Favorites = () => {
  const { favorites, removeFavorite } = useTranslation();
  const [search, setSearch] = useState("");

  const filtered = favorites.filter(
    (f) =>
      f.sourceText.toLowerCase().includes(search.toLowerCase()) ||
      f.translatedText.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Favorites
      </h2>
      <SearchBar
        value={search}
        onChange={setSearch}
        placeholder="Search favorites..."
      />

      <div className="mt-6 space-y-4">
        {filtered.length === 0 ? (
          <EmptyState
            icon="star"
            title="No favorites"
            description="Star translations to save them here."
          />
        ) : (
          filtered.map((entry) => (
            <div key={entry.id} className="relative">
              <TranslationCard entry={entry} />
              <button
                onClick={() => removeFavorite(entry.id)}
                className="absolute top-2 right-2 text-yellow-500 hover:text-red-500"
                title="Remove favorite"
              >
                <i className="fas fa-star"></i>
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Favorites;
