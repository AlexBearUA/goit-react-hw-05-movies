import { NavLink, Outlet } from 'react-router-dom';
export const Layout = () => {
  return (
    <>
      <nav>
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/movies">
          Movies
        </NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};
