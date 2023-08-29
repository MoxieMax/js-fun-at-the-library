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

  return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}.`; // Book not found in any shelf
}

function takeStock(library, shelfType = 'all') {
  if (shelfType === 'all') {
    let totalBookCount = 0;
    for (const genre in library.shelves) {
      if (library.shelves.hasOwnProperty(genre)) {
        totalBookCount += library.shelves[genre].length;
      }
    }
    
    return `There are a total of ${totalBookCount} books at the ${library.name}.`
  } else if (library.shelves.hasOwnProperty(shelfType)) {
    const shelf = library.shelves[shelfType];
    const bookCount = shelf.length;
    return `There are a total of ${bookCount} ${shelfType} books at the ${library.name}.`
  } else {
    `The ${shelfType} shelf does not exist at the ${library.name}.`
  }
  
  // if (library.shelves.hasOwnProperty(shelfType)){
  //   const shelf = library.shelves[shelfType];
  //   const bookCount = shelf.length;
  //   return `There are a total of ${bookCount} ${shelfType} books at the ${library.name}.`
  // }
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
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