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
	const [books, setBooks] = useState(_books);

	const gatsbyBookIsLiked = () => {
		const _book = books.find((book) => book.id === 2);
		if (_book === undefined) {
			return false;
		} else {
			return _book.isLiked;
		}
	};

	return (
		<div className="App">
			<h1>Book Site</h1>
			{gatsbyBookIsLiked() && (
				<div className="gatsbyAdvertisement">
					We have a new book about Gatsby you may like! Click here:
					nnnnnnnnn
				</div>
			)}
			<button onClick={() => setShowImages(!showImages)}>
				Show Images
			</button>
			<h2>There are {books.length} books.</h2>
			<div className="numberOfLikes">
				Number of likes:{' '}
				{books.reduce((acc, book) => acc + (book.isLiked ? 1 : 0), 0)}
			</div>
			<Books books={books} setBooks={setBooks} showImages={showImages} />
		</div>
	);
}

export default App;
