import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { isDark } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/translator", label: "Translator" },
    { to: "/dictionary", label: "Dictionary" },
    { to: "/phrasebook", label: "Phrase Book" },
    { to: "/history", label: "History" },
    { to: "/favorites", label: "Favorites" },
    { to: "/about", label: "About" },
  ];

  return (
    <>
      <nav className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="lg:hidden text-gray-700 dark:text-gray-200 mr-2"
              >
                <i className="fas fa-bars text-xl"></i>
              </button>
              <NavLink to="/" className="flex items-center space-x-2">
                <i className="fas fa-language text-indigo-600 dark:text-indigo-400 text-2xl"></i>
                <span className="font-bold text-lg text-gray-800 dark:text-white">
                  Amh
                  <span className="text-indigo-600 dark:text-indigo-400">
                    ↔
                  </span>
                  Eng
                </span>
              </NavLink>
            </div>

            {/* Desktop links */}
            <div className="hidden lg:flex space-x-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors ${
                      isActive
                        ? "text-indigo-600 dark:text-indigo-400"
                        : "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Right controls */}
            <div className="flex items-center space-x-3">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-40 transition-opacity ${
          isSidebarOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsSidebarOpen(false)}
        />
        <div
          className={`absolute left-0 top-0 h-full w-64 bg-white dark:bg-gray-800 shadow-xl transform transition-transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <span className="font-bold">Menu</span>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-gray-500 dark:text-gray-400"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="p-4 space-y-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsSidebarOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-sm font-medium ${
                    isActive
                      ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
