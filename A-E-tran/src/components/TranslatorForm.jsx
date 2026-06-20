import React, { useState, useEffect } from "react";
import { useTranslation } from "../context/TranslationContext";
import LanguageSelector from "./LanguageSelector";
import LoadingSpinner from "./LoadingSpinner";
import { copyToClipboard } from "../utils/copyText";
import { downloadTxtFile } from "../utils/downloadFile";

const TranslatorForm = () => {
  const {
    sourceText,
    setSourceText,
    translatedText,
    sourceLang,
    setSourceLang,
    targetLang,
    setTargetLang,
    isLoading,
    error,
    translate,
    swapLanguages,
    clearAll,
  } = useTranslation();

  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    setCharCount(sourceText.length);
  }, [sourceText]);

  // Debounce translation
  useEffect(() => {
    const timer = setTimeout(() => {
      if (sourceText.trim()) {
        translate(sourceText);
      } else {
        // Clear translated text if source empty
        // (handled inside performTranslation)
      }
    }, 600);
    return () => clearTimeout(timer);
  }, [sourceText, sourceLang, targetLang]);

  const handleCopy = async () => {
    if (translatedText) {
      await copyToClipboard(translatedText);
      // Could trigger a toast notification here
    }
  };

  const handleDownload = () => {
    if (translatedText) {
      const content = `Original (${sourceLang}): ${sourceText}\nTranslated (${targetLang}): ${translatedText}`;
      downloadTxtFile(content, `translation_${Date.now()}.txt`);
    }
  };

  const handleShare = () => {
    if (translatedText && navigator.share) {
      navigator.share({
        title: "Translation",
        text: `${sourceText} → ${translatedText}`,
      });
    } else {
      alert("Share not supported in this browser.");
    }
  };

  return (
    <div className="space-y-6">
      {/* Language selection & swap */}
      <div className="flex flex-wrap items-center gap-4">
        <LanguageSelector
          value={sourceLang}
          onChange={setSourceLang}
          options={[
            { value: "en", label: "English" },
            { value: "am", label: "Amharic" },
          ]}
          label="From"
        />
        <button
          onClick={swapLanguages}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          <i className="fas fa-arrows-alt-h"></i>
        </button>
        <LanguageSelector
          value={targetLang}
          onChange={setTargetLang}
          options={[
            { value: "en", label: "English" },
            { value: "am", label: "Amharic" },
          ]}
          label="To"
        />
      </div>

      {/* Input area */}
      <div>
        <div className="relative">
          <textarea
            value={sourceText}
            onChange={(e) => setSourceText(e.target.value)}
            placeholder="Enter text to translate..."
            className="w-full min-h-[120px] p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-y"
          />
          <div className="absolute bottom-2 right-3 text-xs text-gray-400">
            {charCount} chars
          </div>
        </div>
        {error && (
          <div className="mt-2 text-sm text-red-600 dark:text-red-400">
            <i className="fas fa-exclamation-circle mr-1"></i> {error}
          </div>
        )}
      </div>

      {/* Translated output */}
      <div>
        <div className="relative">
          <div className="w-full min-h-[120px] p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white overflow-y-auto">
            {isLoading ? (
              <LoadingSpinner size="sm" />
            ) : translatedText ? (
              <div className="whitespace-pre-wrap">{translatedText}</div>
            ) : (
              <span className="text-gray-400 dark:text-gray-500">
                Translation will appear here
              </span>
            )}
          </div>
          {translatedText && !isLoading && (
            <div className="absolute bottom-2 right-3 flex space-x-2">
              <button
                onClick={handleCopy}
                className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                title="Copy"
              >
                <i className="fas fa-copy"></i>
              </button>
              <button
                onClick={handleDownload}
                className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                title="Download TXT"
              >
                <i className="fas fa-download"></i>
              </button>
              <button
                onClick={handleShare}
                className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                title="Share"
              >
                <i className="fas fa-share-alt"></i>
              </button>
            </div>
          )}
        </div>
        <div className="mt-2 flex justify-end">
          <button
            onClick={clearAll}
            className="text-sm text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400"
          >
            <i className="fas fa-times-circle mr-1"></i> Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default TranslatorForm;
