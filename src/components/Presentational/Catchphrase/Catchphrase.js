import React from 'react';
import './Catchphrase.css';

export default function Catchphrase({
  setCatchphrases,
  setCatchphrase,
  catchphrase,
  catchphrases,
}) {
  const saveCatchphrase = () => {
    setCatchphrases((prevState) => [...prevState, catchphrase]);
    setCatchphrase('');
  };
  return (
    <div className="catchphrase">
      <label>
        Add a catch phrase
        <input
          id="catchphrase-input"
          value={catchphrase}
          onChange={(e) => setCatchphrase(e.target.value)}
        />
        <button id="catchphrase-button" onClick={saveCatchphrase}>
          Add
        </button>
      </label>
      <ul>
        {catchphrases.map((text) => (
          <li key={text}> {text} </li>
        ))}
      </ul>
    </div>
  );
}
