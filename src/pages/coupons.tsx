export default function Coupons() {
  return (
    <>
      <div className="bg-white shadow-sm p-3">
         <div className="d-flex align-items-center">
            <div className="gap-3 d-flex align-items-center">
               <a href="/"><i className="bi bi-arrow-left d-flex text-danger h2 m-0 back-page"></i></a>
               <h3 className="fw-bold m-0">Coupons</h3>
            </div>
            <div className="ms-auto gap-3 d-flex align-items-center">
               <a href="/notifications" className="link-dark"><i className="bi bi-bell d-flex m-0 h2"></i></a>
               <a className="toggle osahan-toggle text-dark m-0" href="#"><i className="bi bi-list d-flex m-0 h1"></i></a>
            </div>
         </div>
      </div>
      <div className="p-3">
         <form>
            <input className="shadow-none form-control border-0 p-0" type="text" placeholder="Enter Coupon Code" aria-label="default input example" />
         </form>
      </div>
      <div className="bg-light p-3">
         <h5 className="m-0">Available Coupons</h5>
      </div>
      <div className="p-3">
         <div>
            <div className="mb-2">
               <div className="mb-3">
                  <img
                    src="img/p1.png"
                    alt=""
                    className="img-fluid ch-40 border rounded-2"
                  />
               </div>
               <div className="h4 m-0">Get 50% OFF up to $100</div>
            </div>
            <p className="text-muted">Valid on total defaultValue of items worth $159 or more.&nbsp;<span
               className="text-dark">View Details</span></p>
            <div className="d-flex justify-content-between pb-3 align-items-center">
               <div className="text-uppercase fw-bold border border-danger text-danger rounded px-2 py-1 h5 m-0">maxsafety</div>
               <div><a href="/offers" className="text-decoration-none text-danger">Apply</a></div>
            </div>
            <div className="text-primary">You will save $100 with this code</div>
         </div>
         <hr />
         <div>
            <div className="mb-2">
               <div className="mb-3"><img src="img/p1.png" alt="" className="img-fluid ch-40 border rounded-2" /></div>
               <div className="h4 m-0">50% OFF up to $100 and $30 Paytm cashback using Paytm</div>
            </div>
            <p className="text-muted">Valid on total defaultValue of items worth $159 or more.&nbsp;<span
               className="text-dark">View Details</span></p>
            <div className="d-flex justify-content-between pb-3 align-items-center">
               <div className="text-uppercase fw-bold border border-danger text-danger rounded px-2 py-1 h5 m-0">zompaytm</div>
               <div><a href="/offers" className="text-decoration-none text-danger">Apply</a></div>
            </div>
            <div className="text-primary">You will save $100 & get extra cashback with this code</div>
         </div>
         <hr />
         <div>
            <div className="mb-2">
               <div className="mb-3"><img src="img/p2.png" alt="" className="img-fluid ch-40 border rounded-2" /></div>
               <div className="h4 m-0">Get 60% OFF up to $140</div>
            </div>
            <p className="text-muted">Valid on total defaultValue of items worth $159 or more.&nbsp;<span
               className="text-dark">View Details</span></p>
            <div className="d-flex justify-content-between pb-3 align-items-center">
               <div className="text-uppercase fw-bold border border-danger text-danger rounded px-2 py-1 h5 m-0">simplparty</div>
               <div><a href="/offers" className="text-decoration-none text-danger">Apply</a></div>
            </div>
            <div className="text-primary">You will save $140 with this code</div>
         </div>
      </div>
    </>
  );
}
