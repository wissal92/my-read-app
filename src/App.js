import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Library from './pages/Library';
import BookSearch from './pages/BookSearch';
import './App.css';

class BooksApp extends React.Component {

  render() {
    return (
        <Switch className="app">
          <Route exact path='/' component={Library} />
          <Route exact path='/search' component={BookSearch} />
        </Switch>
    )
  }
}

export default BooksApp