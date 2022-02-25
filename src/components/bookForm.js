import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const submitBookToStore = () => {
    const id = uuidv4();
    const newBook = {
      id,
      title,
      author,
    };
    dispatch(addBook(newBook));
  };

  return (
    <form className="books-form">
      <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder="enter book name" />
      <input onChange={(e) => setAuthor(e.target.value)} type="text" placeholder="enter book author" />
      <button onClick={submitBookToStore} type="button">Add</button>
    </form>
  );
};

export default BookForm;
