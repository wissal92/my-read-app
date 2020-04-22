import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {getAll} from '../BooksAPI';
import BookShelf from '../components/BookShelf';

class Library extends Component{
    async componentDidMount(){
        try {
            const books = await getAll();
            this.props.organizeBooks(books);
        } catch (err) {
            console.log(err);
        }
     }
 
    render(){
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <BookShelf title="Currently Reading" books={this.props.currentlyReading} moveBook={this.props.moveBook}/>
                    <BookShelf title="Want to Read" books={this.props.wantToRead} moveBook={this.props.moveBook}/>
                    <BookShelf title="Read" books={this.props.read} moveBook={this.props.moveBook}/>
                    <div className="open-search">
                        <Link to='/search' className='button'>Add a book</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Library;