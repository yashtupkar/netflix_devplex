import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className="netflix-app min-h-screen bg-black text-white">
      <div className="relative">
        <Header />
        <Hero />
      </div>
    </div>
  );
}

export default App;