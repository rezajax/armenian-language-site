import React, { useState, useEffect } from 'react';

/**
 * Vocabulary page. Loads category data from JSON and allows the user to
 * search and filter words by category. Each entry shows the Armenian
 * spelling, transliteration, English meaning and optional Persian translation.
 */
function Vocabulary() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch vocabulary data on mount
  useEffect(() => {
    fetch('/data/vocabulary.json')
      .then((res) => res.json())
      .then(setCategories)
      .catch((err) => console.error(err));
  }, []);

  // Build list of categories including "All" for no filter
  const allCategories = ['All', ...categories.map((cat) => cat.category)];

  // Compute filtered items based on selected category and search term
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
      <h2 className="text-3xl font-bold mb-4 mt-6">Vocabulary</h2>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map((item, idx) => (
          <div
            key={idx}
            className="border dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800 shadow"
          >
            <div className="text-xl font-semibold">{item.armenian}</div>
            <div className="text-sm italic text-gray-600 dark:text-gray-400">
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
          <div className="col-span-full text-center text-gray-500">
            No results found.
          </div>
        )}
      </div>
    </div>
  );
}

export default Vocabulary;