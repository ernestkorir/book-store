import React from 'react';
import { useDispatch } from 'react-redux';
import { removebook } from '../redux/books/booksSlice';

const Book = ({
  title, author, id, category,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="book">
        <div className="bookdetails">
          <p className="category">{category}</p>
          <h2 className="title">{title}</h2>
          <p className="author">{author}</p>
          <div className="actions">
            <button type="button" className="button" name="bookbutton">comment</button>
            <span className="div" />
            <button type="button" className="button" name="bookbutton" onClick={() => dispatch(removebook(id))}>remove</button>
            <span className="div" />
            <button type="button" className="button" name="bookbutton">edit</button>
          </div>
        </div>
        <div className="statistics">
          <div className="oval">
            <div className="circular_oval" />
          </div>
          <div className="completion">
            <div className="score">64%</div>
            <span className="completed">completed</span>
          </div>
          <span className="divider" />
          <div className="chapterprogess">
            <h1 className="Current-Chapter">CURRENT CHAPTER</h1>
            <p className="chaptername"> chapter 17</p>
            <button type="button" className="updateProgress">UPDATE PROGRESS</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
