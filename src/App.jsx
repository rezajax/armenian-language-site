import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Vocabulary from './components/Vocabulary';
import Phrasebook from './components/Phrasebook';
import Quiz from './components/Quiz';
import Flashcards from './components/Flashcards';
import Grammar from './components/Grammar';
import AdminPanel from './components/AdminPanel';

/**
 * The top‑level component that defines the layout and routes for the application.
 *
 * A dark mode state is managed here and passed down to the NavBar so the user
 * can toggle between light and dark themes. React Router is used to map
 * paths to components.
 */
function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? 'dark' : ''}>
      <NavBar dark={dark} setDark={setDark} />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vocabulary" element={<Vocabulary />} />
          <Route path="/phrasebook" element={<Phrasebook />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/flashcards" element={<Flashcards />} />
          <Route path="/grammar" element={<Grammar />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;