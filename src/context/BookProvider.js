import React, { Component, createContext } from 'react';

export const BookContext = createContext();

export default class BookProvider extends Component{
   constructor(props){
       super(props);
       this.state = {
           books: [],
           currentlyReading: [],
           wantToRead: [],
           read: [],
           organizeBooks: books => {
               const currentlyReading = books.filter(book => book.shelf === 'currentlyReading');
               const wantToRead = books.filter(book => book.shelf === 'wantToRead');
               const read = books.filter(book => book.shelf === 'read');
               this.setState({books, currentlyReading, wantToRead, read});
           },
           moveBook: (newShelf, updatePlacement) =>{
               const newPlacement = this.state.books.map(book =>{
                const id = updatePlacement[newShelf].find(bookId => bookId === book.id);

                if(id){
                    book.shelf = newShelf;
                 }

                 return book;
            });

            this.state.organizeBooks(newPlacement);
        }
       }

   }

   render(){
       return(
           <BookContext.Provider value={{...this.state}}>
               {this.props.children}
           </BookContext.Provider>
       )
   }
}