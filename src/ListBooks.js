import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf';

class ListBooks extends Component {

    onShelfSelected = (shelf, book) => (this.props.shelfSelected(shelf,book))

    render(){
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Bookshelf title='Currently Reading' books={this.props.currentlyReading} shelfSelected={this.onShelfSelected}></Bookshelf>
                        <Bookshelf title='Want to Read' books={this.props.wantToRead} shelfSelected={this.onShelfSelected}></Bookshelf>
                        <Bookshelf title='Read' books={this.props.read} shelfSelected={this.onShelfSelected}></Bookshelf>
                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search'>
                        Search a book
                    </Link>
                    {/*<a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>*/}
                </div>
            </div>
        )
    }
}

export default ListBooks