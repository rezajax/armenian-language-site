# Learn Armenian – Static React Site

This project is a **mobile‑friendly, modern web application** for learning the Armenian language from beginner level up to approximately A2 proficiency.  It is built with **React** using **Vite** as the bundler and **Tailwind CSS** for styling.  All of the learning content lives in simple JSON files under the `public/data` directory, so it is easy to add new vocabulary, phrases, quiz questions or grammar explanations without writing any React code.

## Features

* **Home page** – A short introduction to the Armenian language with buttons linking to each learning section and a motivational quote.  There is also a dark‑mode toggle in the navigation bar.
* **Vocabulary section** – Displays categorized lists of words.  Each entry shows the Armenian spelling, transliteration, English meaning and an optional Persian translation.  You can filter by category or search across all terms.
* **Phrasebook** – Presents useful phrases grouped by situations such as greetings, shopping or love.  Like the vocabulary page, it supports category filtering and search.
* **Quiz** – A multiple‑choice quiz engine that loads questions from `public/data/quizzes.json`.  It provides immediate feedback and a score summary when finished.
* **Flashcards** – Generates flip‑card style flashcards from all vocabulary and phrase entries.  Cards are shuffled on load.  Click a card to reveal the transliteration and English meaning; press **Next** to advance.
* **Grammar** – Expandable panels explaining key points of Armenian grammar with examples.  The grammar sections compare Armenian with English (and sometimes Persian) based on linguistic sources【601007166987671†L52-L61】【601007166987671†L65-L77】.
* **Admin panel placeholder** – A simple page that explains how to edit the JSON files.  There is no back‑end; all changes to content are made by editing files in the `public/data` folder.

## Project structure

```
armenian-language-site/
├── index.html        – HTML entry point for Vite/React
├── package.json       – npm manifest with dependencies and scripts
├── vite.config.js     – Vite configuration (React plugin and server settings)
├── tailwind.config.js – Tailwind theme and colour settings
├── postcss.config.js  – PostCSS configuration for Tailwind
├── src/
│   ├── App.jsx        – Defines routes and dark mode
│   ├── main.jsx       – Mounts React app and router
│   ├── index.css      – Tailwind directives and global styles
│   └── components/    – Modular UI components (NavBar, Home, Vocabulary, etc.)
├── public/
│   └── data/          – JSON files used as a static “database”
│       ├── vocabulary.json – Categories of vocabulary items
│       ├── phrases.json    – Categories of phrases
│       ├── quizzes.json    – Quiz questions
│       └── grammar.json    – Grammar sections
└── README.md          – This file
```

### Data file formats

Each JSON file in `public/data` has a simple structure:

* **Vocabulary / Phrases** – An array of category objects.  Each category has a `category` name and an array of `items`.  Each item provides:
  * `armenian` – the word or phrase in Armenian script.
  * `transliteration` – Latin transliteration.
  * `english` – English translation.
  * `persian` – (optional) Persian translation.

  ```json
  [
    {
      "category": "Greetings",
      "items": [
        { "armenian": "Բարև", "transliteration": "Barev", "english": "Hello", "persian": "سلام" },
        …
      ]
    }
  ]
  ```

* **Quizzes** – An array of question objects.  Each question has a `question` string, an array of `options`, and an `answerIndex` indicating the index of the correct answer in the options array.

  ```json
  [
    {
      "question": "What does ‘Բարև’ mean?",
      "options": ["Hello", "Goodbye", "Please", "Thank you"],
      "answerIndex": 0
    }
  ]
  ```

* **Grammar** – An array of sections.  Each section has a `title`, an `explanation` (which may include references to differences with English or Persian), and an optional array of `examples`.  Each example can provide Armenian, transliteration, English and Persian fields.

  ```json
  [
    {
      "title": "Plural formation",
      "explanation": "Armenian forms the plural by adding -er or -ner depending on syllable count.",
      "examples": [ { "armenian": "օր → օրեր", "transliteration": "or → orer", "english": "day → days" } ]
    }
  ]
  ```

## Running locally

1. Install dependencies (Node 14+ is recommended):

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

   Vite will open the app in your browser at [`http://localhost:5173`](http://localhost:5173).  Hot module reloading is enabled, so changes you make to components or data files will refresh automatically.

3. When you are ready to publish, build the optimized static files:

   ```bash
   npm run build
   ```

   The compiled site will be output to the `dist` folder.  You can deploy the contents of `dist` to any static hosting service such as GitHub Pages or Vercel.

## Adding or editing content

* **Edit vocabulary or phrases** – Open `public/data/vocabulary.json` or `phrases.json` in a text editor.  Follow the existing structure to add new categories or items.  Save the file and refresh the browser to see your changes.
* **Add quiz questions** – Append a new object to `quizzes.json` with your question text, possible answers and the index of the correct answer.
* **Update grammar explanations** – Add a new section to `grammar.json` with a title, explanation text and an array of examples.  You can include differences between Armenian and English/Persian grammar; the grammar page renders Markdown‑style italic and bold formatting.

If you add new files or adjust the directory structure, be sure to update the import paths in the React components accordingly.

## Credits and sources

The vocabulary and phrases included in this project come from publicly available Armenian language resources.  Basic conversation and tourist vocabulary were taken from a table of words and numbers on an Envoy Tours page【371325472253528†L69-L144】.  Common shopping phrases such as **inch arje?** (“how much does it cost?”) and **verjin ginn e?** (“is that the final price?”) were described in a travel article about Armenian phrases【970167560390725†L90-L137】.  Love words and idiomatic expressions (e.g. **Jan**, **Tsavt tanem**, **Achqis luys**) also come from the same article【970167560390725†L139-L166】.  Grammar explanations and examples draw on a comprehensive Armenian grammar guide【601007166987671†L52-L61】【601007166987671†L65-L77】【601007166987671†L100-L117】【601007166987671†L124-L141】【601007166987671†L147-L185】【601007166987671†L189-L195】【601007166987671†L199-L213】【601007166987671†L229-L236】 and a description of Persian articles【15005834654091†L204-L227】 to compare features with English and Persian.

Enjoy learning Armenian, and feel free to contribute new content!