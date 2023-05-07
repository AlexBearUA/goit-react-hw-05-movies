import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { RotatingLines } from 'react-loader-spinner';
const Layout = () => {
  return (
    <>
      <header className="header">
        <nav>
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/movies">
            Movies
          </NavLink>
        </nav>
        <p className="logo">Simple Movies Service</p>
      </header>
      <main>
        <div className="container">
          <Suspense
            fallback={
              <div className="spinner">
                <RotatingLines
                  strokeColor="#3f51b5"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="200"
                  visible={true}
                />
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </div>
      </main>
    </>
  );
};

export default Layout;
