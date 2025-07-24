import React, { useState, useEffect } from 'react';

/**
 * Grammar page. Fetches grammar sections from a JSON file and presents
 * them as collapsible panels. Each section includes an explanation and
 * examples that contrast Armenian with English (and sometimes Persian).
 */
function Grammar() {
  const [sections, setSections] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    fetch('/data/grammar.json')
      .then((res) => res.json())
      .then(setSections)
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 mt-6">Grammar</h2>
      <p className="mb-4 text-gray-600 dark:text-gray-400">
        Click on a section to expand and learn more about Armenian grammar.
      </p>
      <div className="space-y-4">
        {sections.map((section, idx) => (
          <div key={idx} className="border dark:border-gray-700 rounded">
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full text-left px-4 py-3 bg-primary/10 dark:bg-primary-dark/20"
            >
              <h3 className="font-semibold">{section.title}</h3>
            </button>
            {openIndex === idx && (
              <div className="p-4 space-y-3 bg-white dark:bg-gray-800">
                <p>{section.explanation}</p>
                {section.examples && section.examples.length > 0 && (
                  <div className="space-y-2">
                    {section.examples.map((ex, i) => (
                      <div key={i} className="border-l-4 border-primary pl-3">
                        {ex.armenian && (
                          <div className="font-medium">{ex.armenian}</div>
                        )}
                        {ex.transliteration && (
                          <div className="italic text-gray-600 dark:text-gray-400">
                            {ex.transliteration}
                          </div>
                        )}
                        {ex.english && <div>{ex.english}</div>}
                        {ex.persian && (
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            {ex.persian}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Grammar;