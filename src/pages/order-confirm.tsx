export default function OrderConfirm() {
  return (
    <>
      <div className="bg-white shadow-sm p-3">
         <div className="d-flex align-items-center">
            <div className="gap-3 d-flex align-items-center">
               <a href="/"><i className="bi bi-arrow-left d-flex text-danger h2 m-0 back-page"></i></a>
               <h3 className="fw-bold m-0">Your Order</h3>
            </div>
            <div className="ms-auto gap-3 d-flex align-items-center">
               <a href="/notifications" className="link-dark"><i className="bi bi-bell d-flex m-0 h2"></i></a>
               <a className="toggle osahan-toggle text-dark m-0" href="#"><i className="bi bi-list d-flex m-0 h1"></i></a>
            </div>
         </div>
      </div>
      <div className="my-5">
         <div className="text-center">
            <div className="mb-3 px-5"><img src="imgs/green-tick.png" className="img-fluid px-5" alt="#" /></div>
            <div className="h1 text-success mb-1">Your Order is Confirm!</div>
            <div className="fs-5">Delivery Soon</div>
         </div>
      </div>
      <div className="d-grid fixed-bottom gap-2 p-3">
         <a href="/order-details" className="btn btn-outline-danger btn-lg">Order Details</a>
         <a href="/" className="btn btn-danger btn-lg">Continue to shopping</a>
      </div>
    </>
  );
}
