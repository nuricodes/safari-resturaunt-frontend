import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero';
import Items from './components/Items';
import { GlobalStyle } from './globalStyles';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Items />
    </Router>
  );
}

export default App;
