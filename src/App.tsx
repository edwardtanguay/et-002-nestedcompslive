import './App.scss';
import books from './data/books.json';

function App() {
	return (
		<div className="App">
			<h1>Book Site</h1>
			<h2>There are {books.length} books.</h2>
			<div className="books">
				{books.map((book, index) => {
					return (
						<div className="book" key={index}>
							<a href={book.bookUrl} target="_blank">
								<img className="cover" src={book.imageUrl} />
							</a>
							<div className="info">
								<div className="title">
									<a href={book.bookUrl} target="_blank">
										{book.title}
									</a>
								</div>
								<div className="author">{book.author}</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default App;
