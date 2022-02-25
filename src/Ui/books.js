import BookForm from '../components/bookForm';
import BookList from '../components/bookList';
import Header from '../components/header';

const Books = () => (
  <div>
    <Header key="1" />
    <BookList key="2" />
    <BookForm key="3" />
  </div>
);

export default Books;
