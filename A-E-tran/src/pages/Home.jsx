import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="text-center relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50/50 to-transparent dark:from-indigo-950/20 rounded-3xl" />
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">
            Amharic ↔ English
          </span>
          <span className="text-slate-800 dark:text-white"> Translator</span>
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Translate text, save favorites, learn phrases, and more – all in one
          place.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/translator"
            className="px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-2xl font-medium shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
          >
            <i className="fas fa-language mr-2"></i> Start Translating
          </Link>
          <Link
            to="/phrasebook"
            className="px-8 py-3.5 bg-white dark:bg-slate-800 text-slate-800 dark:text-white rounded-2xl font-medium shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200 border border-slate-200 dark:border-slate-700"
          >
            <i className="fas fa-book mr-2"></i> Browse Phrase Book
          </Link>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <FeatureCard
          icon="exchange-alt"
          title="Real-time Translation"
          desc="Instant translation between Amharic and English."
        />
        <FeatureCard
          icon="microphone"
          title="Voice Input & Output"
          desc="Speak your text and listen to translations."
        />
        <FeatureCard
          icon="history"
          title="History & Favorites"
          desc="All your translations saved locally. Star your favorites."
        />
        <FeatureCard
          icon="book"
          title="Dictionary & Phrase Book"
          desc="Look up words and learn phrases by category."
        />
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc }) => (
  <div className="card p-6 text-center group hover:-translate-y-1 transition-transform duration-200">
    <div className="w-14 h-14 rounded-2xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform">
      <i className={`fas fa-${icon}`}></i>
    </div>
    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
      {title}
    </h3>
    <p className="text-slate-500 dark:text-slate-400 mt-1 text-sm">{desc}</p>
  </div>
);

export default Home;
