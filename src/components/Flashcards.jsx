import React, { useState, useEffect } from 'react';

/**
 * Flashcards page. Combines all vocabulary and phrases into a single list of
 * cards. The front shows the Armenian text and the back displays the
 * transliteration and English meaning. Cards are shuffled on load and can be
 * flipped by clicking. A button advances to the next card.
 */
function Flashcards() {
  const [cards, setCards] = useState([]);
  const [index, setIndex] = useState(0);
  const [showBack, setShowBack] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        const vocab = await fetch('/data/vocabulary.json').then((r) => r.json());
        const phrases = await fetch('/data/phrases.json').then((r) => r.json());
        const vocabCards = vocab.flatMap((cat) =>
          cat.items.map((item) => ({
            front: item.armenian,
            back: `${item.transliteration} — ${item.english}`,
          }))
        );
        const phraseCards = phrases.flatMap((cat) =>
          cat.items.map((item) => ({
            front: item.armenian,
            back: `${item.transliteration} — ${item.english}`,
          }))
        );
        const allCards = [...vocabCards, ...phraseCards];
        // Shuffle cards using Fisher–Yates algorithm
        for (let i = allCards.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [allCards[i], allCards[j]] = [allCards[j], allCards[i]];
        }
        setCards(allCards);
      } catch (err) {
        console.error(err);
      }
    }
    load();
  }, []);

  const nextCard = () => {
    setShowBack(false);
    setIndex((i) => (i + 1) % cards.length);
  };

  if (cards.length === 0) {
    return <div className="p-4">Loading flashcards...</div>;
  }

  const card = cards[index];

  return (
    <div className="flex flex-col items-center mt-8 space-y-4">
      <div
        onClick={() => setShowBack((b) => !b)}
        className="w-80 h-48 sm:w-96 sm:h-56 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow flex items-center justify-center text-2xl sm:text-3xl cursor-pointer select-none transition-colors"
      >
        {showBack ? card.back : card.front}
      </div>
      <button
        onClick={nextCard}
        className="bg-primary text-white px-4 py-2 rounded"
      >
        Next
      </button>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Tap the card to flip it.
      </p>
    </div>
  );
}

export default Flashcards;