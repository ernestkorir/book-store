import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Addbook } from '../redux/books/booksSlice';

const initials = {
  title: '',
  author: '',
  category: '',
};

const Form = () => {
  const [state, setState] = useState(initials);
  const dispatch = useDispatch();
  const Array = useSelector((state) => state.booksReducer.books);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value, item_id: `item${Array.length + 1}` }));
  };

  const handleSubmit = () => {
    dispatch(Addbook(state));
    setState(initials);
  };

  return (
    <div>
      <form className="Form flexColumn" method="post">
        <input type="text" value={state.author} id="author" name="author" placeholder="Author" onChange={handleChange} required />
        <input type="text" value={state.title} id="title" name="title" placeholder="Book Title" onChange={handleChange} required />
        <button type="button" onClick={handleSubmit}>Add a Book</button>
      </form>
    </div>
  );
};
export default Form;