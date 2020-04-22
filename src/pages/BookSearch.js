import React, { Component} from 'react';
import {Link} from 'react-router-dom';

class BookSearch extends Component {
    render(){
        return(
          <div className="search-books">
              <div className="search-books-bar">
                <Link to='/' className="close-search">Close</Link>
                <div className="search-books-input-wrapper">
                  <input type="text" placeholder="Search by title or author" onChange={this.handleChange} value={this.state.query}/>
                </div>
              </div>
            </div>
        )
      }
  }

export default BookSearch;