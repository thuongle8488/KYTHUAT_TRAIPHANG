
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link } from "react-router-dom";

import HomePage from './pages/HomePage';
import ConceptsPage from './pages/ConceptsPage';
import ProcessPage from './pages/ProcessPage';
import PracticePage from './pages/PracticePage';
import SettingsPage from './pages/SettingsPage';
import ExamplesPage from './pages/ExamplesPage';
import ExercisesPage from './pages/ExercisesPage';
import TutorPage from './pages/TutorPage';
import ToolsPage from './pages/ToolsPage';

const App: React.FC = () => {
  const [darkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <HashRouter>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-500 overflow-x-hidden relative">
        {/* Animated Background Orbs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20 dark:opacity-30">
           <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500 rounded-full blur-[150px] animate-pulse"></div>
           <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600 rounded-full blur-[150px] animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
<header className="sticky top-0 z-20 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border-b border-white/20 dark:border-slate-800/50">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-3">
    <Link
      to="/"
      className="px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm font-bold hover:opacity-90 transition"
    >
      ← Trang chủ
    </Link>

    <div className="font-black">Kỹ thuật Trải Phẳng</div>
  </div>
</header>
        {/* Main Content Area */}
        <main className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12">
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

        {/* Footer info or minimal settings can go here if needed */}
        <footer className="relative z-10 py-8 text-center text-slate-400 text-xs font-bold uppercase tracking-widest opacity-50">
          Hỗ trợ Kỹ thuật & Mẹo giải nhanh © 2025
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;
