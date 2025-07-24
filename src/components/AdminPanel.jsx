import React from 'react';

/**
 * Admin panel placeholder. Because this is a static site with no backend,
 * editing the JSON files in the public/data folder is the current way to
 * update content. This component explains how the data is structured and
 * where to make changes. Developers can extend this into a fully
 * functional editor by adding form components and persisting changes to
 * a backend service or local storage.
 */
function AdminPanel() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4 mt-6">Admin Panel</h2>
      <p className="mb-2">
        This site is powered entirely by static JSON files stored under
        <code>public/data</code>. To add or edit vocabulary, phrases, quiz
        questions or grammar explanations, open those files in your text editor
        and modify them. Each category contains an array of entries with
        properties such as <code>armenian</code>, <code>transliteration</code>,
        <code>english</code> and optional <code>persian</code> fields. Once you
        rebuild and redeploy the site, your changes will appear automatically.
      </p>
      <p>
        For a real production application you could replace this page with a
        form‑based interface that writes to a database or content API. Until
        then, editing the JSON files directly is the simplest approach.
      </p>
    </div>
  );
}

export default AdminPanel;