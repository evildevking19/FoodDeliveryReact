export default function MyAddress() {
  return (
    <>
      <div className="bg-white shadow-sm p-3">
         <div className="d-flex align-items-center">
            <div className="gap-3 d-flex align-items-center">
               <a href="/">
                  <i className="bi bi-arrow-left d-flex text-danger h2 m-0 back-page"></i>
               </a>
               <h3 className="fw-bold m-0">My Addresses</h3>
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
      <div className="d-flex align-items-center gap-3 p-3">
         <div className="mb-auto"><i className="fa-solid fa-house h3 m-0"></i></div>
         <div>
            <h5 className="fw-bold mb-1">Home</h5>
            <p className="text-muted mb-2">Rammurthy nagar, Bangalore-560016,<br /> Akshya Nagar</p>
            <a href="/checkout" className="text-decoration-none text-danger">View delivery instructions&nbsp;<i
               className="fa-solid fa-caret-right"></i></a>
         </div>
         <div className="ms-auto text-end text-danger fs-5">
            <div className="rounded-circle border px-2 py-1 mb-2"><a href="/checkout"
               className="text-decoration-none text-danger"><i className="fa-solid fa-ellipsis"></i></a></div>
            <div className="rounded-circle border px-2 py-1"><a href="/checkout" className="text-decoration-none text-danger"><i
               className="fa-solid fa-share"></i></a></div>
         </div>
      </div>
      <div className="fixed-bottom p-3">
         <button type="button" className="btn btn-danger btn-lg w-100" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
         <i className="fa-solid fa-plus"></i>&nbsp;Add address
         </button>
      </div>
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1}
         aria-labelledby="staticBackdropLabel" aria-hidden="true">
         <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0">
               <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">Add new address</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div className="modal-body">
                  <div className="mb-3">
                     <label className="form-label text-muted">Name</label>
                     <input type="text" className="shadow-none form-control" placeholder="Name" />
                  </div>
                  <div className="mb-3">
                     <label className="form-label text-muted">Mobile number</label>
                     <input type="text" className="shadow-none form-control" placeholder="Mobile number" />
                  </div>
                  <div className="mb-3">
                     <label className="form-label text-muted">Full address</label>
                     <input type="text" className="shadow-none form-control" placeholder="Enter address" />
                  </div>
                  <div className="mb-3">
                     <label className="form-label text-muted">City</label>
                     <input type="text" className="shadow-none form-control" placeholder="Enter City" />
                  </div>
                  <div className="mb-0">
                     <label className="form-label text-muted">Pincode</label>
                     <input type="text" className="shadow-none form-control" placeholder="Enter Pincode" />
                  </div>
               </div>
               <div className="modal-footer">
                  <button type="button" className="btn btn-danger btn-lg w-100" data-bs-dismiss="modal">Add Address</button>
               </div>
            </div>
         </div>
      </div>
    </>
  );
}
