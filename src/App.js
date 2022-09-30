import React from 'react'
import './App.scss';
import { Hero, ProjectShowcase } from './containers';
import { Navbar } from './components';
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ProjectShowcase />
    </div>
  )
}

export default App