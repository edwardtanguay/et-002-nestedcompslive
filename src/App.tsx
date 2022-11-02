import './App.scss';
import { Books } from './components/Books';
import books from './data/books.json';

function App() {
	return (
		<div className="App">
			<h1>Book Site</h1>
			<h2>There are {books.length} books.</h2>
      <Books books={books} />
		</div>
	);
}

export default App;
