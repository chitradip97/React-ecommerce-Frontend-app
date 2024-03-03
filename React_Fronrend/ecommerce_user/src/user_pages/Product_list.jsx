import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";

function Product_list() {
    const [product, setProduct] = useState([]);
  const [mobile, setMobile] = useState([]);
  async function getAllproduct() {
    try {
      const products_all = await axios.get(
        "http://127.0.0.1:1234/api/products"
      )
      console.log(products_all.data);
      setProduct(products_all.data);
      getAllMobile();
      
    } catch (error) {
      console.log(error);
    }
  }
  const getAllMobile = () => {
    const Mobiles = product.filter(
      (val, index) => val.category_name == "Mobile"
    );
    setMobile(Mobiles);
    console.log(Mobiles);
  };
  useEffect(() => {
    getAllproduct();
    console.log('useEffect called');
  },[product] );
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 bg-gray">
            <h5 className="mt-3">Filter Options</h5>

            {/* <!-- Category Filters --> */}
            <div className="mb-3">
              <label for="categoryFilter" className="form-label">
                Category:
              </label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="electronicsCheckbox"
                  value="electronics"
                />
                <label className="form-check-label" for="electronicsCheckbox">
                  Electronics
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="clothingCheckbox"
                  value="clothing"
                />
                <label className="form-check-label" for="clothingCheckbox">
                  Clothing
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="booksCheckbox"
                  value="books"
                />
                <label className="form-check-label" for="booksCheckbox">
                  Books
                </label>
              </div>
              {/* <!-- Add more categories as needed --> */}
            </div>

            {/* <!-- Price Range Filter --> */}
            <div className="mb-3">
              <label for="priceRange" className="form-label">
                Price Range:
              </label>
              <input
                type="range"
                className="form-range"
                id="priceRange"
                min="0"
                max="1000"
                step="50"
              />
            </div>

            {/* <!-- Add more filters as needed --> */}

            <button type="button" className="btn btn-primary">
              Apply Filters
            </button>
            <button type="button" className="btn btn-secondary">
              Reset Filters
            </button>
          </div>
          <div className="col-md-9 ">
            <div className="container px-4 px-lg-5 mt-5">
              <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              {mobile.map((val, index) => {
                return (
                  <div className="col mb-5">
                    <div className="card h-100">
                      {/* Product image*/}
                      <img
                        className="card-img-top"
                        src={ "http://127.0.0.1:1234/" + val.product_image }
                        alt="..."
                      />
                      {/* Product details*/}
                      <div className="card-body p-4">
                        <div className="text-center">
                          {/* Product name*/}
                          <h5 className="fw-bolder">{val.product_name}</h5>
                          {/* Product price*/}
                          Rs.{val.product_price}
                        </div>
                      </div>
                      {/* Product actions*/}
                      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center">
                          <a className="btn btn-outline-dark mt-auto" href="#">
                            Add to Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
                {/* <div className="col mb-5">
                  <div className="card h-100">
                    <div
                      className="badge bg-dark text-white position-absolute"
                      style={{ top: "0.5rem", right: "0.5rem" }}
                    >
                      Sale
                    </div>

                    <img
                      className="card-img-top"
                      src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                      alt="..."
                    />

                    <div className="card-body p-4">
                      <div className="text-center">
                        <h5 className="fw-bolder">Special Item</h5>
                        <div className="d-flex justify-content-center small text-warning mb-2">
                          <div className="bi-star-fill" />
                          <div className="bi-star-fill" />
                          <div className="bi-star-fill" />
                          <div className="bi-star-fill" />
                          <div className="bi-star-fill" />
                        </div>
                        <span className="text-muted text-decoration-line-through">
                          $20.00
                        </span>
                        $18.00
                      </div>
                    </div>

                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                        <a className="btn btn-outline-dark mt-auto" href="#">
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col mb-5">
                  <div className="card h-100">
                    <div
                      className="badge bg-dark text-white position-absolute"
                      style={{ top: "0.5rem", right: "0.5rem" }}
                    >
                      Sale
                    </div>

                    <img
                      className="card-img-top"
                      src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                      alt="..."
                    />

                    <div className="card-body p-4">
                      <div className="text-center">
                        <h5 className="fw-bolder">Special Item</h5>
                        <div className="d-flex justify-content-center small text-warning mb-2">
                          <div className="bi-star-fill" />
                          <div className="bi-star-fill" />
                          <div className="bi-star-fill" />
                          <div className="bi-star-fill" />
                          <div className="bi-star-fill" />
                        </div>
                        <span className="text-muted text-decoration-line-through">
                          $20.00
                        </span>
                        $18.00
                      </div>
                    </div>

                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                        <a className="btn btn-outline-dark mt-auto" href="#">
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col mb-5">
                  <div className="card h-100">
                    <div
                      className="badge bg-dark text-white position-absolute"
                      style={{ top: "0.5rem", right: "0.5rem" }}
                    >
                      Sale
                    </div>

                    <img
                      className="card-img-top"
                      src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                      alt="..."
                    />

                    <div className="card-body p-4">
                      <div className="text-center">
                        <h5 className="fw-bolder">Special Item</h5>
                        <div className="d-flex justify-content-center small text-warning mb-2">
                          <div className="bi-star-fill" />
                          <div className="bi-star-fill" />
                          <div className="bi-star-fill" />
                          <div className="bi-star-fill" />
                          <div className="bi-star-fill" />
                        </div>
                        <span className="text-muted text-decoration-line-through">
                          $20.00
                        </span>
                        $18.00
                      </div>
                    </div>

                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                        <a className="btn btn-outline-dark mt-auto" href="#">
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col mb-5">
                  <div className="card h-100">
                    <div
                      className="badge bg-dark text-white position-absolute"
                      style={{ top: "0.5rem", right: "0.5rem" }}
                    >
                      Sale
                    </div>

                    <img
                      className="card-img-top"
                      src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                      alt="..."
                    />

                    <div className="card-body p-4">
                      <div className="text-center">
                        <h5 className="fw-bolder">Special Item</h5>
                        <div className="d-flex justify-content-center small text-warning mb-2">
                          <div className="bi-star-fill" />
                          <div className="bi-star-fill" />
                          <div className="bi-star-fill" />
                          <div className="bi-star-fill" />
                          <div className="bi-star-fill" />
                        </div>
                        <span className="text-muted text-decoration-line-through">
                          $20.00
                        </span>
                        $18.00
                      </div>
                    </div>

                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                        <a className="btn btn-outline-dark mt-auto" href="#">
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col mb-5">
                  <div className="card h-100">
                    <div
                      className="badge bg-dark text-white position-absolute"
                      style={{ top: "0.5rem", right: "0.5rem" }}
                    >
                      Sale
                    </div>

                    <img
                      className="card-img-top"
                      src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                      alt="..."
                    />

                    <div className="card-body p-4">
                      <div className="text-center">
                        <h5 className="fw-bolder">Special Item</h5>
                        <div className="d-flex justify-content-center small text-warning mb-2">
                          <div className="bi-star-fill" />
                          <div className="bi-star-fill" />
                          <div className="bi-star-fill" />
                          <div className="bi-star-fill" />
                          <div className="bi-star-fill" />
                        </div>
                        <span className="text-muted text-decoration-line-through">
                          $20.00
                        </span>
                        $18.00
                      </div>
                    </div>

                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                        <a className="btn btn-outline-dark mt-auto" href="#">
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col mb-5">
                  <div className="card h-100">
                    <div
                      className="badge bg-dark text-white position-absolute"
                      style={{ top: "0.5rem", right: "0.5rem" }}
                    >
                      Sale
                    </div>

                    <img
                      className="card-img-top"
                      src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                      alt="..."
                    />

                    <div className="card-body p-4">
                      <div className="text-center">
                        <h5 className="fw-bolder">Special Item</h5>
                        <div className="d-flex justify-content-center small text-warning mb-2">
                          <div className="bi-star-fill" />
                          <div className="bi-star-fill" />
                          <div className="bi-star-fill" />
                          <div className="bi-star-fill" />
                          <div className="bi-star-fill" />
                        </div>
                        <span className="text-muted text-decoration-line-through">
                          $20.00
                        </span>
                        $18.00
                      </div>
                    </div>

                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                        <a className="btn btn-outline-dark mt-auto" href="#">
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col mb-5">
                  <div className="card h-100">
                    <div
                      className="badge bg-dark text-white position-absolute"
                      style={{ top: "0.5rem", right: "0.5rem" }}
                    >
                      Sale
                    </div>

                    <img
                      className="card-img-top"
                      src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                      alt="..."
                    />

                    <div className="card-body p-4">
                      <div className="text-center">
                        <h5 className="fw-bolder">Special Item</h5>
                        <div className="d-flex justify-content-center small text-warning mb-2">
                          <div className="bi-star-fill" />
                          <div className="bi-star-fill" />
                          <div className="bi-star-fill" />
                          <div className="bi-star-fill" />
                          <div className="bi-star-fill" />
                        </div>
                        <span className="text-muted text-decoration-line-through">
                          $20.00
                        </span>
                        $18.00
                      </div>
                    </div>

                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                        <a className="btn btn-outline-dark mt-auto" href="#">
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col mb-5">
                  <div className="card h-100">
                    <div
                      className="badge bg-dark text-white position-absolute"
                      style={{ top: "0.5rem", right: "0.5rem" }}
                    >
                      Sale
                    </div>

                    <img
                      className="card-img-top"
                      src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                      alt="..."
                    />

                    <div className="card-body p-4">
                      <div className="text-center">
                        <h5 className="fw-bolder">Special Item</h5>
                        <div className="d-flex justify-content-center small text-warning mb-2">
                          <div className="bi-star-fill" />
                          <div className="bi-star-fill" />
                          <div className="bi-star-fill" />
                          <div className="bi-star-fill" />
                          <div className="bi-star-fill" />
                        </div>
                        <span className="text-muted text-decoration-line-through">
                          $20.00
                        </span>
                        $18.00
                      </div>
                    </div>

                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                        <a className="btn btn-outline-dark mt-auto" href="#">
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product_list;
