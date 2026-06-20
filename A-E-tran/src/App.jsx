import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { TranslationProvider } from "./context/TranslationContext";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <TranslationProvider>
          <AppRoutes />
        </TranslationProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
