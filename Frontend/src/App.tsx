import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import TinderCards from './components/TinderCards/TinderCards';

function App() {
  return (
    <div className="App">
      <Header />
      <TinderCards />
    </div>
  );
}

export default App;
