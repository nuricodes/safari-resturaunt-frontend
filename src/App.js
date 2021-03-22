import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { GlobalStyle } from './globalStyles';
import ReviewItem from './components/ReviewItem/ReviewItem';
import Hero from './components/Hero';
import Items from './components/Items';


function App() {

  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Hero} />
        <Route exact path="/items" component={Items} />
        <Route path="/items/:slug" component={ReviewItem} />
      </Switch>
    </Router>
  );
}

export default App;
