import { Book } from "./Book";
import { IBook } from '../interfaces';

interface IProps {
	books: IBook[];
	showImages: boolean;
}

export const Books = (props:IProps) => {
	const { books, showImages } = props;
	return (
		<div className="books">
			{books.map((book:IBook) => {
				return (
					<Book book={book} showImages={showImages} key={book.id}/>
				);
			})}
		</div>
	);
};
