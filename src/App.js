import "./App.css";
import React from "react";
import LandingPage from "./pages/landingPage";
import { I18nextProvider } from "react-i18next";
import i18n from "./lang/i18n";

function App() {
  return (
    <div className="flex flex-col h-[775vh] bg-slate-300 ">
      <I18nextProvider i18n={i18n}>
        <LandingPage />
      </I18nextProvider>
    </div>
  );
}

export default App;
