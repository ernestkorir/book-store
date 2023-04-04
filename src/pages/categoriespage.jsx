import { useDispatch, useSelector } from 'react-redux';
import { Checkstatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const status = useSelector((state) => state.categoriesReducer.status);
  const dispatch = useDispatch();
  return (
    <>
      <div>{status}</div>
      <button type="button" onClick={() => dispatch(Checkstatus())}>Check Status</button>
    </>
  );
};

export default Categories;
