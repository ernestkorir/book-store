import { useSelector } from 'react-redux';
import Book from '../components/books';
import Form from '../components/Form';

const Books = () => {
  const { bookArray } = useSelector((state) => state.bookReducer.book);

  return (
    <>
      {bookArray.map((data) => (
        <Book
          key={data.item_id}
          title={data.item_id}
          author={data.item_id}
          id={data.item_id}
        />
      ))}
      ;
      <Form />
    </>
  );
};

export default Books;