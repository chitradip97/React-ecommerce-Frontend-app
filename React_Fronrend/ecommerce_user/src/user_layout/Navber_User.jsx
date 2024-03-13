import React from "react";
import { Link, NavLink,useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Cartcontext } from "../Context";

function Navber_User() {
  const navigate=useNavigate();
  const {cart}=useContext(Cartcontext)
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!">
            Start Bootstrap
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#!">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="Product-desc">
                  About
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#!">
                      All Products
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Popular Items
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      New Arrivals
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
            <NavLink to='Product-cart' ><button className="btn btn-outline-dark" type="submit">
                <i className="bi-cart-fill me-1" />
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">
                  {cart.length}
                </span>
              </button>
              </NavLink>
            </form>

            {/* Navbar*/}
            <ul className="navbar-nav ms-auto ms-md-5 me-3 me-lg-4">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-user fa-fw" />
                </Link>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="User_login">
                      User Login
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="Admin_login">
                      Admin Login
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="Registration">
                      Register
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                  <button className="dropdown-item" onClick={()=>{
                  localStorage.removeItem('login')
                  navigate('/')}}>
                  Logout
                </button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navber_User;
