import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Provider, {BookContext} from './context/BookProvider';
import Library from './pages/Library';
import BookSearch from './pages/BookSearch';
import './App.css';

class BooksApp extends React.Component {

  render() {
    return (
      <Provider>
        <Switch className="app">
          <Route exact path='/'  render={() => <BookContext.Consumer>{context => <Library {...context} />} </BookContext.Consumer>} />
          <Route exact path='/search'  render={() => <BookContext.Consumer>{context => <BookSearch {...context}/>}  </BookContext.Consumer>} />
        </Switch>
      </Provider>
    )
  }
}

export default BooksApp