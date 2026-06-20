import React from "react";

const About = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
        About
      </h2>
      <div className="mt-6 space-y-4 text-gray-700 dark:text-gray-300">
        <p>
          This <strong>Amharic ↔ English Translator</strong> is a modern,
          responsive web application built with React, Tailwind CSS, and the Web
          Speech API.
        </p>
        <p>
          It features real‑time translation (mock API by default, ready for
          Google Cloud / LibreTranslate), voice input/output, translation
          history, favorites, a dictionary, and a phrase book.
        </p>
        <p>
          All data (history & favorites) is stored locally in your browser using{" "}
          <code>localStorage</code> – no data is sent to any server except the
          translation API (which you can configure).
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Version 1.0 — built with ❤️ for the Amharic community.
        </p>
      </div>
    </div>
  );
};

export default About;
