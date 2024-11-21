export default function Home() {
  return (
    <>
      <div className="osahan-header-nav px-3 pt-3 d-flex align-items-center bg-danger">
        <h5 className="font-weight-normal mb-0 text-white">
          <button
            type="button"
            className="btn bg-danger text-white border-0 p-0"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <span className="text-white h4 m-0">
              <i className="fa-solid fa-location-dot"></i>&nbsp;
              <span>Set Location</span>&nbsp;
              <i className="fa-solid fa-chevron-down"></i>
            </span>
          </button>
        </h5>
        <div className="ms-auto gap-3 d-flex align-items-center">
          <a href="/notifications" className="text-white">
            <i className="bi bi-bell d-flex m-0 h2"></i>
          </a>
          <a className="toggle osahan-toggle text-white m-0" href="#">
            <i className="bi bi-list d-flex m-0 h1"></i>
          </a>
        </div>
      </div>

      <div className="p-3 bg-danger sticky-top shadow-sm">
        <div className="input-group bg-white rounded-md border-0 p-1 mb-3 overflow-hidden">
          <span className="input-group-text border-0 border-end bg-white pe-0">
            <i className="fa-solid fa-magnifying-glass text-danger"></i>
          </span>
          <input
            type="text"
            className="shadow-none form-control border-0 border-end"
            placeholder="Restaurant name or a dish..."
          />
          <a
            href="#"
            className="input-group-text text-decoration-none border-0 bg-white"
          >
            <i className="fa-solid fa-microphone text-danger"></i>
          </a>
        </div>
        <div className="relevance-back">
          <div className="relevance-scroll d-flex gap-2">
            <div className="bg-danger">
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio1"
              />
              <label
                className="btn btn-outline-light btn-sm rounded"
                htmlFor="btnradio1"
              >
                <span>
                  <i className="fa-solid fa-shield"></i>
                </span>{" "}
                MAX Safety
              </label>
            </div>
            <div className="bg-danger">
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio2"
              />
              <label
                className="btn btn-outline-light btn-sm rounded"
                htmlFor="btnradio2"
              >
                Fast Delivery
              </label>
            </div>
            <div className="bg-danger">
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio3"
              />
              <label
                className="btn btn-outline-light btn-sm rounded"
                htmlFor="btnradio3"
              >
                <span>
                  <i className="fa-brands fa-envira"></i>
                </span>{" "}
                Vegetarian
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="p-3 brands-list">
        <h3 className="fw-bold mb-3">Top brands for you</h3>
        <div className="row align-items-end g-4">
          <div className="col-3">
            <a
              href="/search-list"
              className="text-decoration-none link-dark"
            >
              <div className="card border-0 bg-light">
                <div className="m-auto back">
                  <img
                    src="imgs/logo8.png"
                    className="img-fluid cw-70 ch-70 rounded-circle bg-white shadow-sm border"
                    alt="#"
                  />
                </div>
                <div className="card-body text-center px-0 pb-0">
                  <h6 className="card-title mb-1">Subwey</h6>
                  <p className="card-text text-muted">
                    <span>
                      <i className="fa-solid fa-stopwatch text-success"></i>
                    </span>
                    &nbsp;33 mins
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-3">
            <a
              href="/search-list"
              className="text-decoration-none link-dark"
            >
              <div className="card border-0 bg-light">
                <div className="m-auto back">
                  <img
                    src="imgs/logo1.png"
                    className="img-fluid cw-70 ch-70 rounded-circle bg-white shadow-sm border"
                    alt="#"
                  />
                </div>
                <span className="btn btn-primary badge text-white text-center m-auto position-absolute top-50 start-50 translate-middle">
                  20% OFF
                </span>
                <div className="card-body text-center px-0 pb-0">
                  <h6 className="card-title mb-1">McDonae</h6>
                  <p className="card-text text-muted">
                    <span>
                      <i className="fa-solid fa-stopwatch text-success"></i>
                    </span>
                    &nbsp;32 mins
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-3">
            <a href="/store" className="text-decoration-none link-dark">
              <div className="card border-0 bg-light">
                <div className="m-auto back">
                  <img
                    src="imgs/logo3.png"
                    className="img-fluid cw-70 ch-70 rounded-circle bg-white shadow-sm border"
                    alt="#"
                  />
                </div>
                <span className="btn btn-primary badge text-white text-center m-auto position-absolute top-50 start-50 translate-middle">
                  20% OFF
                </span>
                <div className="card-body text-center px-0 pb-0">
                  <h6 className="card-title mb-1">Domeno</h6>
                  <p className="card-text text-muted">
                    <span>
                      <i className="fa-solid fa-stopwatch text-success"></i>
                    </span>
                    &nbsp;30 mins
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-3">
            <a
              href="/search-list"
              className="text-decoration-none link-dark"
            >
              <div className="card border-0 bg-light">
                <div className="m-auto back">
                  <img
                    src="imgs/logo5.png"
                    className="img-fluid cw-70 ch-70 rounded-circle bg-white shadow-sm border"
                    alt="#"
                  />
                </div>
                <span className="btn btn-primary badge text-white text-center m-auto position-absolute top-50 start-50 translate-middle">
                  20% OFF
                </span>
                <div className="card-body text-center px-0 pb-0">
                  <h6 className="card-title mb-1">KCC</h6>
                  <p className="card-text text-muted">
                    <span>
                      <i className="fa-solid fa-stopwatch text-success"></i>
                    </span>
                    &nbsp;23 mins
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-3">
            <a
              href="/search-list"
              className="text-decoration-none link-dark"
            >
              <div className="card border-0 bg-light">
                <div className="m-auto back">
                  <img
                    src="imgs/logo4.png"
                    className="img-fluid cw-70 ch-70 rounded-circle bg-white shadow-sm border"
                    alt="#"
                  />
                </div>
                <span className="btn btn-primary badge text-white text-center m-auto position-absolute top-50 start-50 translate-middle">
                  {" "}
                  &nbsp;Freebie
                </span>
                <div className="card-body text-center px-0 pb-0">
                  <h6 className="card-title mb-1">Burger Ping</h6>
                  <p className="card-text text-muted">
                    <span>
                      <i className="fa-solid fa-stopwatch text-success"></i>
                    </span>
                    &nbsp;28 mins
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-3">
            <a
              href="/search-list"
              className="text-decoration-none link-dark"
            >
              <div className="card border-0 bg-light">
                <div className="m-auto back">
                  <img
                    src="imgs/logo7.png"
                    className="img-fluid cw-70 ch-70 rounded-circle bg-white shadow-sm border"
                    alt="#"
                  />
                </div>
                <span className="btn btn-primary badge text-white text-center m-auto position-absolute top-50 start-50 translate-middle">
                  60% OFF
                </span>
                <div className="card-body text-center px-0 pb-0">
                  <h6 className="card-title mb-1">Baba Chick.</h6>
                  <p className="card-text text-muted">
                    <span>
                      <i className="fa-solid fa-stopwatch text-success"></i>
                    </span>
                    &nbsp;24 mins
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-3">
            <a
              href="/search-list"
              className="text-decoration-none link-dark"
            >
              <div className="card border-0 bg-light">
                <div className="m-auto back">
                  <img
                    src="imgs/logo2.png"
                    className="img-fluid cw-70 ch-70 rounded-circle bg-white shadow-sm border"
                    alt="#"
                  />
                </div>
                <span className="btn btn-primary badge text-white text-center m-auto position-absolute top-50 start-50 translate-middle">
                  50% OFF
                </span>
                <div className="card-body text-center px-0 pb-0">
                  <h6 className="card-title mb-1">Piza Lut</h6>
                  <p className="card-text text-muted">
                    <span>
                      <i className="fa-solid fa-stopwatch text-success"></i>
                    </span>
                    &nbsp;37 mins
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-3">
            <a
              href="/search-list"
              className="text-decoration-none link-dark"
            >
              <div className="card border-0 bg-light">
                <div className="m-auto back">
                  <img
                    src="imgs/logo6.png"
                    className="img-fluid cw-70 ch-70 rounded-circle bg-white shadow-sm border"
                    alt="#"
                  />
                </div>
                <span className="btn btn-primary badge text-white text-center m-auto position-absolute top-50 start-50 translate-middle">
                  40% OFF
                </span>
                <div className="card-body text-center px-0 pb-0">
                  <h6 className="card-title mb-1">Kwaliti Wa.</h6>
                  <p className="card-text text-muted">
                    <span>
                      <i className="fa-solid fa-stopwatch text-success"></i>
                    </span>
                    &nbsp;17 mins
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="p-3 bg-white">
        <h3 className="fw-bold mb-3">Eat what makes you happy</h3>
        <div className="row align-items-end g-4">
          <div className="col-3">
            <a href="/search-list" className="text-decoration-none">
              <div className="card border-0">
                <img
                  src="imgs/d9.png"
                  className="img-fluid m-auto ch-70 cw-70 rounded-pill"
                  alt="#"
                />
                <div className="card-body text-center px-0 pb-0">
                  <h6 className="card-title text-muted m-0">Sweets</h6>
                </div>
              </div>
            </a>
          </div>
          <div className="col-3">
            <a href="/search-list" className="text-decoration-none">
              <div className="card border-0">
                <img
                  src="imgs/d3.png"
                  className="img-fluid m-auto ch-70 cw-70 rounded-pill"
                  alt="#"
                />
                <div className="card-body text-center px-0 pb-0">
                  <h6 className="card-title text-muted m-0">Burger</h6>
                </div>
              </div>
            </a>
          </div>
          <div className="col-3">
            <a
              href="/search-list"
              className="text-decoration-none link-dark"
            >
              <div className="card border-0">
                <img
                  src="imgs/d4.png"
                  className="img-fluid m-auto ch-70 cw-70 rounded-pill"
                  alt="#"
                />
                <div className="card-body text-center px-0 pb-0">
                  <h6 className="card-title text-muted m-0">Pizza</h6>
                </div>
              </div>
            </a>
          </div>
          <div className="col-3">
            <a href="/search-list" className="text-decoration-none">
              <div className="card border-0">
                <img
                  src="imgs/d5.png"
                  className="img-fluid m-auto ch-70 cw-70 rounded-pill"
                  alt="#"
                />
                <div className="card-body text-center px-0 pb-0">
                  <h6 className="card-title text-muted m-0">Noddles</h6>
                </div>
              </div>
            </a>
          </div>
          <div className="col-3">
            <a href="/search-list" className="text-decoration-none">
              <div className="card border-0">
                <img
                  src="imgs/d2.png"
                  className="img-fluid m-auto ch-70 cw-70 rounded-pill"
                  alt="#"
                />
                <div className="card-body text-center px-0 pb-0">
                  <h6 className="card-title text-muted m-0">Rolls</h6>
                </div>
              </div>
            </a>
          </div>
          <div className="col-3">
            <a href="/search-list" className="text-decoration-none">
              <div className="card border-0">
                <img
                  src="imgs/d1.png"
                  className="img-fluid m-auto ch-70 cw-70 rounded-pill"
                  alt="#"
                />
                <div className="card-body text-center px-0 pb-0">
                  <h6 className="card-title text-muted m-0">Samosa</h6>
                </div>
              </div>
            </a>
          </div>
          <div className="col-3">
            <a
              href="/search-list"
              className="text-decoration-none link-dark"
            >
              <div className="card border-0">
                <img
                  src="imgs/d8.png"
                  className="img-fluid m-auto ch-70 cw-70 rounded-pill"
                  alt="#"
                />
                <div className="card-body text-center px-0 pb-0">
                  <h6 className="card-title text-muted m-0">Healthy</h6>
                </div>
              </div>
            </a>
          </div>
          <div className="col-3">
            <a
              href="/search-list"
              className="text-decoration-none link-dark"
            >
              <div className="card border-0">
                <img
                  src="imgs/d7.png"
                  className="img-fluid m-auto ch-70 cw-70 rounded-pill"
                  alt="#"
                />
                <div className="card-body text-center px-0 pb-0">
                  <h6 className="card-title text-muted m-0">Fries</h6>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item border-0">
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body px-0 pb-0">
                <div className="row align-items-end">
                  <div className="col-3">
                    <div className="card border-0">
                      <img
                        src="imgs/d2.png"
                        className="img-fluid m-auto ch-70"
                        alt="#"
                      />
                      <div className="card-body text-center px-0 pb-0">
                        <h6 className="card-title text-muted m-0">Rolls</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="card border-0">
                      <img
                        src="imgs/d6.png"
                        className="img-fluid m-auto ch-70"
                        alt="#"
                      />
                      <div className="card-body text-center px-0 pb-0">
                        <h6 className="card-title text-muted m-0">Chaat</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="card border-0">
                      <img
                        src="imgs/d8.png"
                        className="img-fluid m-auto ch-70"
                        alt="#"
                      />
                      <div className="card-body text-center px-0 pb-0">
                        <h6 className="card-title text-muted m-0">Healthy</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="card border-0">
                      <img
                        src="imgs/d7.png"
                        className="img-fluid m-auto ch-70"
                        alt="#"
                      />
                      <div className="card-body text-center px-0 pb-0">
                        <h6 className="card-title text-muted m-0">Fries</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="btn-light bg-lgiht shadow-none w-100 border-0 btn mt-3 collapsed small"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                See more
              </button>
            </h2>
          </div>
        </div>
      </div>

      <div className="p-3">
        <h4 className="fw-bold mb-3">783 restaurants around you</h4>
        <div className="row gy-3">
          <div className="col-12 col-md-4">
            <a
              href="/search-list"
              className="text-decoration-none link-dark"
            >
              <div className="card rounded-4 shadow border-0 overflow-hidden">
                <div className="position-relative">
                  <div className="product-back">
                    <img
                      src="imgs/1.jpeg"
                      alt=""
                      className="img-fluid rounded-top"
                    />
                  </div>
                  <div className="product-time shadow-sm position-absolute bottom-0 end-0 m-3">
                    <span className="badge bg-light text-dark">
                      <i className="fa-solid fa-stopwatch text-success"></i>
                      &nbsp;37 mins | 2 km
                    </span>
                  </div>
                  <div className="product-off bg-primary p-2 rounded-2 shadow-sm position-absolute top-0 end-0 m-3">
                    <div className="d-flex align-items-start gap-1 fw-bold text-white">
                      <div>
                        <i className="fa-solid fa-percent fs-5"></i>
                      </div>
                      <div>
                        <div>50% OFF</div>
                        <div className="fw-normal">Up to $100</div>
                      </div>
                    </div>
                  </div>
                  <div className="position-absolute bottom-0 start-0 bg-danger p-1 rounded-end text-white mb-3">
                    <div className="fw-bold">Extra 15% OFF with Pro</div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <div className="h4 fw-bold">La Pino'z Pizza</div>
                    <div>
                      <span className="badge bg-success">
                        4.2&nbsp;<i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between text-muted h6 m-0 fw-normal">
                    <div>Pizza, Fast Food, Beverages</div>
                    <div>$200 for one</div>
                  </div>
                </div>
                <div className="card-footer p-3 border-0">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-2">
                      <div>
                        <img
                          src="imgs/delivery.png"
                          alt=""
                          className="img-fluid ch-30"
                        />
                      </div>
                      <div className="text-muted small">
                        Follows all Max Safety measures to
                        <br /> ensure your food id safe
                      </div>
                    </div>
                    <div>
                      <img
                        src="imgs/graph-up.png"
                        alt=""
                        className="img-fluid ch-30 cw-30"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-12 col-md-4">
            <a
              href="/search-list"
              className="text-decoration-none link-dark"
            >
              <div className="card rounded-4 shadow border-0 overflow-hidden">
                <div className="position-relative">
                  <div className="product-veg bg-success  opacity-75 text-center text-white p-2">
                    <span>
                      <i className="fa-brands fa-envira"></i>
                    </span>
                    &nbsp;Pure Veg Resturant
                  </div>
                  <div className="product-back-two">
                    <img
                      src="imgs/2.jpeg"
                      alt=""
                      className="img-fluid rounded-top"
                    />
                  </div>
                  <div className="product-time shadow-sm position-absolute bottom-0 end-0 m-3">
                    <span className="badge bg-light text-dark">
                      <i className="fa-solid fa-stopwatch text-success"></i>
                      &nbsp;30 mins | 1 km
                    </span>
                  </div>
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <div className="h4 fw-bold">La Pino'z Burger</div>
                    <div>
                      <span className="badge bg-success">
                        4.0&nbsp;<i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between text-muted h6 m-0 fw-normal">
                    <div>Burger, Fast Food, Beverages</div>
                    <div>$80 for one</div>
                  </div>
                </div>
                <div className="card-footer p-3 border-0">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-2">
                      <div>
                        <img
                          src="imgs/delivery.png"
                          alt=""
                          className="img-fluid ch-30"
                        />
                      </div>
                      <div className="text-muted small">
                        Follows all Max Safety measures to
                        <br /> ensure your food id safe
                      </div>
                    </div>
                    <div>
                      <img
                        src="imgs/graph-up.png"
                        alt=""
                        className="img-fluid ch-30 cw-30"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-12 col-md-4">
            <a
              href="/search-list"
              className="text-decoration-none link-dark"
            >
              <div className="card rounded-4 shadow border-0 overflow-hidden">
                <div className="position-relative">
                  <div className="product-back">
                    <img
                      src="imgs/3.jpeg"
                      alt=""
                      className="img-fluid rounded-top"
                    />
                  </div>
                  <div className="product-time shadow-sm position-absolute bottom-0 end-0 m-3">
                    <span className="badge bg-light text-dark">
                      <i className="fa-solid fa-stopwatch text-success"></i>
                      &nbsp;25 mins | 1.5 km
                    </span>
                  </div>
                  <div className="product-off bg-primary p-2 rounded-2 shadow-sm position-absolute top-0 end-0 m-3">
                    <div className="d-flex align-items-start gap-1 fw-bold text-white">
                      <div>
                        <i className="fa-solid fa-percent fs-5"></i>
                      </div>
                      <div>
                        <div>40% OFF</div>
                        <div className="fw-normal">Up to $100</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <div className="h4 fw-bold">
                      Sharma Sweets And Fast Food
                    </div>
                    <div>
                      <span className="badge bg-success">
                        4.5&nbsp;<i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between text-muted h6 m-0 fw-normal">
                    <div>North India</div>
                    <div>$100 for one</div>
                  </div>
                </div>
                <div className="card-footer p-3 border-0">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-2">
                      <div>
                        <img
                          src="imgs/delivery.png"
                          alt=""
                          className="img-fluid ch-30"
                        />
                      </div>
                      <div className="text-muted small">
                        Follows all Max Safety measures to
                        <br /> ensure your food id safe
                      </div>
                    </div>
                    <div>
                      <img
                        src="imgs/graph-up.png"
                        alt=""
                        className="img-fluid ch-30 cw-30"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-12 col-md-4">
            <a
              href="/search-list"
              className="text-decoration-none link-dark"
            >
              <div className="card rounded-4 shadow border-0 overflow-hidden">
                <div className="position-relative">
                  <div className="product-back">
                    <img
                      src="imgs/4.jpeg"
                      alt=""
                      className="img-fluid rounded-top"
                    />
                  </div>
                  <div className="product-time shadow-sm position-absolute bottom-0 end-0 m-3">
                    <span className="badge bg-light text-dark">
                      <i className="fa-solid fa-stopwatch text-success"></i>
                      &nbsp;28 mins | 1 km
                    </span>
                  </div>
                  <div className="product-off bg-primary p-2 rounded-2 shadow-sm position-absolute top-0 end-0 m-3">
                    <div className="d-flex align-items-start gap-1 fw-bold text-white">
                      <div>
                        <i className="fa-solid fa-percent fs-5"></i>
                      </div>
                      <div>
                        <div>10% OFF</div>
                        <div className="fw-normal">Up to $100</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <div className="h4 fw-bold">Tibet Kitchen</div>
                    <div>
                      <span className="badge bg-success">
                        4.5&nbsp;<i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between text-muted h6 m-0 fw-normal">
                    <div>Fast Food, CHinese</div>
                    <div>$100 for one</div>
                  </div>
                </div>
                <div className="card-footer p-3 border-0">
                  <div className="d-flex align-items-center gap-2">
                    <div>
                      <img
                        src="imgs/graph-up.png"
                        alt=""
                        className="img-fluid ch-30 cw-30"
                      />
                    </div>
                    <div className="text-muted">
                      4300+ orders pplaced from here recently
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-12 col-md-4">
            <a
              href="/search-list"
              className="text-decoration-none link-dark"
            >
              <div className="card rounded-4 shadow border-0 overflow-hidden">
                <div className="position-relative">
                  <div className="product-back">
                    <img
                      src="imgs/5.jpeg"
                      alt=""
                      className="img-fluid rounded-top"
                    />
                  </div>
                  <div className="product-time shadow-sm position-absolute bottom-0 end-0 m-3">
                    <span className="badge bg-light text-dark">
                      <i className="fa-solid fa-stopwatch text-success"></i>
                      &nbsp;25 mins | 1.5 km
                    </span>
                  </div>
                  <div className="product-off bg-primary p-2 rounded-2 shadow-sm position-absolute top-0 end-0 m-3">
                    <div className="d-flex align-items-start gap-1 fw-bold text-white">
                      <div>
                        <i className="fa-solid fa-percent fs-5"></i>
                      </div>
                      <div>
                        <div>40% OFF</div>
                        <div className="fw-normal">Up to $100</div>
                      </div>
                    </div>
                  </div>
                  <div className="position-absolute bottom-0 start-0 bg-danger p-1 rounded-end text-white mb-3">
                    <div className="fw-bold">Extra 10% OFF with Pro</div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <div className="h4 fw-bold">Grill Masters</div>
                    <div>
                      <span className="badge bg-success">
                        4.2&nbsp;<i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between text-muted h6 m-0 fw-normal">
                    <div>Pizza, Burger, Fast Food</div>
                    <div>$100 for one</div>
                  </div>
                </div>
                <div className="card-footer p-3 border-0">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-2">
                      <div>
                        <img
                          src="imgs/graph-up.png"
                          alt=""
                          className="img-fluid ch-30 cw-30"
                        />
                      </div>
                      <div className="text-muted">
                        2175+ orders pplaced from here recently
                      </div>
                    </div>
                    <div>
                      <img
                        src="imgs/delivery.png"
                        alt=""
                        className="img-fluid ch-30"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="pt-4 pb-5"></div>
      <div className="fixed-bottom bg-white shadow px-3 py-2 osahan-nav-bottom">
        <div className="row links">
          <div className="col-3 text-center">
            <a href="/">
              <span>
                <i className="bi bi-truck h1 active"></i>
              </span>
              <p className="m-0">Delivery</p>
            </a>
          </div>
          <div className="col-3 p-0 text-center">
            <a href="/offers">
              <span>
                <i className="bi bi-percent h1"></i>
              </span>
              <p className="m-0">Offers</p>
            </a>
          </div>
          <div className="col-3 p-0 text-center">
            <a href="/cart">
              <span>
                <i className="bi bi-basket h1"></i>
              </span>
              <p className="m-0">Cart</p>
            </a>
          </div>
          <div className="col-3 p-0 text-center">
            <a href="/your-order">
              <span>
                <i className="bi bi-receipt h1"></i>
              </span>
              <p className="m-0">History</p>
            </a>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
          <div className="modal-content border-0">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Add Your Location
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="input-group border rounded-3 mb-3 shadow-sm">
                  <span className="input-group-text bg-white border-0">
                    <i className="bi bi-search"></i>
                  </span>
                  <input
                    type="text"
                    className="shadow-none form-control bg-white border-0 ps-0"
                    placeholder="bang"
                  />
                </div>
              </form>
              <div
                data-bs-dismiss="modal"
                className="d-flex align-items-center gap-3 mb-3 px-0"
              >
                <div>
                  <i className="fa-solid fa-location-crosshairs text-danger"></i>
                </div>
                <div>Use Current Location</div>
              </div>
              <div className="text-muted text-uppercase small mb-1">
                Search Results
              </div>
              <div
                data-bs-dismiss="modal"
                className="d-flex align-items-center gap-3 border-bottom py-3"
              >
                <span>
                  <i className="bi bi-search h6"></i>
                </span>
                <div className="lh-sm">
                  <h6 className="mb-1">Bangalore</h6>
                  <p className="text-muted m-0">Karnataka, India</p>
                </div>
              </div>
              <div
                data-bs-dismiss="modal"
                className="d-flex align-items-center gap-3 border-bottom py-3"
              >
                <span>
                  <i className="bi bi-search h6"></i>
                </span>
                <div className="lh-sm">
                  <h6 className="mb-1">Bangalore internaltional airport</h6>
                  <p className="text-muted m-0">
                    Karmpegowda.in't Airport, Hunachur, karnataka, India
                  </p>
                </div>
              </div>
              <div
                data-bs-dismiss="modal"
                className="d-flex align-items-center gap-3 border-bottom py-3"
              >
                <span>
                  <i className="bi bi-search h6"></i>
                </span>
                <div className="lh-sm">
                  <h6 className="mb-1">Railway Station back gate</h6>
                  <p className="text-muted m-0">
                    M.G. Railway Colony, Majestic, Bangaluru
                  </p>
                </div>
              </div>
              <div
                data-bs-dismiss="modal"
                className="d-flex align-items-center gap-3 pt-3"
              >
                <span>
                  <i className="bi bi-search h6"></i>
                </span>
                <div className="lh-sm">
                  <h6 className="mb-1">Bangalore Cant</h6>
                  <p className="text-muted m-0">
                    Cantonent Railway Station Road, Contonment Railway
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="staticBackdrop2"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content border-0">
            <div className="modal-header">
              <h5 className="modal-title">Sort by</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="form-check d-flex justify-content-between mb-3 px-0 fs-6">
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Relevance
                </label>
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  defaultChecked
                />
              </div>
              <div className="form-check d-flex justify-content-between mb-3 px-0 fs-6">
                <label
                  className="form-check-label text-muted"
                  htmlFor="flexRadioDefault2"
                >
                  Rating: High To Low
                </label>
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
              </div>
              <div className="form-check d-flex justify-content-between mb-3 px-0 fs-6">
                <label
                  className="form-check-label text-muted"
                  htmlFor="flexRadioDefault3"
                >
                  Cost: Low To High
                </label>
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault3"
                />
              </div>
              <div className="form-check d-flex justify-content-between mb-0 px-0 fs-6">
                <label
                  className="form-check-label text-muted"
                  htmlFor="flexRadioDefault4"
                >
                  Cost: High To Low
                </label>
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault4"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-white text-danger"
                data-bs-dismiss="modal"
              >
                Clear All
              </button>
              <button type="button" className="btn btn-danger rounded-md">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}