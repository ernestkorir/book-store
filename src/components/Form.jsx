/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addbook } from '../redux/books/booksSlice';

const initials = {
  title: '',
  author: '',
  category: '',
};

const categories = ['Action', 'Non-Fiction', 'Fiction', 'Love', 'Mystery', 'Science Fiction'];
const getRandomNumber = () => Math.floor(Math.random() * 5) + 1;

const Form = () => {
  const [state, setState] = useState(initials);
  const dispatch = useDispatch();
  const Array = useSelector((state) => state.booksReducer.books);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev, [name]: value, item_id: `item${Array.length + 1}`, category: categories[getRandomNumber()],
    }));
  };

  const handleSubmit = () => {
    dispatch(addbook({ ...state, item_id: uuidv4() }));
    setState(initials);
  };

  return (
    <div className="mainform">
      <div className="Line" />
      <div className="Title">
        ADD NEW BOOK
      </div>
      <form className="Form" method="post">
        <input type="text" value={state.author} id="author" className="form_item" name="author" placeholder="Author" onChange={handleChange} required />
        <input type="text" value={state.title} id="title" className="form_item" name="title" placeholder="Book Title" onChange={handleChange} required />
        <button type="button" onClick={handleSubmit} className="form_button">Add a Book</button>
      </form>
    </div>
  );
};
export default Form;
