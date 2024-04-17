// App.js
import React, { useState } from 'react';
import PasscodeInput from './PasscodeInput';
import CursorTrail from "./LoveHeartCursor";
import MainScreen from './MainScreen';
import './App.css';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  
  const handlePasscodeSubmit = (passcode) => {
    // Here, you would implement your passcode validation logic
    // For simplicity, let's assume the correct passcode is "1234"
    if (passcode === 'allyissohot') {
      setAuthenticated(true);
    } else {
      alert('Incorrect passcode. Please try again.');
    }
  };

  return (
    <div className="App">
      <CursorTrail />
      {authenticated ? (
        <MainScreen />
      ) : (
        <PasscodeInput onSubmit={handlePasscodeSubmit} />
      )}
    </div>
  );
}

export default App;
