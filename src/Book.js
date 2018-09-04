import React, {Component} from 'react'
import BookShelfChanger from './BookShelfChanger'

class Book extends Component {

    render(){
        return(
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})` }}></div>
                        <BookShelfChanger shelf={this.props.book.shelf}></BookShelfChanger>
                    </div>
                    <div className="book-title">{this.props.book.title}</div>
                    {/*TODO Iterate over the authors array*/}
                    <div className="book-authors">{this.props.book.authors[0]}</div>
                </div>
            </li>
        )
    }


}

export default Book