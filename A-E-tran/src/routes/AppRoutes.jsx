import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Translator from "../pages/Translator";
import Dictionary from "../pages/Dictionary";
import PhraseBook from "../pages/PhraseBook";
import History from "../pages/History";
import Favorites from "../pages/Favorites";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow page-transition">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/translator" element={<Translator />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/phrasebook" element={<PhraseBook />} />
          <Route path="/history" element={<History />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default AppRoutes;
