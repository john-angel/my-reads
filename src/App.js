import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks';

class BooksApp extends React.Component {
  state = { 
    currentlyReading: [],
    wantToRead: [],
    read: []
  }
  onShelfSelected = (shelf, book) => {
    BooksAPI.update(book,shelf)
      .then((result) => {

        let newBook = Object.assign({},book);
        newBook.shelf = shelf;

        this.setState((currentState) => ({
          currentlyReading: shelf === "currentlyReading" ? currentState.currentlyReading.concat([newBook]) 
                                                         : book.shelf === "currentlyReading" 
                                                         ? currentState.currentlyReading.filter(bookReading => (bookReading.id !== book.id))
                                                         : currentState.currentlyReading,
          wantToRead: shelf === "wantToRead"  ? currentState.wantToRead.concat([newBook]) 
                                              : book.shelf === "wantToRead" 
                                              ? currentState.wantToRead.filter(bookReading => (bookReading.id !== book.id))
                                              : currentState.wantToRead,
          read: shelf === "read"  ? currentState.read.concat([newBook])
                                  : book.shelf === "read"
                                  ? currentState.read.filter(bookReading => (bookReading.id !== book.id))
                                  : currentState.read
        }))
      })
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((library) => {
        const books = Object.keys(library).map(book => library[book]);
        console.log('All Books', books);


        const booksInCurrentlyReadingShelf = books.filter(book => book.shelf === 'currentlyReading');
        const booksInWantToReadShelf = books.filter(book => book.shelf === 'wantToRead');
        const booksInReadShelf = books.filter(book => book.shelf === 'read');

        const booksInNoneShelf = books.filter(book => book.shelf === 'none');
        console.log('Books with no shelf ', booksInNoneShelf);


        this.setState({
          currentlyReading: booksInCurrentlyReadingShelf,
          wantToRead: booksInWantToReadShelf,
          read: booksInReadShelf
        });


      })
  }

  
  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks  currentlyReading={this.state.currentlyReading} 
                      wantToRead={this.state.wantToRead} 
                      read={this.state.read} 
                      shelfSelected={this.onShelfSelected}
          >
          </ListBooks>
        )}
        >
        </Route>
        <Route exact path='/search' render={() => (
          <SearchBooks  currentlyReading={this.state.currentlyReading} 
                        wantToRead={this.state.wantToRead} 
                        read={this.state.read} 
          >
          </SearchBooks>
        )}
        >
        </Route>
      </div>
    )
  }
}

export default BooksApp
