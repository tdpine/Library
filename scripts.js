let myLibrary = [];
let body = document.getElementsByTagName("body");
let booksContainer = document.getElementsByClassName("booksContainer")[0];
const showButton = document.getElementById("newBookBtn");
const bookDialog = document.getElementById("bookDialog");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const readStatus = document.getElementById("readStatus");
const confirmBtn = bookDialog.querySelector("#confirmBtn");
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
        createBookCard(book);   
    }
}
function createBookCard(book){
    //book card creation
        const bookContainer = document.createElement("div");
        bookContainer.classList.add("bookContainer");
        bookContainer.setAttribute("data-id", book.id);
        //book title
        const bookTitle = document.createElement("h3");
        bookTitle.innerText = `${book.title}`;
        bookContainer.appendChild(bookTitle);
        //book author
        const bookInfo = document.createElement("p");
        bookInfo.innerText = `Author: ${book.author}\n Pages:${book.pages}`;
        bookContainer.appendChild(bookInfo);
        // delete book from library
        const deleteBookBtn = document.createElement("button");
        deleteBookBtn.classList.add("deleteBook");
        deleteBookBtn.textContent = "Delete book";
        deleteBookBtn.setAttribute("data-id", book.id);
        bookContainer.appendChild(deleteBookBtn);
        booksContainer.appendChild(bookContainer);      
}
showButton.addEventListener("click", () => {
  bookDialog.showModal();
});

bookDialog.addEventListener("close", (e) => {
    title.value = "";
    author.value = ""; 
    pages.value = "";  
    readStatus.checked = false; 
});
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault();
  addBookToLibrary(title.value, author.value, pages.value, readStatus.checked, crypto.randomUUID());
  createBookCard(myLibrary[myLibrary.length - 1]);
   
  bookDialog.close();
});
booksContainer.addEventListener("click", (event) => {
 const delBtn = event.target;
 const bookParent = delBtn.parentElement;
 myLibrary = myLibrary.filter(book => book.id != bookParent.getAttribute("data-id"));
 bookParent.remove();
});
addBookToLibrary("1984", "George Orwell", 328, true, crypto.randomUUID());
addBookToLibrary("Il nome della rosa", "Umberto Eco", 512, false, crypto.randomUUID());
addBookToLibrary("Il Signore degli Anelli", "J.R.R. Tolkien", 1216, true, crypto.randomUUID());
addBookToLibrary("Il Signore degli Anelli", "J.R.R. Tolkien", 1216, true, crypto.randomUUID());
addBookToLibrary("1984", "George Orwell", 328, true, crypto.randomUUID());
addBookToLibrary("Il nome della rosa", "Umberto Eco", 512, false, crypto.randomUUID());
addBookToLibrary("Il Signore degli Anelli", "J.R.R. Tolkien", 1216, true, crypto.randomUUID());
addBookToLibrary("Il Signore degli Anelli", "J.R.R. Tolkien", 1216, true, crypto.randomUUID());
displayBook(myLibrary);