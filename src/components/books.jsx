import Form from './Form';

const Books = ({ title, author }) => (
  <div>
    <ul>
      <div className="book flexRow">
        {' '}
        <li>
          author:
          {author}
          {' '}
          title:
          {title}
        </li>
        <button type="submit" className="remove">remove</button>
      </div>
    </ul>
    <Form />
  </div>

);

export default Books;
