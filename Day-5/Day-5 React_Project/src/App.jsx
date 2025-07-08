import React from 'react';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <div className="main-content">
        <h1>Welcome to MyApp</h1>
        <p>This is your main content below the fixed navbar.</p>
      </div>
    </div>
  );
}

export default App;
