import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks, removeBook } from '../redux/books/books';
/* eslint-disable react/jsx-key */
const BookList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks);
  }, []);
  const books = useSelector((state) => state.booksReducer);
  const removeBookFromStore = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <div>
      <ul className="books-list">
        {books.map(({
          category, title, id,
        }) => (
          <li key={id}>
            <span>{title}</span>
            <span>{category}</span>
            <button onClick={() => removeBookFromStore(id)} type="button">Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
