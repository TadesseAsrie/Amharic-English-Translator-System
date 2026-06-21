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
      <nav className="sticky top-0 z-30 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200/60 dark:border-slate-700/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="lg:hidden text-slate-600 dark:text-slate-300 hover:text-indigo-600"
              >
                <i className="fas fa-bars text-xl"></i>
              </button>
              <NavLink to="/" className="flex items-center gap-2 group">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center text-white shadow-md">
                  <i className="fas fa-language text-sm"></i>
                </div>
                <span className="font-bold text-lg tracking-tight text-slate-800 dark:text-white">
                  Amh
                  <span className="text-indigo-600 dark:text-indigo-400">
                    ↔
                  </span>
                  Eng
                </span>
              </NavLink>
            </div>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-indigo-600 dark:text-indigo-400"
                        : "text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile sidebar – same as before but with glass effect */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          isSidebarOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
        <div
          className={`absolute left-0 top-0 h-full w-72 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-2xl transform transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-6 border-b border-slate-200/60 dark:border-slate-700/60 flex justify-between items-center">
            <span className="font-bold text-lg">Menu</span>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="p-4 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsSidebarOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
                      : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
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
