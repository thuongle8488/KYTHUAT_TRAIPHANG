import React, { useEffect, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ConceptsPage from "./pages/ConceptsPage";
import ProcessPage from "./pages/ProcessPage";
import PracticePage from "./pages/PracticePage";
import SettingsPage from "./pages/SettingsPage";
import ExamplesPage from "./pages/ExamplesPage";
import ExercisesPage from "./pages/ExercisesPage";
import TutorPage from "./pages/TutorPage";
import ToolsPage from "./pages/ToolsPage";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <HashRouter>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-500">
        {/* background orbs (giữ lại cho đẹp) */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20 dark:opacity-40">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500 rounded-full blur-[120px] animate-pulse" />
          <div
            className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600 rounded-full blur-[120px] animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>

        {/* top bar đơn giản */}
        <div className="sticky top-0 z-20 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border-b border-white/20 dark:border-slate-800/50">
          <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
            <div>
              <div className="font-black text-lg">Stars and Bars và Khoảng trống</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Menu dạng thẻ</div>
            </div>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm font-bold"
            >
              {darkMode ? "Sáng" : "Tối"}
            </button>
          </div>
        </div>

        <main className="relative z-10 max-w-md mx-auto px-4 py-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/concepts" element={<ConceptsPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/examples" element={<ExamplesPage />} />
            <Route path="/exercises" element={<ExercisesPage />} />
            <Route path="/tools" element={<ToolsPage />} />
            <Route path="/practice" element={<PracticePage />} />
            <Route path="/tutor" element={<TutorPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
};

export default App;
