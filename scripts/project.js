// script.js
//Getting references to HTML elements
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const resultsDiv = document.getElementById('results');
const modal = document.getElementById('modal');
const modalInfo = document.getElementById('modalInfo');

//Adding event listener to search button
searchButton.addEventListener('click', searchBooks);

//Fetch Function for books data
async function searchBooks() {
    const searchTerm = searchInput.value.trim();
    if (searchTerm === '') {
        alert('Please enter a search term.');
        return;
    }

    const langRestrict = 'en'; //Language restriction for search in english

    try {
        //Fetching data from Google Books API
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&langRestrict=${langRestrict}`);
        const data = await response.json();

        //Checking if no results are found
        if (data.totalItems === 0) {
            resultsDiv.innerHTML = '<p>No results found.</p>';
            return;
        }

        //Displaying search results
        displayResults(data.items);
    } catch (error) {
        //Error message if fetch fails
        console.error('Error fetching books:', error);
        alert('Failed to fetch books. Please try again later.');
    }
}

//Display function to show search results
function displayResults(books) {
    resultsDiv.innerHTML = '';

    //forEach method and creating HTML elements to display them
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

        // Event listener to show book details on click
        bookElement.addEventListener('click', () => {
            showModal(book.volumeInfo);
        });
    });
}

//Function to show modal with book details after clicking in the image
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