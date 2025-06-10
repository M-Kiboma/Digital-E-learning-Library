// Add User
document.getElementById("userForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;

  const userItem = document.createElement("li");
  userItem.textContent = `${username} (${email})`;
  document.getElementById("userList").appendChild(userItem);

  // Clear inputs
  document.getElementById("userForm").reset();
});

// Add Book
let books = [];

document.getElementById("bookForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const title = document.getElementById("bookTitle").value;
  const author = document.getElementById("bookAuthor").value;

  const book = { title, author };
  books.push(book);
  displayBooks(books);

  document.getElementById("bookForm").reset();
});

// Display Books
function displayBooks(bookArray) {
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = "";
  bookArray.forEach((book) => {
    const li = document.createElement("li");
    li.textContent = `${book.title} by ${book.author}`;
    bookList.appendChild(li);
  });
}

// Search Books
document.getElementById("searchInput").addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase();
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm)
  );
  displayBooks(filteredBooks);
});
