import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Home page component. Provides a short introduction to the site and
 * encourages the user to jump into one of the learning sections. A
 * motivational phrase is animated to draw attention.
 */
function Home() {
  return (
    <div className="max-w-3xl mx-auto text-center space-y-8">
      <h1 className="text-4xl sm:text-5xl font-extrabold mt-12">
        Learn Armenian the Fun Way
      </h1>
      <p className="text-lg sm:text-xl">
        Start from zero and build your way to A2 proficiency with interactive
        vocabulary lists, phrasebooks, quizzes, flashcards and simple grammar
        explanations.
      </p>
      <div className="text-2xl sm:text-3xl italic text-primary animate-pulse">
        «Բարև» means “Hello”
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <Link
          to="/vocabulary"
          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark"
        >
          Vocabulary
        </Link>
        <Link
          to="/phrasebook"
          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark"
        >
          Phrasebook
        </Link>
        <Link
          to="/quiz"
          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark"
        >
          Quiz
        </Link>
        <Link
          to="/flashcards"
          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark"
        >
          Flashcards
        </Link>
        <Link
          to="/grammar"
          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark"
        >
          Grammar
        </Link>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Designed with ❤️ using React and Tailwind CSS.
      </p>
    </div>
  );
}

export default Home;