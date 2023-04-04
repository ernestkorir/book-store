/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { Proptypes } from 'immer/dist/internal';
import { Removebook } from '../redux/books/booksSlice';
import { Checkstatus } from '../redux/categories/categoriesSlice';

const Book = ({ title, author, id }) => {
  const dispatch = useDispatch();
  return (
    <div className="book flexRow">
      <h2>{author}</h2>
      {' '}
      <p>{title}</p>
      <div className="actions">
        <button type="button" onClick={() => dispatch(Checkstatus(id))}>Check Status</button>
        <button type="button" onClick={() => dispatch(Removebook(id))}>remove</button>

  </div>
  </div>
);
}
export default Book;

Book.propTypes = {
  title: Proptypes.string.isRequired,
  author: Proptypes.string.isRequired,
  id: Proptypes.string.isRequired,
};
