import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import * as BooksAPI from './BooksAPI'
import Bookshelf from './Bookshelf';

class BooksApp extends React.Component {
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }
  onShelfSelected = (shelf, book) => {
    console.log('Shelf', shelf, 'selected for book', book.title);
    BooksAPI.update(book,shelf)
      .then((result) => {
        console.log('Result ', result);

        this.setState((currentState) => ({
          currentlyReading: shelf === "currentlyReading" ? currentState.currentlyReading.concat([book]) 
                                                         : book.shelf === "currentlyReading" 
                                                         ? currentState.currentlyReading.filter(bookReading => (bookReading.id !== book.id))
                                                         : currentState.currentlyReading,
          wantToRead: shelf === "wantToRead"  ? currentState.wantToRead.concat([book]) 
                                              : book.shelf === "wantToRead" 
                                              ? currentState.wantToRead.filter(bookReading => (bookReading.id !== book.id))
                                              : currentState.wantToRead,
          read: shelf === "read"  ? currentState.read.concat([book])
                                  : book.shelf === "read"
                                  ? currentState.read.filter(bookReading => (bookReading.id !== book.id))
                                  : currentState.read
        }))

        /*
        
        */
      })
  }

  componentDidMount() {
    console.log('Retrieving books from server');
    BooksAPI.getAll()
      .then((library) => {
        console.log('books', library);
        const books = Object.keys(library).map(book => library[book]);

        const booksInCurrentlyReadingShelf = books.filter(book => book.shelf === 'currentlyReading');
        const booksInWantToReadShelf = books.filter(book => book.shelf === 'wantToRead');
        const booksInReadShelf = books.filter(book => book.shelf === 'read');


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
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <Bookshelf title='Currently Reading' books={this.state.currentlyReading} shelfSelected={this.onShelfSelected}></Bookshelf>
                  <Bookshelf title='Want to Read' books={this.state.wantToRead} shelfSelected={this.onShelfSelected}></Bookshelf>
                  <Bookshelf title='Read' books={this.state.read} shelfSelected={this.onShelfSelected}></Bookshelf>
                </div>
              </div>
              <div className="open-search">
                <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
              </div>
            </div>
          )}
      </div>
    )
  }
}

export default BooksApp
