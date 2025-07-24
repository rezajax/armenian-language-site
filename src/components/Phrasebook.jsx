import React, { useState, useEffect } from 'react';

/**
 * Phrasebook page. Loads phrase data from JSON and lets the user filter
 * by category or search for a specific word or translation. Each entry
 * displays the Armenian phrase, its transliteration, and translations.
 */
function Phrasebook() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('/data/phrases.json')
      .then((res) => res.json())
      .then(setCategories)
      .catch((err) => console.error(err));
  }, []);

  const allCategories = ['All', ...categories.map((cat) => cat.category)];

  const filteredItems = categories
    .filter(
      (cat) => selectedCategory === 'All' || cat.category === selectedCategory
    )
    .flatMap((cat) => cat.items)
    .filter((item) => {
      const term = searchTerm.toLowerCase();
      return (
        item.armenian.toLowerCase().includes(term) ||
        item.transliteration.toLowerCase().includes(term) ||
        item.english.toLowerCase().includes(term) ||
        (item.persian && item.persian.toLowerCase().includes(term))
      );
    });

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 mt-6">Phrasebook</h2>
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border dark:border-gray-600 rounded px-3 py-2"
        >
          {allCategories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border dark:border-gray-600 rounded px-3 py-2 flex-1"
        />
      </div>
      <div className="space-y-4">
        {filteredItems.map((item, idx) => (
          <div
            key={idx}
            className="border dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800 shadow"
          >
            <div className="text-lg font-semibold">{item.armenian}</div>
            <div className="italic text-gray-600 dark:text-gray-400">
              {item.transliteration}
            </div>
            <div className="mt-1">{item.english}</div>
            {item.persian && (
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {item.persian}
              </div>
            )}
          </div>
        ))}
        {filteredItems.length === 0 && (
          <div className="text-center text-gray-500">No results found.</div>
        )}
      </div>
    </div>
  );
}

export default Phrasebook;