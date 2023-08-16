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

function listTitles(shelfArray) {
  let arrayLength = shelfArray.length;
  let titles = "";

  for (let i = 0; i < arrayLength; i++) {
    titles += shelfArray[i].title;
    if (i !== arrayLength - 1) {
      titles += ", ";
    }
  }

  return titles;
}

function searchShelf(shelfArray, bookTitle) {
  var bookIndex = shelfArray.findIndex(book => book.title === bookTitle);
  return bookIndex !== -1;
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};