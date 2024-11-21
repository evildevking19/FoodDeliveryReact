export default function OrderDetails() {
  return (
    <>
      <div className="bg-white shadow-sm p-3">
         <div className="d-flex align-items-center">
            <div className="gap-3 d-flex align-items-center">
               <a href="/"><i className="bi bi-arrow-left d-flex text-danger h2 m-0 back-page"></i></a>
               <h3 className="fw-bold m-0">Order Details</h3>
            </div>
            <div className="ms-auto gap-3 d-flex align-items-center">
               <a href="/support" className="text-decoration-none text-danger"><i
                  className="fa-solid fa-comment-dots"></i>&nbsp;Support</a>
               <a href="/notifications" className="link-dark"><i className="bi bi-bell d-flex m-0 h2"></i></a>
               <a className="toggle osahan-toggle text-dark m-0" href="#"><i className="bi bi-list d-flex m-0 h1"></i></a>
            </div>
         </div>
      </div>
      <div className="p-3">
         <div>
            <h5 className="fw-bold mb-1">Meshi Vaishnu Dhaba</h5>
            <p className="text-muted"><i className="bi bi-geo-alt me-1"></i> Industrial Area, Ludhiana</p>
            <div><a href="#" className="text-decoration-none text-danger fs-6">Download summary&nbsp;<i
               className="fa-solid fa-download"></i></a></div>
         </div>
         <div className="my-3 bg-success-subtle p-2 text-success text-center rounded">This order with Meshi Vaishnu Dhaba was delivered</div>
         <div className="d-flex align-items-center justify-content-between">
            <div className="fw-bold fs-3">Your Order</div>
            <div><a href="#" className="btn btn-outline-danger rounded-pill btn-sm">Mark as favourite</a></div>
         </div>
         <hr />
         <div className="m-0">
            <div className="d-flex align-items-center gap-3 mb-3">
               <img src="imgs/veg.jpeg" alt="" className="img-fluid ch-20" />
               <div className="lh-sm">
                  <h4 className="mb-1">Mushroom Matar</h4>
                  <div className="text-muted fw-normal">Quantity: Half</div>
               </div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
               <div className="d-flex gap-2 align-items-center fs-5">
                  <div className="rounded border border-success small px-2 d-flex">1</div>
                  <div>x</div>
                  <div>$150</div>
               </div>
               <div className="fs-5 fw-bold"><del className="small text-muted">$150</del>&nbsp;$127.50</div>
            </div>
         </div>
         <hr />
         <div className="m-0">
            <div className="d-flex align-items-center gap-3 mb-3">
               <img src="imgs/veg.jpeg" alt="" className="img-fluid ch-20" />
               <div className="lh-sm">
                  <h4 className="mb-1">Plain Rice</h4>
                  <div className="text-muted fw-normal">Quantity: Half</div>
               </div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
               <div className="d-flex gap-2 align-items-center fs-5">
                  <div className="rounded border border-success small px-2 d-flex">1</div>
                  <div>x</div>
                  <div>$90</div>
               </div>
               <div className="fs-5 fw-bold"><del className="small text-muted">$90</del>&nbsp;$76.50</div>
            </div>
         </div>
         <hr />
         <div>
            <div className="d-flex justify-content-between mb-1">
               <div>Items Total</div>
               <div><del>$240</del>&nbsp;$204.50</div>
            </div>
            <div className="d-flex justify-content-between text-primary mb-1">
               <div>Coupon - (MAXSAFETY)</div>
               <div>you saved&nbsp;$204.50</div>
            </div>
            <div className="d-flex justify-content-between mb-1">
               <div>Taxes</div>
               <div>$5.20</div>
            </div>
            <div className="d-flex justify-content-between mb-1">
               <div>Delivery Charge</div>
               <div>$9,00</div>
            </div>
            <div className="d-flex justify-content-between mb-1">
               <div>Donate $2 to Feeding India</div>
               <div>$2,00</div>
            </div>
            <div className="d-flex justify-content-between mb-1">
               <div>Cash Round Off</div>
               <div>$0,80</div>
            </div>
            <div className="d-flex justify-content-between h3 fw-bold my-3">
               <div>Grand Total</div>
               <div>$101,00</div>
            </div>
            <div className="d-flex justify-content-between border border-primary rounded text-primary p-2 h4 mb-0">
               <div>Your total savings</div>
               <div>$156</div>
            </div>
         </div>
         <div className="pt-4">
            <h5 className="fw-bold mb-3">Order Details</h5>
            <div className="">
               <div className="text-muted text-uppercase mb-0 small">order number</div>
               <div className="fs-5">2469351462</div>
            </div>
            <div className="my-2">
               <div className="text-muted text-uppercase mb-0 small">payment</div>
               <div className="fs-5">Cash on delivery</div>
            </div>
            <div className="">
               <div className="text-muted text-uppercase mb-0 small">date</div>
               <div className="fs-5">March 04, 2023 at 02:22 PM</div>
            </div>
            <div className="my-2">
               <div className="text-muted text-uppercase mb-0 small">phone number</div>
               <div className="fs-5">8872306XXX</div>
            </div>
            <div>
               <div className="text-muted text-uppercase mb-0 small">deliver to</div>
               <div className="fs-5">1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</div>
            </div>
         </div>
         <hr />
         <h6 className="text-danger fw-bold">Call Meshi Vaishnu Dhaba (0161 2537192)</h6>
         <div className="text-dark">
            <p className="m-0">Meshi Vaishnu Dhaba</p>
            <p className="m-0 text-muted">Lic. No. 43434534534534</p>
         </div>
      </div>
      <div className="pb-5 pt-3"></div>
      <div className="p-3 fixed-bottom">
         <div className="d-grid">
            <a href="/order-confirm" className="btn btn-danger btn-lg">Repeat Order</a>
         </div>
      </div>
    </>
  );
}
