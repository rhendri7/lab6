class Book {
    constructor(title, author, pubDate, isbn) {
        this.title = title;
        this.author = author;
        this.pubDate = pubDate;
        this.isbn = isbn;
    }
}

let myBook = new Book("CIT 281", "Lindy Stewart", "04/01/2023", 123);
console.log(myBook);

class Library {
    constructor(name) {
        this._name = name;
        this._books = [];
    }

    addBook(book = {}) {
        let { title = "", author = "", pubDate = "", isbn = "" } = book;
        if (title.length > 0 && author.length > 0) {
            this._books.push(book);
        }
    }

    deleteBook(isbn) {
        this._books = this._books.filter(book => book.isbn !== isbn);
    }

    listBooks() {
        for (const book of this._books) {
            console.log(`Title: ${book.title}, Author: ${book.author}, PubDate: ${book.pubDate}, ISBN: ${book.isbn}`);
        }
    }
}

let book2 = new Book("Atomic Habits", "James Clear", "10/16/2018", "0735211299");
console.log(`Title: ${book2.title}, Author: ${book2.author}, PubDate: ${book2.pubDate}`);

let myLib = new Library("CIT Classes");
myLib.addBook(myBook);
console.log(myLib);

// Test book and library
myLib.listBooks();