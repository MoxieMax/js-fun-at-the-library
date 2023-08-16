function createLibrary(libName) {
  return library = {
    name: libName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
}

function addBook(library, book) {
  if (book.genre) {
    if (!library.shelves[book.genre]) {
      library.shelves[book.genre] = [];
    }
    library.shelves[book.genre].push(book);
  }
}


module.exports = {
  createLibrary,
  addBook,
  // checkoutBook,
  // takeStock
};


// 
// function addBook(library, book) {
//   if (book.genre === 'fantasy') {
//     library.shelves.fantasy.push(book);
//   } else if (book.genre === 'fiction') {
//     library.shelves.fantasy.push(book);
//   } else if (book.genre === 'nonFiction') {
//     library.shelves.fantasy.push(book);
//   }
// }