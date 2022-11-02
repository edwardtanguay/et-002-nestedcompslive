import { Book } from "./Book";
import { IBook } from '../interfaces';

interface IProps {
	books: IBook[];
	showImages: boolean;
	setBooks: any;
}

export const Books = (props:IProps) => {
	const { books, setBooks, showImages } = props;
	return (
		<div className="books">
			{books.map((book:IBook) => {
				return (
					<Book book={book} setBooks={setBooks} books={books} showImages={showImages} key={book.id}/>
				);
			})}
		</div>
	);
};
