//SELECTION ITEMS FROM THE DOM
const uploadBtn = document.querySelector(".upload");
const bookBox = document.querySelector(".books-box");
const booksContainer = document.getElementById("kkks");

//UPLOAD BOOKS
const upload = document.querySelector(".upload");
upload.addEventListener("click", function(e){
    e.preventDefault();
    if(confirm("Are You Sure You Want to Upload This Book")){
        var addBook = document.querySelector('input[type="file"]').value;
        addBook = addBook.split("\\").pop();
        
    //creating elements
    const img = document.createElement("img");
    const bookName = document.createElement("p");
    const readDelete = document.createElement("div");
    const read = document.createElement("a");
    const deleteBtn = document.createElement("a");
    const bookBoxc = document.createElement("div");

    //adding class to element
    readDelete.classList = ("Read-delete");
    bookBoxc.classList = ("books-box");
    deleteBtn.classList = ("delete");

    //  14G013285KGR
    //adding content to the created elements
    img.src = "images/551.jpg"
    bookName.innerHTML = addBook; 
    read.innerHTML = "read";
    deleteBtn.innerHTML = "delete";

    //appending Child
    readDelete.appendChild(read);
    readDelete.appendChild(deleteBtn);
    bookBoxc.appendChild(img);
    bookBoxc.appendChild(bookName);
    bookBoxc.appendChild(readDelete);
    booksContainer.appendChild(bookBoxc);
    
    alert("Sucessfully, Uploaded");

    }

    else {
        alert("You Canceled the Upload");
    }
})
const form = document.forms["add-book"]
form.addEventListener("submit", function(event){
    event.preventDefault();
    var addBook = document.querySelector('input[type="file"]').value;
    addBook = addBook.split("\\").pop();
        
    //creating elements
    const img = document.createElement("img");
    const bookName = document.createElement("p");
    const readDelete = document.createElement("div");
    const read = document.createElement("a");
    const deleteBtn = document.createElement("a");
    const bookBoxc = document.createElement("div");

    //adding class to element
    readDelete.classList = ("Read-delete");
    bookBoxc.classList = ("books-box");
    deleteBtn.classList = ("delete");

    //  14G013285KGR
    //adding content to the created elements
    img.src = "images/551.jpg"
    bookName.innerHTML = addBook; 
    read.innerHTML = "read";
    deleteBtn.innerHTML = "delete";

    //appending Child
    readDelete.appendChild(read);
    readDelete.appendChild(deleteBtn);
    bookBoxc.appendChild(img);
    bookBoxc.appendChild(bookName);
    bookBoxc.appendChild(readDelete);
    booksContainer.appendChild(bookBoxc);
    
});


//DELETE BOOK/S
booksContainer.addEventListener("click", function(e){
    const bookBoxc = e.target.parentElement.parentElement;
    if(e.target.className == "delete"){
        if(confirm("Are You Sure You Want to Delete This Book")){
            booksContainer.removeChild(bookBoxc);
            alert("Sucessfully, Deleted");
        }
        else{
            alert("Cancelled");
        }     
    }
});


//READ BOOKS
var readBoosk = document.querySelector('input[type="file"]').src;
var addBook = document.querySelector('input[type="file"]').value;
const readBook = document.querySelector(".read").href = addBook;


//STORE BOOKS IN LOCAL STORAGE
function storeBooks(){
    const booksContainer = document.getElementById("kkks");
    if(booksContainer){
        let storage = JSON.parse(localStorage.getItem('bookBoxc'));
    }
}