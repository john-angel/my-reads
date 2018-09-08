import React, {Component} from 'react'
import PropTypes from 'prop-types';

class BookShelfChanger extends Component {

    state = {
        shelf: ''
    }

    componentDidMount() {
        this.setState({shelf: this.props.shelf ? this.props.shelf : "none"})
    }

    onShelfSelected = (event) => {
        this.setState({shelf: event.target.value});
        this.props.shelfSelected(event.target.value)
    }
    render(){
        return(
            <div className="book-shelf-changer">
                <select value={this.state.shelf} onChange={this.onShelfSelected}>
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

BookShelfChanger.propTypes = {
    shelf: PropTypes.string
  };

export default BookShelfChanger