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

function checkoutBook(library, bookTitle) {
  // Iterate through all shelves in the library
  for (const genre in library.shelves) {
    if (library.shelves.hasOwnProperty(genre)) {
      const shelf = library.shelves[genre];
      
      // Find the index of the book on the shelf
      const bookIndex = shelf.findIndex(item => item.title === bookTitle);

      // If the book is found on the shelf, remove it
      if (bookIndex !== -1) {
        shelf.splice(bookIndex, 1);
        return `You have now checked out ${bookTitle} from the ${library.name}.`; // Book successfully checked out
      }
    }
  }

  return false; // Book not found in any shelf
}



module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  // takeStock
};


//  // original addBook function
// function addBook(library, book) {
//   if (book.genre === 'fantasy') {
//     library.shelves.fantasy.push(book);
//   } else if (book.genre === 'fiction') {
//     library.shelves.fantasy.push(book);
//   } else if (book.genre === 'nonFiction') {
//     library.shelves.fantasy.push(book);
//   }
// }