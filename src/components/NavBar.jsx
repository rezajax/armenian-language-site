import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Navigation items with emoji icons for each section. If you add new
// sections, append them here to have them appear in the navigation bar.
const navItems = [
  { to: '/', label: '🏠 Home' },
  { to: '/vocabulary', label: '📚 Vocabulary' },
  { to: '/phrasebook', label: '🧠 Phrasebook' },
  { to: '/quiz', label: '🧪 Quiz' },
  { to: '/flashcards', label: '🧩 Flashcards' },
  { to: '/grammar', label: '📝 Grammar' },
  { to: '/admin', label: '👤 Admin' },
];

/**
 * Navigation bar component. It displays links to each major section and a button
 * to toggle dark mode. The current route is highlighted to help the user know
 * where they are in the app.
 */
function NavBar({ dark, setDark }) {
  const location = useLocation();
  return (
    <nav className="bg-primary text-white px-4 py-3 flex flex-wrap items-center justify-between">
      <Link to="/" className="font-bold text-lg">Learn Armenian</Link>
      <div className="flex flex-wrap gap-3">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`hover:underline ${location.pathname === item.to ? 'font-semibold underline' : ''}`}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <button
        onClick={() => setDark(!dark)}
        aria-label="Toggle dark mode"
        className="ml-auto text-2xl"
      >
        {dark ? '🌞' : '🌙'}
      </button>
    </nav>
  );
}

export default NavBar;