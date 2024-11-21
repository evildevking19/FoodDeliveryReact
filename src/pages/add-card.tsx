export default function AddCard() {
  return (
    <>
      <div className="bg-white shadow-sm p-3">
        <div className="d-flex align-items-center">
          <div className="gap-3 d-flex align-items-center">
            <a href="/payment">
              <i className="bi bi-arrow-left d-flex text-danger h2 m-0 back-page"></i>
            </a>
            <h3 className="fw-bold m-0">Add Card</h3>
          </div>
          <div className="ms-auto gap-3 d-flex align-items-center">
            <a href="/notifications" className="link-dark">
              <i className="bi bi-bell d-flex m-0 h2"></i>
            </a>
            <a className="toggle osahan-toggle text-dark m-0" href="#">
              <i className="bi bi-list d-flex m-0 h1"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="p-3">
        <div className="mb-4">
          <h4>Add a card</h4>
          <p className="text-muted">
            We accept Credit and Debit Cards From Visa, Mastercard, Sodexo,
            Rupay, American Express, Maestro & Diners.
          </p>
        </div>
        <form className="mb-4">
          <div className="mb-3">
            <label className="form-label text-muted">Name on card*</label>
            <input
              type="text"
              className="shadow-none form-control"
              placeholder="Name on card"
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-muted">Card number*</label>
            <input
              type="text"
              className="shadow-none form-control"
              placeholder="Card number"
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-muted">Expiry date*</label>
            <input
              type="text"
              className="shadow-none form-control"
              placeholder="Expiry date"
            />
          </div>
          <div className="mb-0">
            <label className="form-label text-muted">Nickname For Card*</label>
            <div className="d-flex gap-2">
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio1"
                defaultChecked
              />
              <label
                className="btn btn-outline-danger btn-sm"
                htmlFor="btnradio1"
              >
                Personal
              </label>
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio2"
              />
              <label
                className="btn btn-outline-danger btn-sm"
                htmlFor="btnradio2"
              >
                Business
              </label>
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio3"
              />
              <label
                className="btn btn-outline-danger btn-sm"
                htmlFor="btnradio3"
              >
                Other
              </label>
            </div>
          </div>
        </form>
        <hr />
        <div className="text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          doloremque culpa amet adipisci asperiores commodi sunt a ab,
          consequuntur inventore minus odio deleniti.
        </div>
      </div>
      <div className="p-5"></div>

      <div className="fixed-bottom bg-white p-3">
        <a href="/payment" className="btn btn-danger btn-lg d-grid">
          Save Card
        </a>
      </div>
    </>
  );
}
