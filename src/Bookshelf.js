import React, {Component} from 'react'
import Book from './Book'

class Bookshelf extends Component {

    render(){
        console.log('Books in', this.props.title, 'bookshelf: ', this.props.books);
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            this.props.books.map(book => (
                                <Book book={book} key={book.id}></Book>
                            ))
                        }
                    </ol>
                </div>
            </div>

        )
    }
}

export default Bookshelf;