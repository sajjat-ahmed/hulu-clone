import React from 'react'
import './App.css';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav';
import Results from './components/Results/Results';

function App() {
  return (
    <div className="app">
      <Header />

      <Nav />

      <Results />
    </div>
  )
}

export default App
