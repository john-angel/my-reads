import React, {Component} from 'react'
import BookShelfChanger from './BookShelfChanger'

class Book extends Component {

    onShelfSelected = (shelf) => (this.props.shelfSelected(shelf,this.props.book))
    render(){

        return(
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: this.props.book.imageLinks ? `url(${this.props.book.imageLinks.thumbnail})`:"" }}></div>
                        <BookShelfChanger shelf={this.props.book.shelf} shelfSelected={this.onShelfSelected}></BookShelfChanger>
                    </div>
                    <div className="book-title">{this.props.book.title}</div>
                    <div className="book-authors">{
                        /*If this.props.book.authors is defined it may contain more than 1 author */
                        this.props.book.authors ? this.props.book.authors.reduce((accum, author, currIndex,array) => {return currIndex < array.length - 1 ? accum + author + " - ": accum + author},"") : ""
                        }
                    </div>
                </div>
            </li>
        )
    }


}

export default Book