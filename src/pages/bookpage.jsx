import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/books';
import Form from '../components/Form';
import { fetchbook } from '../redux/books/booksSlice';

const Books = () => {
  const bookArray = useSelector((state) => state.booksReducer.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchbook());
  }, [dispatch]);

  return (
    <>
      { bookArray.length > 0 ? bookArray.map((data) => (
        <Book
          key={data.item_id}
          title={data.title}
          author={data.author}
          id={data.item_id}
          category={data.category}
        />
      )) : ''}
      <Form />
    </>
  );
};

export default Books;
