MyReads is a bookshelf app built to categorize books on three different shelves: 
- “Currently reading”
- “Want to Read”
- “Read”

Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there. 

At the bottom right corner of the screen you will find a link to the search page that allows you to find books to add to your library. Just the type the name of the Book, once the results are displayed click the book control and select the shelf where you want to put it. Easy!!

You will be able to see all your books in the main page of the app.

Be aware that the search feature of this app is supported by a backend API that uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results. 

To install and run the project just go to the root path of the repository and type:

* run npm install
* run npm start

You should be able to see the application running in your default browser.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
