import React from 'react';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
     <HomePage addNote={alert} />
    </div>
  );
}

export default App;
