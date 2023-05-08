import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="not-found">
      <p className="not-found-text">Sorry, page not found</p>
      <Link className="nav-link" to="/">
        Back to Home
      </Link>
    </div>
  );
};
export default PageNotFound;
