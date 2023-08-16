function shelfBook(book, shelfArray) {
  if (shelfArray.length < 3) {
    shelfArray.unshift(book);
  }
  // , maxLength = Infinity
  // shelfArray.unshift(book);
}

function unshelfBook(bookTitle, shelfArray) {
  var bookIndex = shelfArray.findIndex(book => book.title === bookTitle);
  
  if (bookIndex !== -1) {
    shelfArray.splice(bookIndex, 1);
  }
}

module.exports = {
  shelfBook,
  unshelfBook,
  // listTitles,
  // searchShelf
};