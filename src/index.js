import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Layout from './components/Layout'
import Favorites from './components/Favorites'
import SearchResults from './components/SearchResults'

render(
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <Route path='/search' component={SearchResults}></Route>
      <Route path='/favorites' component={Favorites}></Route>
    </Route>
    
  </Router>,
  document.getElementById('root')
);
