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

module.exports = {
  createLibrary,
  // addBook,
  // checkoutBook,
  // takeStock
};