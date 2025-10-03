
function getBook(book) {
    let newBook = {
        title: book.title,
        author: book.author,
        alreadyRead: !!book.alreadyRead,
    };
    return newBook;
}

let book1 = getBook ={
    title: "The Hobbit",
    author: "J.R.R Tolkien",
    alreadyRead: false,
};

console.log(book1);

let book2 = getBook ={
    title: "Amintiri din copilarie",
    author: "Ion Creanga",
    alreadyRead: true,
};

console.log(book2);

