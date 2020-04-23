import React, { Component} from 'react';
import {Link} from 'react-router-dom';
import {search} from '../BooksAPI';
import Book from '../components/Book';

class BookSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {query: '', books: []};
    }

    handleChange = async e =>{
      try{
          const query = e.target.value;
          this.setState({query});

          if(query.trim()){
      
           const searchResults = await search(query);

            if(searchResults.error){
              this.setState({books: []})
            } else {
              this.setState({books: searchResults})
            }

          } else {
            this.setState({books: []})
          }
      } catch(err) {
        console.log(err)
      }
    }

    render(){
        return(
          <div className="search-books">
              <div className="search-books-bar">
                <Link to='/' className="close-search">Close</Link>
                <div className="search-books-input-wrapper">
                  <input type="text" placeholder="Search by title or author" onChange={this.handleChange} value={this.state.query}/>
                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid">
                  {this.state.books.length ? this.state.books.map(book => {
                    const newShelf = this.props.books.filter(changed => changed.id === book.id);
                    if(newShelf){
                      book.shelf = newShelf.shelf;
                    } else {
                      book.shelf = "none";
                    }

                    return <Book key={book.id} book={book} moveBook={this.props.moveBook}/>
                  }) : (<h1>No results</h1>)}
                </ol>
              </div>
            </div>
        )
    }
}

export default BookSearch;