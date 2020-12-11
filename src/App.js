import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero';
import { GlobalStyle } from './globalStyles';
import Items from './components/Items'

function App() {
  // state = {
  //   notices: []
  // }
  // componentDidMount(){
  //   this.getItems()
  // }
  // getItems() {
  //   fetch('http://localhost:3000')
  //     .then(res => res.json())
  //     .then(json => console.log(json))
  //     .catch(error => console.error(error))
  // }
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Items />
    </Router>
  );
}

export default App;
