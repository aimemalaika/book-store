import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../redux/books/books';

const BookList = () => {
  const books = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  const removeBookToStore = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <div>
      <ul className="books-list">
        {books.map(({
          author, title, id,
        }) => (
          <li key={id}>
            <span>{title}</span>
            <span>{author}</span>
            <button onClick={() => removeBookToStore(id)} type="button">Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
