const defaultBooks = [
    {
        id: 1,
        image: "./assets/1.webp",
        title: "Atomic Habits",
        author: "James Clear",
        category: "Self-Help",
        year: 2018,
        isbn: "9780735211292",
        available: true
    },
    {
        id: 2,
        image: "./assets/2.webp",
        title: "The Alchemist",
        author: "Paulo Coelho",
        category: "Fiction",
        year: 1988,
        isbn: "9780062315007",
        available: true
    },
    {
        id: 3,
        image: "./assets/3.webp",
        title: "Rich Dad Poor Dad",
        author: "Robert T. Kiyosaki",
        category: "Finance",
        year: 1997,
        isbn: "9781612680194",
        available: false
    },
    {
        id: 4,
        image: "./assets/4.webp",
        title: "Ikigai",
        author: "Héctor García and Francesc Miralles",
        category: "Personal Development",
        year: 2016,
        isbn: "9780143130727",
        available: true
    },
    {
        id: 5,
        image: "./assets/5.webp",
        title: "The Psychology of Money",
        author: "Morgan Housel",
        category: "Finance",
        year: 2020,
        isbn: "9780857197689",
        available: false
    },
    {
        id: 6,
        image: "./assets/6.webp",
        title: "Wings of Fire",
        author: "A. P. J. Abdul Kalam",
        category: "Autobiography",
        year: 1999,
        isbn: "9788173711466",
        available: true
    }
];

// LOADING ANY SAVED DATA
const savedBooks = localStorage.getItem("books");

// LOADING BOOKS IF MODIFIED THAN DEFAULT DATA
const books = savedBooks
    ? JSON.parse(savedBooks)
    : defaultBooks;



// SAVE TO LOCALSTORAGE
function saveBooks() {
    localStorage.setItem("books", JSON.stringify(books));
}

const genres = ["Fiction", "Self-Help", "Finance", "Personal Development", "Autobiography", "Science", "History", "Technology"];

const bookSection = document.getElementById("bookSection");
const searchInput = document.getElementById("search");
const genreCategory = document.getElementById("genreCategory");

const genreSelect = document.getElementById("genre");




// ============================================
// --| RENDERING FUNCTINO |--------------------
// ============================================

// Rendering the options in select tag 
genreSelect.innerHTML = genres.map(genre => `
    <option value="${genre}">${genre}</option>
`).join("");

// Redering the options in filters 
genreCategory.innerHTML = `<option value="All">All</option>` + genres.map(genre => `
    <option value="${genre}">${genre}</option>
`).join("");





function renderBooks() {
    // Getting the value
    const searchValue = searchInput.value.toLowerCase();
    const selectedGenre = genreCategory.value;


    // Filter array data though condition
    const filteredBooks = books.filter(book => {
        const matchSearch = book.title.toLowerCase().includes(searchValue);

        const matchCategory = selectedGenre === "All" || book.category === selectedGenre;

        return matchSearch && matchCategory;
    })


    bookSection.innerHTML = filteredBooks.map(book => `
        <div class="card" data-id="${book.id}">
            <div class="book-cover" style="--cover: url('${book.image}')">
                <img src="${book.image}" alt="${book.title}">
            </div>

            <div class="info">
                <h3>${book.title}</h3>
                <p class="author">${book.author}</p>
                <p>${book.category}, ${book.year}</p>
                <p>ISBN: ${book.isbn}</p>

                <p class="tag ${book.available ? "" : "red"}">
                    ${book.available ? "Available" : "Borrowed"}
                </p>

                <div class="row">
                    <button class="pry" data-action="status" onclick="updateBookStatus(${book.id})">
                        ${book.available ? "Borrow" : "Return"}
                    </button>
                    <button data-action="edit" onclick="editBook(${book.id})">Edit</button>
                    <button class="danger" onclick="deleteBook(${book.id})">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    `).join("");


    if (filteredBooks.length === 0) {
        bookSection.innerHTML = "<p>No books found.</p>";
    }
}


// ============================================
// --| INPUT and SEARCH FUNCTIONS |----------------------
// ============================================

// Render while Searching
searchInput.addEventListener("input", renderBooks);

// Filtering books by category
genreCategory.addEventListener("change", renderBooks);















// ============================================
// --| FORM HANDLING FUNCTINO |----------------
// ============================================

const bookDialog = document.getElementById("bookDialog");
const bookForm = document.getElementById("bookForm");
const dialogTitle = document.getElementById("dialogTitle");

let editingBookId = null;


// OPEN ADD BOOK FORM --------
function openAddBook() {
    editingBookId = null;
    bookForm.reset();
    dialogTitle.textContent = "Add Book";
    bookDialog.showModal();
    renderBooks()
}


// HANDLE ADD BOOK AND EDIT BOOK FORM --------------------------
bookForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Getting data values
    const bookData = {
        image: document.getElementById("cover").value,
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        category: document.getElementById("genre").value,
        year: Number(document.getElementById("year").value),
        isbn: document.getElementById("isbn").value
    };

    // Check for empty fields
    if (!bookData.image || !bookData.title || !bookData.author || !bookData.category || !bookData.isbn || !bookData.year || bookData.year < 1
    ) {
        alert("Please fill in all fields correctly.");
        return;
    }

    // For editing
    if (editingBookId !== null) {
        const book = books.find(book => book.id === editingBookId);

        if (book) {
            Object.assign(book, bookData);
        }

        editingBookId = null;
    }
    else {
        addBook(bookData);
    }
    bookForm.reset();
    bookDialog.close();
    saveBooks();
    renderBooks();
});

function closeBook() {
    bookDialog.close();
}



// EDIT BOOK DATA USING ID -------------------------------------------
function editBook(id) {
    const book = books.find(book => book.id === id);

    if (!book) return;

    document.getElementById("cover").value = book.image;
    document.getElementById("title").value = book.title;
    document.getElementById("author").value = book.author;
    document.getElementById("genre").value = book.category;
    document.getElementById("year").value = book.year;
    document.getElementById("isbn").value = book.isbn;

    editingBookId = id;

    dialogTitle.textContent = "Edit Book";
    bookDialog.showModal();
}



// ADD NEW BOOK USEING ID ----------------------------------
function addBook(bookData) {
    const newBook = {
        id: books.length
            ? Math.max(...books.map(book => book.id)) + 1
            : 1,
        ...bookData,
        available: true
    };

    books.push(newBook);
}



// UPDATE BOOK AVAILABILITY USING ID ------------
function updateBookStatus(id) {
    const book = books.find(book => book.id === id);
    if (!book) return;
    book.available = !book.available;
    saveBooks();
    renderBooks();
}



// DELETING THE BOOK =====================================-------------
const deleteDialog = document.getElementById("deleteDialog");
const cancelDelete = document.getElementById("cancelDelete");
const confirmDelete = document.getElementById("confirmDelete");

let deletingBookId = null;

function deleteBook(id) {
    deletingBookId = id;
    deleteDialog.showModal();
}

cancelDelete.addEventListener("click", () => {
    deleteDialog.close();
    deletingBookId = null;
});

confirmDelete.addEventListener("click", () => {
    const bookIndex = books.findIndex(book => book.id === deletingBookId);

    if (bookIndex !== -1) {
        books.splice(bookIndex, 1);
    }

    deleteDialog.close();
    deletingBookId = null;

    saveBooks();
    renderBooks();
});





// Render Books
renderBooks();


