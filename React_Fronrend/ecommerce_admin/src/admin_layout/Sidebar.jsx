import React from "react";
import { Link,NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <nav
        className="sb-sidenav accordion sb-sidenav-dark"
        id="sidenavAccordion"
      >
        <div className="sb-sidenav-menu">
          <div className="nav">
            <div className="sb-sidenav-menu-heading">Core</div>
            <NavLink className="nav-link" to="/">
              <div className="sb-nav-link-icon">
                <i className="fas fa-tachometer-alt" />
              </div>
              Dashboard
            </NavLink>
            <NavLink className="nav-link" to="Customer">
              <div className="sb-nav-link-icon">
                <i className="fas fa-tachometer-alt" />
              </div>
              Customer
            </NavLink>
            <div className="sb-sidenav-menu-heading">Interface</div>
            <Link
              className="nav-link collapsed"
              to="#"
              data-bs-toggle="collapse"
              data-bs-target="#collapseLayouts"
              aria-expanded="false"
              aria-controls="collapseLayouts"
            >
              <div className="sb-nav-link-icon">
                <i className="fas fa-columns" />
              </div>
              Catelog
              <div className="sb-sidenav-collapse-arrow">
                <i className="fas fa-angle-down" />
              </div>
            </Link>
            <div
              className="collapse"
              id="collapseLayouts"
              aria-labelledby="headingOne"
              data-bs-parent="#sidenavAccordion"
            >
              <nav className="sb-sidenav-menu-nested nav">
                <Link className="nav-link" to="Product/Add-product">
                  Product
                </Link>
                <Link className="nav-link" to="Category/Add-category">
                  Category
                </Link>
                <Link className="nav-link" to="Brand">
                  Brand
                </Link>
              </nav>
            </div>
            <NavLink className="nav-link" to="Orders">
              <div className="sb-nav-link-icon">
                <i className="fas fa-tachometer-alt" />
              </div>
              Orders
            </NavLink>
            <div>
            {/* <Link
              className="nav-link collapsed"
              to="#"
              data-bs-toggle="collapse"
              data-bs-target="#collapsePages"
              aria-expanded="false"
              aria-controls="collapsePages"
            >
              <div className="sb-nav-link-icon">
                <i className="fas fa-book-open" />
              </div>
              Orders
              <div className="sb-sidenav-collapse-arrow">
                <i className="fas fa-angle-down" />
              </div>
            </Link>
            <div
              className="collapse"
              id="collapsePages"
              aria-labelledby="headingTwo"
              data-bs-parent="#sidenavAccordion"
            >
              <nav
                className="sb-sidenav-menu-nested nav accordion"
                id="sidenavAccordionPages"
              >
                <Link
                  className="nav-link collapsed"
                  to="#"
                  data-bs-toggle="collapse"
                  data-bs-target="#pagesCollapseAuth"
                  aria-expanded="false"
                  aria-controls="pagesCollapseAuth"
                >
                  Order
                  <div className="sb-sidenav-collapse-arrow">
                    <i className="fas fa-angle-down" />
                  </div>
                </Link>
                <div
                  className="collapse"
                  id="pagesCollapseAuth"
                  aria-labelledby="headingOne"
                  data-bs-parent="#sidenavAccordionPages"
                >
                  <nav className="sb-sidenav-menu-nested nav">
                    <Link className="nav-link" to="login.html">
                      Login
                    </Link>
                    <Link className="nav-link" to="register.html">
                      Register
                    </Link>
                    <Link className="nav-link" to="password.html">
                      Forgot Password
                    </Link>
                  </nav>
                </div>
                <Link
                  className="nav-link collapsed"
                  to="#"
                  data-bs-toggle="collapse"
                  data-bs-target="#pagesCollapseError"
                  aria-expanded="false"
                  aria-controls="pagesCollapseError"
                >
                  Error
                  <div className="sb-sidenav-collapse-arrow">
                    <i className="fas fa-angle-down" />
                  </div>
                </Link>
                <div
                  className="collapse"
                  id="pagesCollapseError"
                  aria-labelledby="headingOne"
                  data-bs-parent="#sidenavAccordionPages"
                >
                  <nav className="sb-sidenav-menu-nested nav">
                    <Link className="nav-link" to="401.html">
                      401 Page
                    </Link>
                    <Link className="nav-link" to="404.html">
                      404 Page
                    </Link>
                    <Link className="nav-link" to="500.html">
                      500 Page
                    </Link>
                  </nav>
                </div>
              </nav>
            </div> */}
            </div>
            <div className="sb-sidenav-menu-heading">Addons</div>
            <Link className="nav-link" to="Blogs">
              <div className="sb-nav-link-icon">
                <i className="fas fa-chart-area" />
              </div>
              Blogs
            </Link>
            <Link className="nav-link" to="Banner">
              <div className="sb-nav-link-icon">
                <i className="fas fa-table" />
              </div>
              Banner
            </Link>
          </div>
        </div>
        <div className="sb-sidenav-footer">
          <div className="small">Logged in as:</div>
          Start Bootstrap
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
