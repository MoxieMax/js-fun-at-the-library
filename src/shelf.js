function shelfBook(book, shelfArray) {
  if (shelfArray.length < 3) {
    shelfArray.unshift(book);
  }
  // , maxLength = Infinity
  // shelfArray.unshift(book);
}

module.exports = {
  shelfBook,
  // unshelfBook,
  // listTitles,
  // searchShelf
};