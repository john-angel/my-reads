import React from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf';

const ListBooks = (props) => {

    const onShelfSelected = (shelf, book) => (props.shelfSelected(shelf,book))

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <Bookshelf title='Currently Reading' books={props.currentlyReading} shelfSelected={onShelfSelected}></Bookshelf>
                    <Bookshelf title='Want to Read' books={props.wantToRead} shelfSelected={onShelfSelected}></Bookshelf>
                    <Bookshelf title='Read' books={props.read} shelfSelected={onShelfSelected}></Bookshelf>
                </div>
            </div>
            <div className="open-search">
                <Link to='/search'>
                    Search a book
                </Link>
            </div>
        </div>
    )

}

export default ListBooks