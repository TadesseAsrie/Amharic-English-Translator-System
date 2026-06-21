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

  useEffect(() => {
    const timer = setTimeout(() => {
      if (sourceText.trim()) translate(sourceText);
    }, 500);
    return () => clearTimeout(timer);
  }, [sourceText, sourceLang, targetLang]);

  const handleCopy = async () => {
    if (translatedText) {
      await copyToClipboard(translatedText);
      // Optionally trigger a toast
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
    <div className="space-y-8">
      {/* Language row */}
      <div className="flex flex-wrap items-center gap-4 bg-slate-50/50 dark:bg-slate-800/30 p-4 rounded-2xl border border-slate-200/60 dark:border-slate-700/60">
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
          className="p-3 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800/40 transition-colors"
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

      {/* Input */}
      <div>
        <div className="relative">
          <textarea
            value={sourceText}
            onChange={(e) => setSourceText(e.target.value)}
            placeholder="Type or paste your text here..."
            className="input-area min-h-[140px] resize-y"
          />
          <div className="absolute bottom-3 right-4 text-xs text-slate-400 dark:text-slate-500">
            {charCount} characters
          </div>
        </div>
        {error && (
          <div className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
            <i className="fas fa-exclamation-circle"></i> {error}
          </div>
        )}
      </div>

      {/* Output */}
      <div>
        <div className="relative">
          <div className="input-area min-h-[140px] bg-slate-50 dark:bg-slate-800/50 overflow-y-auto flex items-start">
            {isLoading ? (
              <div className="flex justify-center w-full py-4">
                <LoadingSpinner size="md" />
              </div>
            ) : translatedText ? (
              <div className="whitespace-pre-wrap">{translatedText}</div>
            ) : (
              <span className="text-slate-400 dark:text-slate-500">
                Translation will appear here
              </span>
            )}
          </div>
          {translatedText && !isLoading && (
            <div className="absolute bottom-3 right-3 flex gap-2">
              <button
                onClick={handleCopy}
                className="p-2 rounded-lg bg-white dark:bg-slate-700 shadow-sm hover:shadow-md transition text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                title="Copy"
              >
                <i className="fas fa-copy"></i>
              </button>
              <button
                onClick={handleDownload}
                className="p-2 rounded-lg bg-white dark:bg-slate-700 shadow-sm hover:shadow-md transition text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                title="Download TXT"
              >
                <i className="fas fa-download"></i>
              </button>
              <button
                onClick={handleShare}
                className="p-2 rounded-lg bg-white dark:bg-slate-700 shadow-sm hover:shadow-md transition text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                title="Share"
              >
                <i className="fas fa-share-alt"></i>
              </button>
            </div>
          )}
        </div>
        <div className="mt-3 flex justify-end">
          <button
            onClick={clearAll}
            className="text-sm text-slate-500 dark:text-slate-400 hover:text-red-500 dark:hover:text-red-400 transition"
          >
            <i className="fas fa-times-circle mr-1"></i> Clear all
          </button>
        </div>
      </div>
    </div>
  );
};

export default TranslatorForm;
