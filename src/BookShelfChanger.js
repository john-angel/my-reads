import React, {Component} from 'react'

class BookShelfChanger extends Component {

    onShelfSelected = (event) => (this.props.shelfSelected(event.target.value))
    //TODO: The value of select has to be managed through state. https://reactjs.org/docs/forms.html    
    render(){
        return(
            <div className="book-shelf-changer">
                <select value={this.props.shelf ? this.props.shelf : "none"} onChange={this.onShelfSelected}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>                                                              
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default BookShelfChanger