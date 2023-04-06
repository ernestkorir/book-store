import React from 'react';
import { useDispatch } from 'react-redux';
import { removebook } from '../redux/books/booksSlice';

const Book = ({
  title, author, id, category,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="book flexRow">
      <h2>{author}</h2>
      {' '}
      <p>{title}</p>
      {' '}
      <p>{category}</p>
      <div className="actions">
        <button type="button" onClick={() => dispatch(removebook(id))}>remove</button>
      </div>
    </div>
  );
};

export default Book;
