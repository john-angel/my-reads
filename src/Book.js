import React from 'react'
import BookShelfChanger from './BookShelfChanger'

const Book = (props) => {

    const onShelfSelected = (shelf) => (props.shelfSelected(shelf,props.book))

    return(
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: props.book.imageLinks ? `url(${props.book.imageLinks.thumbnail})`:"" }}></div>
                    <BookShelfChanger shelf={props.book.shelf} shelfSelected={onShelfSelected}></BookShelfChanger>
                </div>
                <div className="book-title">{props.book.title}</div>
                <div className="book-authors">{
                    /*If props.book.authors is defined it may contain more than 1 author */
                    props.book.authors ? props.book.authors.reduce((accum, author, currIndex,array) => {return currIndex < array.length - 1 ? accum + author + " - ": accum + author},"") : ""
                    }
                </div>
            </div>
        </li>
    )
    

}

export default Book