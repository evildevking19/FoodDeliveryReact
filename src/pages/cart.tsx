export default function Cart() {
  return (
    <>
      <div className="bg-white shadow-sm p-3 sticky-top">
        <div className="d-flex align-items-center">
          <div className="gap-3 d-flex align-items-center">
            <a href="/">
              <i className="bi bi-arrow-left d-flex text-danger h2 m-0 back-page"></i>
            </a>
            <h3 className="fw-bold m-0">Cart</h3>
          </div>
          <div className="ms-auto gap-3 d-flex align-items-center">
            <a
              href="/coupons"
              className="btn btn-white border text-muted btn-sm rounded"
            >
              <i className="fa-solid fa-tag"></i>&nbsp;Coupon
            </a>
            <a className="toggle osahan-toggle text-dark m-0" href="#">
              <i className="bi bi-list d-flex m-0 h1"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-white p-3 mb-3 shadow-sm">
        <div>
          <div className="mb-3 d-flex gap-2">
            <img
              src="imgs/veg.jpeg"
              className="img-fluid mb-auto ch-20"
              alt="#"
            />
            <div>
              <h6 className="fw-bold mb-1">Mushroom Matar</h6>
              <p className="mb-0">$150</p>
              <p className="small text-muted m-0">Pan, Personal</p>
            </div>
            <div className="ms-auto text-end cw-80">
              <div className="btn btn-white btn-sm border border-danger px-2 rounded">
                <div className="d-flex align-items-center justify-content-between gap-2">
                  <div className="minus">
                    <i className="fa-solid fa-minus text-danger"></i>
                  </div>
                  <input
                    className="shadow-none form-control text-center border-0 p-0 box"
                    type="text"
                    placeholder=""
                    aria-label="default input example"
                    defaultValue="1"
                  />
                  <div className="plus">
                    <i className="fa-solid fa-plus text-danger"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-3 d-flex gap-2">
            <img
              src="imgs/veg.jpeg"
              className="img-fluid mb-auto ch-20"
              alt="#"
            />
            <div>
              <h6 className="fw-bold mb-1">Plain Rice</h6>
              <p className="mb-0">$90</p>
              <p className="small text-muted m-0">Pan, Personal</p>
            </div>
            <div className="ms-auto text-end cw-80">
              <div className="btn btn-white btn-sm border border-danger px-2 rounded">
                <div className="d-flex align-items-center justify-content-between gap-2">
                  <div className="minus">
                    <i className="fa-solid fa-minus text-danger"></i>
                  </div>
                  <input
                    className="shadow-none form-control text-center border-0 p-0 box"
                    type="text"
                    placeholder=""
                    aria-label="default input example"
                    defaultValue="1"
                  />
                  <div className="plus">
                    <i className="fa-solid fa-plus text-danger"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <a
              href="/search-list"
              className="text-decoration-none text-danger"
            >
              <i className="fa-solid fa-plus"></i>&nbsp;Add more items
            </a>
          </div>
        </div>
        <hr />
        <div className="text-muted small">
          <i className="fa-solid fa-layer-group me-2"></i>&nbsp;Do you want to
          add cooking instructions?
        </div>
      </div>
      <div className="bg-white p-3 mb-3 shadow-sm">
        <a href="/coupons">
          <div className="d-flex justify-content-between">
            <div className="d-flex gap-2 h5 m-0">
              <div>
                <i className="fa-solid fa-tags text-primary"></i>
              </div>
              <div className="fw-bold text-muted">Use coupons</div>
            </div>
            <div>
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </div>
        </a>
      </div>
      <div className="bg-white p-3 mb-3 shadow-sm">
        <div className="d-flex justify-content-between">
          <div>Item Total</div>
          <div>$218.00</div>
        </div>
        <div className="accordion">
          <div className="accordion-item bg-white border-0">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
              <button
                className="accordion-button px-0 pt-3 pb-3 bg-white border-0 shadow-none h5 mb-0 fw-normal text-dark"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                Taxes & charges
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingTwo"
            >
              <div className="accordion-body px-0 pt-0">
                <div className="d-flex justify-content-between text-muted mb-2">
                  <div>Delivery Charges for 3 Km</div>
                  <div>
                    <span className="text-danger">
                      <del>$19</del>
                    </span>{" "}
                    FREE
                  </div>
                </div>
                <div className="d-flex justify-content-between text-muted">
                  <div>Taxes</div>
                  <div>$12.50</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between h4 fw-bold">
          <div>Grand Total</div>
          <div>$229.50</div>
        </div>
      </div>
      <div className="bg-white p-3 mb-3 shadow-sm">
        <div className="mb-2">
          <h5 className="fw-bold mb-2">Please tip your delivery partner</h5>
          <p className="text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
            aspernatur modi quasi laboriosam veritatis perferendis.
          </p>
        </div>
        <div className="d-flex gap-2">
          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio1"
            defaultChecked
          />
          <label className="btn btn-outline-danger btn-sm" htmlFor="btnradio1">
            <i className="bi bi-wallet"></i>&nbsp;$20
          </label>
          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio2"
          />
          <label className="btn btn-outline-danger btn-sm" htmlFor="btnradio2">
            <i className="bi bi-wallet"></i>&nbsp;$30
          </label>
          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio3"
          />
          <label className="btn btn-outline-danger btn-sm" htmlFor="btnradio3">
            <i className="bi bi-wallet"></i>&nbsp;$50
          </label>
          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio4"
          />
          <label className="btn btn-outline-danger btn-sm" htmlFor="btnradio4">
            <i className="bi bi-wallet"></i>&nbsp;Other
          </label>
        </div>
      </div>
      <div className="bg-white p-3 mb-3 shadow-sm">
        <div className="d-flex justify-content-between fw-bold">
          <h5 className="pe-5 mb-2">
            This order is relative to a COVID-19 emergency
          </h5>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue=""
              id="flexCheckDefault"
            />
          </div>
        </div>
        <div className="text-muted small mb-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          <br /> Eos rem fugiat nemo, error eveniet vero veritatis quam.
        </div>
      </div>
      <div className="bg-white p-3">
        <h5 className="fw-bold">Cancellation Policy</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In aliquam
          labore temporibus, quo ea accusantium repellendus pariatur.?
        </p>
        <div className="small">
          Avoid cacellation as it leads to food wastage
        </div>
      </div>
      <div className="pt-5 pb-4"></div>
      <div className="fixed-bottom p-3">
        <a href="/enable-location" className="btn btn-danger btn-lg d-grid">
          <div className="d-flex justify-content-between">
            <div></div>
            <div>Add personal details</div>
            <div>
              <i className="fa-solid fa-caret-right"></i>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
