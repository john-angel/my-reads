import React, {Component} from 'react'
import Book from './Book'

class Bookshelf extends Component {

           
    onShelfSelected = (shelf,book) => (this.props.shelfSelected(shelf,book))
    
    render(){
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            this.props.books.map(book => (
                                <Book book={book} key={book.id} shelfSelected={this.onShelfSelected}></Book>
                            ))
                        }
                    </ol>
                </div>
            </div>

        )
    }
}

export default Bookshelf;