import { useState } from 'react';
import './App.scss';
import { Books } from './components/Books';
import rawBooks from './data/books.json';
import { IBook } from './interfaces';

const _books: IBook[] = [];
rawBooks.forEach((rawBook) => {
	const book: IBook = {
		...rawBook,
		isLiked: false
	};
	_books.push(book);
});

function App() {
	const [showImages, setShowImages] = useState(true);
	const [books, setBooks] = useState(_books)

	return (
		<div className="App">
			<h1>Book Site</h1>
			<button onClick={() => setShowImages(!showImages)}>
				Show Images
			</button>
			<h2>There are {books.length} books.</h2>
			<Books books={books} showImages={showImages} />
		</div>
	);
}

export default App;
