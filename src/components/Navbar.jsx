import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="panel-bg">
    <div className="firstpart">
      <div>
        <span className="Bookstore-CMS Text-Style-3">Bookstore CMS</span>
      </div>

      <div className="BOOKS">
        <Link to="/" className="navlink">
          BOOKS
        </Link>
      </div>

      <div className="categories">
        <Link to="/categories" className="navlink">
          CATEGORIES
        </Link>
      </div>
    </div>
    <div className="user">
      <i className="fa-solid fa-user" />
    </div>
  </nav>
);

export default Navbar;
