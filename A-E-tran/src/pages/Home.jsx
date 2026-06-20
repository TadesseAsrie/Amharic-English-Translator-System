import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
          Amharic ↔ English{" "}
          <span className="text-indigo-600 dark:text-indigo-400">
            Translator
          </span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Translate text, save favorites, learn phrases, and more – all in one
          place.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/translator"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-medium"
          >
            <i className="fas fa-language mr-2"></i> Start Translating
          </Link>
          <Link
            to="/phrasebook"
            className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition font-medium"
          >
            <i className="fas fa-book mr-2"></i> Browse Phrase Book
          </Link>
        </div>
      </div>

      {/* Features grid */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
        <FeatureCard
          icon="exchange-alt"
          title="Real-time Translation"
          desc="Instant translation between Amharic and English with auto-detect."
        />
        <FeatureCard
          icon="microphone"
          title="Voice Input & Output"
          desc="Speak your text and listen to translations with text-to-speech."
        />
        <FeatureCard
          icon="history"
          title="History & Favorites"
          desc="All your translations are saved locally. Star your favorites."
        />
        <FeatureCard
          icon="book"
          title="Dictionary & Phrase Book"
          desc="Look up words and learn useful phrases by category."
        />
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
    <div className="text-3xl text-indigo-600 dark:text-indigo-400 mb-3">
      <i className={`fas fa-${icon}`}></i>
    </div>
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-400 mt-1">{desc}</p>
  </div>
);

export default Home;
