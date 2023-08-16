function createTitle(title) {
  return "The " + title;
}

function buildMainCharacter(name, age, pronouns) {
  return character = {
    name: name,
    age: age,
    pronouns: pronouns
  }
}

function saveReview(review, reviewsArray) {
  if (!reviewsArray.includes(review)) {
    reviewsArray.push(review);
  }
}

function calculatePageCount(bookTitle) {
  var numberOfLetters = bookTitle.length;
  return numberOfLetters * 20
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  // writeBook,
  // editBook
}