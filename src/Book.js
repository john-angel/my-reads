import React, {Component} from 'react'
import BookShelfChanger from './BookShelfChanger'

class Book extends Component {

    onShelfSelected = (shelf) => (this.props.shelfSelected(shelf,this.props.book))
    render(){
        console.log('Rendering book ', this.props.book.title, ' from shelf' , this.props.book.shelf ? this.props.book.shelf : 'None');
        return(
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: this.props.book.imageLinks ? `url(${this.props.book.imageLinks.thumbnail})`:"" }}></div>
                        <BookShelfChanger shelf={this.props.book.shelf} shelfSelected={this.onShelfSelected}></BookShelfChanger>
                    </div>
                    <div className="book-title">{this.props.book.title}</div>
                    {/*TODO Iterate over the authors array*/}
                    <div className="book-authors">{this.props.book.authors? this.props.book.authors[0]: ""}</div>
                </div>
            </li>
        )
    }


}

export default Book