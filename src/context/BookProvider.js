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