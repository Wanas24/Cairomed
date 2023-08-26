import { signOut } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../Config/Firebase';
import logo from '../images/Logo.png';
import { Cart } from './Cart';
import { CartContext } from './Context/cartStore';

function Navbar() {
  let { myCart } = useContext(CartContext);
  let { setMyCart } = useContext(CartContext);
  let [isLogged, setIsLogged] = useState('');
  const navigate = useNavigate();
  let location =useLocation();
  let isHomePage1 = location.pathname === '/';
  let isHomePage2 = location.pathname === '/Home';

  async function logout() {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
    navigate('/login');
  }

  useEffect(() => {
    // Listen for changes in the authentication state
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is logged in
        setIsLogged(true);
      } else {
        // User is logged out
        setIsLogged(false);
      }
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <>
      <Cart cart={[myCart, setMyCart]} />

      <nav className="navbar navbar-expand-lg bg-light fixed-top ">
        <div className="container">
          <Link to='/'>
          
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" srcset="" />
          </a>
          </Link>
          <button
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link" to="/">
                  Home
                </Link>
              </li>
              { isHomePage1||isHomePage2?<><li class="nav-item">
                          <a class="nav-link" href="#about">About</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#contact">Contact</a>
                      </li></>:<></>}
              <li class="nav-item">
                <Link class="nav-link" to="/Products">
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/ScientificArticles">
                  Scientific Articles
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/OurRepresentative">
                  Our Representatives
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {isLogged && auth.currentUser.email === 'admin@admin.com' ? (
                <>
                  <li class="nav-item">
                    <Link class="nav-link" to="/Admin">
                      Control Board
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a onClick={logout} className="nav-link pointer ">
                      Logout
                    </a>
                  </li>
                </>
              ) : (
                <li class="nav-item">
                  <Link class="nav-link" to="/login">
                    Admin Login
                  </Link>
                </li>
              )}

              <li className="nav-item">
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