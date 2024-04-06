// Get references to HTML elements
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const resultsDiv = document.getElementById('results');
const modal = document.getElementById('modal');
const modalInfo = document.getElementById('modalInfo');

// Add event listener to search button
searchButton.addEventListener('click', searchBooks);

// Function to fetch books data asynchronously
async function searchBooks() {
    // Get search term from input field
    const searchTerm = searchInput.value.trim();
    // Check if search term is empty
    if (searchTerm === '') {
        alert('Please enter a search term.');
        return;
    }

    // Language restriction for search (English)
    const langRestrict = 'en';

    try {
        // Fetch data from Google Books API based on search term and language restriction
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&langRestrict=${langRestrict}`);
        const data = await response.json();

        // Check if no results are found
        if (data.totalItems === 0) {
            resultsDiv.innerHTML = '<p>No results found.</p>';
            return;
        }

        // Display search results
        displayResults(data.items);
    } catch (error) {
        // Log error to console and show alert message if fetching fails
        console.error('Error fetching books:', error);
        alert('Failed to fetch books. Please try again later.');
    }
}

// Function to display search results
function displayResults(books) {
    resultsDiv.innerHTML = '';

    // Loop through each book and create HTML elements to display them
    books.forEach(book => {
        const title = book.volumeInfo.title || 'No title available';
        const cover = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'No cover available';

        const bookElement = document.createElement('div');
        bookElement.classList.add('book');

        const img = document.createElement('img');
        img.src = cover;
        img.alt = title;

        bookElement.appendChild(img);
        resultsDiv.appendChild(bookElement);

        // Event listener to show book details when clicked
        bookElement.addEventListener('click', () => {
            showModal(book.volumeInfo);
        });
    });
}

// Function to show modal with book details
function showModal(bookInfo) {
    const { title, authors, description, pageCount } = bookInfo;

    modalInfo.innerHTML = `
        <h2>${title}</h2>
        <p><strong>Author(s):</strong> ${authors ? authors.join(', ') : 'Unknown author'}</p>
        <p><strong>Page Count:</strong> ${pageCount ? pageCount : 'Unknown'}</p>
        <p><strong>Description:</strong> ${description ? description : 'No description available'}</p>
    `;

    modal.style.display = 'block';

    // Close modal when clicking on close button or outside the modal
    modal.addEventListener('click', (event) => {
        if (event.target === modal || event.target.classList.contains('close')) {
            modal.style.display = 'none';
        }
    });
}