import { IBook } from '../interfaces';
import { AiFillLike } from 'react-icons/ai';

interface IProps {
	book: IBook;
	showImages: boolean;
	books: IBook[];
	setBooks: any;
}

export const Book = (props: IProps) => {
	const { book, books, setBooks, showImages } = props;

	const handleChangeLiked = (book: IBook) => {
		book.isLiked = !book.isLiked;
		setBooks([...books]);
	};

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
				<div className="isLiked">
					<AiFillLike onClick={() => handleChangeLiked(book)} className={book.isLiked ? 'thumbs thumbsIsLiked' : 'thumbs thumbsIsNotLiked'} />
				</div>
			</div>
		</div>
	);
};
