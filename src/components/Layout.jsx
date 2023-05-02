import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
