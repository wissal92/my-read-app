import React from 'react';
import Loader from 'react-loader-spinner';
import Book from './Book';

const BookShelf = ({books, title, moveBook}) =>{
  return (
    <div className="bookshelf">
       <h2 className="bookshelf-title">{title}</h2>
       <div className="bookshelf-books">
         <ol className="books-grid">
            {books.length === 0 && <Loader type="Rings" color="#c74940" height={100} width={100} timeout={3000}/>}
            {books && books.map(book =>{
                 return <Book key={book.id} book={book} moveBook={moveBook}/>
               })
             }
         </ol>
      </div>
    </div>
  )
}

export default BookShelf;
