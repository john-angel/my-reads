import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBooks extends Component {

    state = { books: []}  
  
    onShelfSelected = (shelf,book) => (this.props.shelfSelected(shelf,book))
  
    queryUpdated (event) {
        
        if (event.target.value !== "") {
            let booksFoundCurrentlyReading = this.props.currentlyReading.filter((book) => (
                book.title.toLowerCase().includes(event.target.value.toLowerCase())
            ))

            let booksFoundWantToRead = this.props.wantToRead.filter((book) => (
                book.title.toLowerCase().includes(event.target.value.toLowerCase())
            ))

            let booksFoundRead = this.props.read.filter((book) => (
                book.title.toLowerCase().includes(event.target.value.toLowerCase())
            ))

            let booksFoundInShelves = booksFoundCurrentlyReading.concat(booksFoundWantToRead.concat(booksFoundRead));

            console.log("Books found in shelves: ", booksFoundInShelves);

            BooksAPI.search(event.target.value)
                .then((apiResult) => {
                    
                    const booksFromApi = apiResult.length > 0 ? (
                        console.log("Books found through API: ", apiResult),                  
                        apiResult.filter( bookFromApi => booksFoundInShelves.every( bookInShelf => bookFromApi.id !== bookInShelf.id))                        
                    ) : [];

                    this.setState({ books:  booksFoundInShelves.concat(booksFromApi)})

                })
        }
    }

    render(){
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">
                        Close
                    </Link>
                    <div className="search-books-input-wrapper">
                        {/*
                 NOTES: The search from BooksAPI is limited to a particular set of search terms.
                 You can find these search terms here:
                 https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                 However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                 you don't find a specific author or title. Every search is limited by search terms.
               */}
                        <input type="text" placeholder="Search by title or author" onChange={this.queryUpdated.bind(this)}
/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                    {
                        this.state.books.map(book => (
                            <Book book={book} key={book.id} shelfSelected={this.onShelfSelected}></Book>
                        ))
                    }
                    </ol>
                </div>
            </div>
        )
    }

}

export default SearchBooks