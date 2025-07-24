import React, { useState, useEffect } from 'react';

/**
 * Quiz page. Loads an array of multiple‑choice questions from JSON and
 * presents them one at a time. Immediate feedback is provided when the
 * user selects an answer, and a score summary is shown at the end.
 */
function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    fetch('/data/quizzes.json')
      .then((res) => res.json())
      .then(setQuestions)
      .catch((err) => console.error(err));
  }, []);

  const handleAnswer = (index) => {
    if (selected !== null) return;
    const correctIndex = questions[current].answerIndex;
    if (index === correctIndex) {
      setScore((s) => s + 1);
    }
    setSelected(index);
    // After a short delay, move to the next question or finish
    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent((c) => c + 1);
        setSelected(null);
      } else {
        setFinished(true);
      }
    }, 1000);
  };

  const restart = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  };

  if (questions.length === 0) {
    return <div className="p-4">Loading quiz...</div>;
  }

  if (finished) {
    return (
      <div className="max-w-md mx-auto mt-8 text-center space-y-4">
        <h2 className="text-2xl font-bold">Quiz Completed!</h2>
        <p>Your score: {score} / {questions.length}</p>
        <button
          onClick={restart}
          className="bg-primary text-white px-4 py-2 rounded"
        >
          Restart Quiz
        </button>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div className="max-w-md mx-auto mt-8 space-y-6">
      <div className="text-sm text-gray-500 dark:text-gray-400">
        {current + 1} / {questions.length}
      </div>
      <h3 className="text-xl font-semibold">{q.question}</h3>
      <div className="flex flex-col gap-3">
        {q.options.map((option, idx) => {
          const isCorrect = selected !== null && idx === q.answerIndex;
          const isWrong = selected === idx && idx !== q.answerIndex;
          return (
            <button
              key={idx}
              onClick={() => handleAnswer(idx)}
              disabled={selected !== null}
              className={`border rounded px-3 py-2 text-left transition-colors ${
                isCorrect
                  ? 'bg-green-500 text-white border-green-500'
                  : isWrong
                  ? 'bg-red-500 text-white border-red-500'
                  : 'bg-white dark:bg-gray-800 dark:border-gray-700'
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
      {selected !== null && (
        <div className="mt-2 text-sm">
          {selected === q.answerIndex ? (
            <span className="text-green-600">Correct!</span>
          ) : (
            <span className="text-red-600">
              Wrong. Correct answer: {q.options[q.answerIndex]}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

export default Quiz;