
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const bookList = document.getElementById('bookList');

let booklibrary = [];

btn1.addEventListener('click', () => {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("page").value;
    let genre = document.getElementById("genre").value;

    if (title && author && pages && genre) {
        let book = {
            title: title,
            author: author,
            pages: pages,
            genre: genre
        };
        booklibrary.push(book);
        addBooks(booklibrary);
    }
});

function addBooks(books) {
    bookList.innerHTML = '';

    books.forEach(book => {
        let div = document.createElement("div");
        div.classList.add('book');
        div.innerHTML = `
        <h3>Title: ${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Genre: ${book.genre}</p>
       `;
        bookList.appendChild(div);
    });
}

btn2.addEventListener('click', () => {
    const searchBook = document.getElementById('searchBox').value.toLowerCase();
    const result = booklibrary.filter(book => book.title.toLowerCase().includes(searchBook));
    addBooks(result);
});
