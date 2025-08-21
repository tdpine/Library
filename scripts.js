
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


class Book {
    constructor(title, author, pages, flagRead, id) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.flagRead = flagRead;
        this.id = id;
    }
    info() {
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
        //read status
        const flagRead = document.createElement("input");
        flagRead.type = "checkbox";
        flagRead.id = "readStatusFlag";
        flagRead.setAttribute("data-id", book.id); 
        flagRead.disabled = true;
        flagRead.classList.add("togReadStat");
        flagRead.checked = book.flagRead;
        bookContainer.appendChild(flagRead);
        const readStatLabel = document.createElement("label");
        readStatLabel.htmlFor = "readStatusFlag";
        readStatLabel.textContent = "Read status";

        const divReadStat = document.createElement("div");
        divReadStat.style.display= "grid";
        divReadStat.appendChild(readStatLabel);
        divReadStat.appendChild(flagRead);
        bookContainer.appendChild(divReadStat);
        //delete book from library
        const deleteBookBtn = document.createElement("button");
        deleteBookBtn.classList.add("deleteBook");
        deleteBookBtn.textContent = "Delete book";
        deleteBookBtn.setAttribute("data-id", book.id);
        bookContainer.appendChild(deleteBookBtn);
        //handle read status toggle
        const togReadStat = document.createElement("button");
        togReadStat.classList.add("togReadStatBtn");
        togReadStat.setAttribute("data-id", book.id);
        togReadStat.textContent = "Change read status";
        bookContainer.appendChild(togReadStat);

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
 const eventTarget = event.target;
 if(eventTarget.tagName == "BUTTON" && eventTarget.classList.contains("deleteBook")){
     const delBtn = event.target;
     const bookParent = delBtn.parentElement;
     myLibrary = myLibrary.filter(book => book.id != bookParent.getAttribute("data-id"));
     bookParent.remove();
 }
 else if (eventTarget.tagName == "BUTTON" && eventTarget.classList.contains("togReadStatBtn")){
    const toggleStatBtn = event.target;
    const bookId = toggleStatBtn.getAttribute("data-id");
    const bookIndex = myLibrary.findIndex((book) => book.id == bookId);
    myLibrary[bookIndex].flagRead = !myLibrary[bookIndex].flagRead;
    const chkToggle = document.querySelector(`input[type="checkbox"].togReadStat[data-id="${bookId}"]`);
    chkToggle.checked = myLibrary[bookIndex].flagRead;
 }

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