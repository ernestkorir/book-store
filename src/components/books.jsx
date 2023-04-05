import React from 'react';
import { useDispatch } from 'react-redux';
import { Removebook } from '../redux/books/booksSlice';

const Book = ({ title, author, id }) => {
  const dispatch = useDispatch();
  return (
    <div className="book flexRow">
      <h2>{author}</h2>
      {' '}
      <p>{title}</p>
      <div className="actions">
        <button type="button" onClick={() => dispatch(Removebook(id))}>remove</button>
      </div>
    </div>
  );
};

export default Book;
