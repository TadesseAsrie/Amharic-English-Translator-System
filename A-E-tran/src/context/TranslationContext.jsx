import React, { createContext, useContext, useState, useEffect } from "react";
import { translateText } from "../api/translationApi";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  // ----- History & Favorites (localStorage) -----
  const [history, setHistory] = useLocalStorage("translationHistory", []);
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  // ----- Current translation state -----
  const [sourceText, setSourceText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [sourceLang, setSourceLang] = useState("en");
  const [targetLang, setTargetLang] = useState("am");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // ----- Perform translation -----
  const performTranslation = async (
    text,
    from = sourceLang,
    to = targetLang,
  ) => {
    if (!text.trim()) {
      setTranslatedText("");
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      const result = await translateText(text, from, to);
      setTranslatedText(result);
      // Save to history
      const entry = {
        id: Date.now(),
        sourceText: text,
        translatedText: result,
        sourceLang: from,
        targetLang: to,
        timestamp: new Date().toISOString(),
      };
      setHistory((prev) => [entry, ...prev.slice(0, 99)]); // keep last 100
    } catch (err) {
      setError(err.message || "Translation failed");
      setTranslatedText("");
    } finally {
      setIsLoading(false);
    }
  };

  // Auto-translate when sourceText changes (debounced in component)
  const translate = (text) => {
    setSourceText(text);
    performTranslation(text);
  };

  // Swap languages
  const swapLanguages = () => {
    const from = sourceLang;
    const to = targetLang;
    setSourceLang(to);
    setTargetLang(from);
    // Swap texts if both exist
    if (sourceText && translatedText) {
      setSourceText(translatedText);
      setTranslatedText(sourceText);
    } else {
      setSourceText("");
      setTranslatedText("");
    }
  };

  // Clear input / output
  const clearAll = () => {
    setSourceText("");
    setTranslatedText("");
    setError(null);
  };

  // Favorites helpers
  const addFavorite = (entry) => {
    if (!favorites.some((f) => f.id === entry.id)) {
      setFavorites((prev) => [entry, ...prev]);
    }
  };
  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((f) => f.id !== id));
  };
  const isFavorite = (id) => favorites.some((f) => f.id === id);

  // History helpers
  const deleteHistoryItem = (id) => {
    setHistory((prev) => prev.filter((h) => h.id !== id));
  };
  const clearHistory = () => setHistory([]);

  return (
    <TranslationContext.Provider
      value={{
        sourceText,
        setSourceText,
        translatedText,
        setTranslatedText,
        sourceLang,
        setSourceLang,
        targetLang,
        setTargetLang,
        isLoading,
        error,
        translate,
        performTranslation,
        swapLanguages,
        clearAll,
        history,
        setHistory,
        deleteHistoryItem,
        clearHistory,
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);
