import { signOut } from 'firebase/auth';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../Config/Firebase';
import logo from '../images/Logo.png';
import { Cart } from './Cart';
import { CartContext } from './Context/cartStore';

function Navbar() {
  const { myCart, setMyCart } = useContext(CartContext);
  const [isLogged, setIsLogged] = useState('');
  const [navState, setNavState] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '/Home';

  const memoizedCart = useMemo(() => [myCart, setMyCart], [myCart, setMyCart]);

  async function logout() {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
    navigate('/login');
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLogged(true);
      } else {
        setIsLogged(false);
      }
    });

    return () => unsubscribe();
  }, []);

  function hideNav() {
    setNavState(false);
  }

  function showNav() {
    setNavState(true);
  }

  function handleNavItemClick() {
    hideNav();
  }

  return (
    <>
      <Cart cart={memoizedCart} />

      <nav className="navbar navbar-expand-lg bg-light fixed-top">
        <div className="container">
          <Link to="/">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="" srcSet="" />
            </a>
          </Link>
          <button
            onClick={showNav}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${navState ? 'show' : ''}`} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" onClick={handleNavItemClick}>
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={hideNav}>
                  Home
                </Link>
              </li>
              {isHomePage && (
                <>
                  <li className="nav-item" onClick={hideNav}>
                    <a className="nav-link" href="#about">
                      About
                    </a>
                  </li>
                  <li className="nav-item" onClick={hideNav}>
                    <a className="nav-link" href="#contact">
                      Contact
                    </a>
                  </li>
                </>
              )}
              <li className="nav-item" onClick={hideNav}>
                <Link className="nav-link" to="/Products">
                  Products
                </Link>
              </li>
              <li className="nav-item" onClick={hideNav}>
                <Link className="nav-link" to="/ScientificArticles">
                  Scientific Articles
                </Link>
              </li>
              <li className="nav-item" onClick={hideNav}>
                <Link className="nav-link" to="/OurRepresentative">
                  Our Representatives
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {isLogged && auth.currentUser.email === 'admin@admin.com' ? (
                <>
                  <li className="nav-item" onClick={hideNav}>
                    <Link className="nav-link" to="/Admin">
                      Control Board
                    </Link>
                  </li>
                  <li className="nav-item" onClick={hideNav}>
                    <a onClick={logout} className="nav-link pointer ">
                      Logout
                    </a>
                  </li>
                </>
              ) : (
                <li className="nav-item" onClick={hideNav}>
                  <Link className="nav-link" to="/login">
                    Admin Login
                  </Link>
                </li>
              )}

              <li className="nav-item" onClick={hideNav}>
                <a
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                  className="nav-link"
                  href="#"
                >
                  Cart <i className="fa-solid fa-cart-shopping"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;