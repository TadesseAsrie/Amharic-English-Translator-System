import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="text-9xl font-extrabold text-gray-200 dark:text-gray-700">
        404
      </h1>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-4">
        Page Not Found
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mt-2">
        The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
      >
        <i className="fas fa-home mr-2"></i> Go Home
      </Link>
    </div>
  );
};

export default NotFound;
