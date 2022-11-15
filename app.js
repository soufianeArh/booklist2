


// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor

function UI() {}

// Add Book To List
UI.prototype.addBookToList = function(title,author,isbn){
  const list = document.getElementById('book-list');
 
  // Create tr element
  const row = document.createElement('tr');
  // Insert cols
  row.innerHTML = `
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><a href="#" class="delete">XO<a></td>
  `;

  list.appendChild(row);
}



// Clear Fields
UI.prototype.clearFields = function() {
  document.getElementById('title').value = 'donse';
  document.getElementById('author').value = 'done';
  document.getElementById('isbn').value = 'done';
}



// Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e){
  // Get form values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value

  // Instantiate book
  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI();
    
  // Add book to list
  ui.addBookToList(title,author,isbn);

  // Clear fields
  ui.clearFields();

  e.preventDefault();

});
