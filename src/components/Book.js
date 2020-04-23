import React from 'react';
import {update} from '../BooksAPI';

const Book = ({book, moveBook}) => {

    const handleChange = async (e) =>{
        try {
            const shelf = e.target.value;
            const updatePlacement = await update(book, shelf);
            moveBook(shelf, updatePlacement)
        } catch(err) {
            console.log(err)
        }
    }
    return (
            <li>
                <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks ? book.imageLinks.smallThumbnail : ''}")`}}></div>
                    <div className="book-shelf-changer">
                    <select onChange={handleChange} value={book.shelf}>
                        <option value="move">Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
                </div>
        </li>
    )
}

export default Book;