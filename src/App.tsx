import React, { useState } from 'react';
import './App.css';
import Table from './Table'; // Ensure the import path is correct

const App: React.FC = () => {
  const [startNew, setStartNew] = useState(false);

  const handleStartNew = () => {
    setStartNew(true);
  };

  return (
    <div className="App">
      <button className="start-button" onClick={handleStartNew}>
        Start New
      </button>
      {startNew && <Table />}
    </div>
  );
}

export default App;
