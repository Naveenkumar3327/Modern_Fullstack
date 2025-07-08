import React from 'react';
import NavBar from './components/NavBar';
import './Styles/MainPage.css';

function App() {
  return (
    <>
      <NavBar />
      <main className="main-content">
        <section className="hero-section">
          <h1>Welcome to MyApp</h1>
          <p>Discover services, learn more about us, and get in touch!</p>
          <button>Get Started</button>
        </section>
      </main>
    </>
  );
}

export default App;
