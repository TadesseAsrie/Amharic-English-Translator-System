import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-4 text-center text-sm text-gray-600 dark:text-gray-400">
      <p>
        © {new Date().getFullYear()} Amharic ↔ English Translator — Built with
        React & Tailwind
      </p>
    </footer>
  );
};

export default Footer;
