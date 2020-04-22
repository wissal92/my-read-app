import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import BookShelf from './component/BookShelf';

class Library extends Component{

    render(){
        return (
            <div className="list-books">
               <div className="list-books-title">
                  <h1>MyReads</h1>
               </div>
               <div className="list-books-content">
                   <BookShelf title="Currently Reading" books={this.props.currentlyReading} />
                   <BookShelf title="Want to Read" books={this.props.wantToRead} />
                   <BookShelf title="Read" books={this.props.read} />
                   <div className="open-search">
                        <Link to='/search' className='button'>Add a book</Link>
                    </div>
               </div>
            </div>
        )
    }
}

export default Library;