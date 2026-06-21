import React from "react";
import TranslatorForm from "../components/TranslatorForm";
import AudioPlayer from "../components/AudioPlayer";
import { useTranslation } from "../context/TranslationContext";

const Translator = () => {
  const { translatedText, targetLang } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
        Translator
      </h2>
      <div className="card p-6">
        <TranslatorForm />
      </div>

      {translatedText && (
        <div className="mt-6 card p-5 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
            <i className="fas fa-volume-up text-indigo-500"></i>
            <span className="text-sm font-medium">Listen to translation</span>
          </div>
          <AudioPlayer text={translatedText} lang={targetLang} />
        </div>
      )}
    </div>
  );
};

export default Translator;
