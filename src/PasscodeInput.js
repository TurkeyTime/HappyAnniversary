// PasscodeInput.js
import React, { useState } from 'react';
import './PasscodeInput.css'; // Import CSS file for styling

function PasscodeInput({ onSubmit }) {
  const [passcode, setPasscode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(passcode);
  };

  return (
    <div className="passcode-input-container">
      <form className="passcode-form" onSubmit={handleSubmit}>
        <h2>Enter the super secret passcode</h2>
        <input
          type="password"
          className="passcode-input-field"
          value={passcode}
          onChange={(e) => setPasscode(e.target.value)}
          placeholder="ENTER IT NOW"
          required
        />
        <button type="submit" className="passcode-submit-button">Submit</button>
      </form>
      <footer>
        Jake Nauman 2024
      </footer>
    </div>
  );
}

export default PasscodeInput;
