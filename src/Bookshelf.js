import React from 'react'
import Book from './Book'

const Bookshelf = (props) => {
           
    const onShelfSelected = (shelf,book) => (props.shelfSelected(shelf,book))

    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        props.books.map(book => (
                            <Book book={book} key={book.id} shelfSelected={onShelfSelected}></Book>
                        ))
                    }
                </ol>
            </div>
        </div>

    )
}

export default Bookshelf;