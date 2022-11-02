import { Book } from "./Book";
import { IBook } from '../interfaces';

interface IProps {
	books: IBook[];
}

export const Books = (props:IProps) => {
	const { books } = props;
	return (
		<div className="books">
			{books.map((book:IBook) => {
				return (
					<Book book={book} key={book.id}/>
				);
			})}
		</div>
	);
};
