let myLibrary = [];
let body = document.getElementsByTagName("body");
let booksContainer = document.getElementsByClassName("booksContainer")[0];
function Book(title, author, pages, flagRead, id){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.flagRead = flagRead;
    this.id = id;
    this.info = function(){
        if(this.flagRead === null || this.flagRead === false ){
           return(`${this.title} by ${this.author}, ${this.pages}, not read yet.`)
        }
        else{
            return(`${this.title} by ${this.author}, ${this.pages}, already read.`)
        }
    }
}

function addBookToLibrary(title, author, pages, flagRead, id) {
  // take params, create a book then store it in the array
  myLibrary.push(new Book(title, author, pages, flagRead, id));
}

function displayBook(myLibrary){
    for (let book of myLibrary){
        //book card creation
        const bookContainer = document.createElement("div");
        bookContainer.classList.add("bookContainer");
        //book title
        const bookTitle = document.createElement("h3");
        bookTitle.innerText = `${book.title}`;
        bookContainer.appendChild(bookTitle);
        //book author
        const bookInfo = document.createElement("p");
        bookInfo.innerText = `${book.author}\n${book.pages}`;
        bookContainer.appendChild(bookInfo);

        booksContainer.appendChild(bookContainer);         
    }
}
addBookToLibrary("1984", "George Orwell", 328, true, crypto.randomUUID());
addBookToLibrary("Il nome della rosa", "Umberto Eco", 512, false, crypto.randomUUID());
addBookToLibrary("Il Signore degli Anelli", "J.R.R. Tolkien", 1216, true, crypto.randomUUID());
addBookToLibrary("Il Signore degli Anelli", "J.R.R. Tolkien", 1216, true, crypto.randomUUID());
addBookToLibrary("1984", "George Orwell", 328, true, crypto.randomUUID());
addBookToLibrary("Il nome della rosa", "Umberto Eco", 512, false, crypto.randomUUID());
addBookToLibrary("Il Signore degli Anelli", "J.R.R. Tolkien", 1216, true, crypto.randomUUID());
addBookToLibrary("Il Signore degli Anelli", "J.R.R. Tolkien", 1216, true, crypto.randomUUID());
displayBook(myLibrary);