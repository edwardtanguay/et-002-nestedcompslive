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
			{books.map((book:IBook, index:number) => {
				return (
					<div className="book" key={index+1}>
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
	);
};
