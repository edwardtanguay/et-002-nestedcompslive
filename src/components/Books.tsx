import { Book } from "./Book";

interface IBook {
	id: number,
	title: string;
	author: string;
	imageUrl: string;
	bookUrl: string;
}

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
