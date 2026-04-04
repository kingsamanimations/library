let myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title; // The this value is included here
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Render the output into myLibrary
function render() {
  let libraryBook = document.querySelector("#library");
  // Go over the myLibrary array and display each book that's added
  for (let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i]);
  }
}

function addBookToLibrary() {
  // take params, create a book then store it in the array
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").value;
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  render();

  // Output the finished form
  console.log(newBook);
}

// Make the New Button responsive
let newBookbtn = document.querySelector("#new-book-btn");

newBookbtn.addEventListener("click", function () {
  let newBookForm = document.querySelector("#new-book-form");
  newBookForm.style.display = "block";
})

// Show the output form
document.querySelector("#new-book-form").addEventListener("submit", function (event) {
  // Prevent page refreshing
  event.preventDefault();
  addBookToLibrary();
})