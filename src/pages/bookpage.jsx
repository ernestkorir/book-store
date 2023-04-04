import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/books';
import Form from '../components/Form';

const Books = () => {
  const bookArray = useSelector((state) => state.booksReducer.books);

  return (
    <>
      {bookArray.map((data) => (
        <Book
          key={data.item_id}
          title={data.title}
          author={data.author}
          id={data.item_id}
        />
      ))}
      <Form />
    </>
  );
};

export default Books;
