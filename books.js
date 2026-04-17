//Refactored into Class

// Create book and add to library
let myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    // the constructor...
    this.title = title; // The this value is included here
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

// Render the output into myLibrary
class Libraries {
  render() {
    const display = document.getElementById('library');
    display.innerHTML = ""; // To prevent duplicate copies
    const books = document.querySelectorAll('book');
    books.forEach(book => display.removeChild(book));
    
    let libraryBook = document.querySelector("#library");
    // Go over the myLibrary array and display each book that's added
    
    for (let i = 0; i < myLibrary.length; i++) {
      console.log(myLibrary[i]);

      this.createBook(myLibrary[i]);
    }
  }

  addBookToLibrary() {
    // take params, create a book then store it in the array
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    this.render();

    // Output the finished form
    console.log(newBook);
  }

  // Make book DOM elements to be used in render();
  createBook(item) {
    const library = document.querySelector('#library');
    const bookDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const pageDiv = document.createElement('div');
    const readBtn = document.createElement('button');

    bookDiv.classList.add('book');
    bookDiv.setAttribute('id', myLibrary.indexOf(item));

    titleDiv.textContent = item.title;
    titleDiv.classList.add('title');
    bookDiv.appendChild(titleDiv);

    authorDiv.textContent = item.author;
    authorDiv.classList.add('author');
    bookDiv.appendChild(authorDiv);

    pageDiv.textContent = item.pages;
    pageDiv.classList.add('pages');
    bookDiv.appendChild(pageDiv);

    readBtn.classList.add('readBtn');
    bookDiv.appendChild(readBtn);
    if (item.read===false) {
      readBtn.textContent = "Not read";
      readBtn.style.backgroundColor = "red";
    } else {
      readBtn.textContent = "Read";
      readBtn.style.backgroundColor = "green";
    }

    library.appendChild(bookDiv);

    // Toggle ability to each book read
    readBtn.addEventListener('click', () => {
      item.read = !item.read;
      this.setData();
      this.render();
    });
  }

  // Set Library to be stored in local storage
  setData() {
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
  }


  // To load the saved data back by reading from localStorage and calls render
  loadData() {
    if (localStorage.getItem('myLibrary')) {
      myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
    }
    this.render();
  }

  init() {
    // Make the New Button responsive
    let newBookbtn = document.querySelector("#new-book-btn");

    newBookbtn.addEventListener("click", function () {
      let newBookForm = document.querySelector("#new-book-form");
      newBookForm.style.display = "block";
    })
    // Show the output form
    document.querySelector("#new-book-form").addEventListener("submit", (event) => /* Arrow function*/ {
      // Prevent page refreshing
      event.preventDefault();
      this.addBookToLibrary();
    })

  }

}

const library = new Libraries();
library.loadData(); // Call it when page loads
library.init();