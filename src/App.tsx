import { useState } from 'react';
import './App.scss';
import { Books } from './components/Books';
import books from './data/books.json';

function App() {
  const [showImages, setShowImages] = useState(false);

	return (
		<div className="App">
			<h1>Book Site</h1>
      <button onClick={() => setShowImages(!showImages)}>Show Images</button>
			<h2>There are {books.length} books.</h2>
      <Books books={books} showImages={showImages} />
		</div>
	);
}

export default App;
