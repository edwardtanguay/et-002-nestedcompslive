import { IBook } from '../interfaces';

interface IProps {
	book: IBook;
	showImages: boolean;
}

export const Book = (props: IProps) => {
	const { book, showImages } = props;
	return (
		<div className="book">
			{showImages && (
				<a href={book.bookUrl} target="_blank">
					<img className="cover" src={book.imageUrl} />
				</a>
			)}
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
};
