import React from "react";
import TranslatorForm from "../components/TranslatorForm";
import AudioPlayer from "../components/AudioPlayer";
import { useTranslation } from "../context/TranslationContext";

const Translator = () => {
  const { translatedText, targetLang } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Translator
      </h2>
      <TranslatorForm />

      {/* Audio player for translated text */}
      {translatedText && (
        <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              <i className="fas fa-volume-up mr-2"></i> Listen to translation
            </span>
            <AudioPlayer text={translatedText} lang={targetLang} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Translator;
