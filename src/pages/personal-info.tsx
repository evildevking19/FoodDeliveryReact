export default function PersonalInfo() {
  return (
    <>
      <div className="bg-white shadow-sm p-3">
         <div className="d-flex align-items-center">
            <div className="gap-3 d-flex align-items-center">
               <a href="/"><i className="bi bi-arrow-left d-flex text-danger h2 m-0 back-page"></i></a>
               <h3 className="fw-bold m-0">Personal Info</h3>
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
         <form>
            <div className="mb-3">
               <label className="form-label text-muted">Name</label>
               <input type="text" className="shadow-none form-control" defaultValue="Askbootstrap" />
            </div>
            <div>
               <label className="form-label text-muted">Mobile Number</label>
               <div className="input-group mb-3">
                  <span className="input-group-text p-0">
                     <select className="form-select border-0" aria-label="Default select example">
                        <option selected>+91</option>
                        <option defaultValue="1">+01</option>
                        <option defaultValue="2">+65</option>
                        <option defaultValue="3">+92</option>
                     </select>
                  </span>
                  <input type="number" className="shadow-none form-control" placeholder="Enter Your Number" defaultValue="1234567890" required />
               </div>
            </div>
            <div className="d-grid">
               <button type="button" className="btn btn-outline-danger btn-lg" data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop">
               Continue
               </button>
            </div>
         </form>
      </div>
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1}
         aria-labelledby="staticBackdropLabel" aria-hidden="true">
         <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0">
               <div className="modal-header">
                  <h5 className="modal-title fw-bold" id="staticBackdropLabel">Enter address details</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div className="modal-body">
                  <div className="mb-3">
                     <label className="form-label text-muted">Save address as*</label>
                     <div className="d-flex gap-2">
                        <div>
                           <input type="radio" className="btn-check" name="btnradio" id="btnradio1" defaultChecked />
                           <label className="btn btn-outline-danger btn-sm" htmlFor="btnradio1">Home</label>
                        </div>
                        <div>
                           <input type="radio" className="btn-check" name="btnradio" id="btnradio2" />
                           <label className="btn btn-outline-danger btn-sm" htmlFor="btnradio2">Work</label>
                        </div>
                        <div>
                           <input type="radio" className="btn-check" name="btnradio" id="btnradio3" />
                           <label className="btn btn-outline-danger btn-sm" htmlFor="btnradio3">Hotel</label>
                        </div>
                        <div>
                           <input type="radio" className="btn-check" name="btnradio" id="btnradio4" />
                           <label className="btn btn-outline-danger btn-sm" htmlFor="btnradio4">Other</label>
                        </div>
                     </div>
                  </div>
                  <div className="mb-3">
                     <label className="form-label text-muted">Complete address*</label>
                     <input type="text" className="shadow-none form-control" placeholder="Complete Address" />
                  </div>
                  <div className="mb-3">
                     <label className="form-label text-muted">Floor (optional)*</label>
                     <input type="text" className="shadow-none form-control" placeholder="floor" />
                  </div>
                  <div className="mb-0">
                     <label className="form-label text-muted">Nearby landmark (optional)*</label>
                     <input type="text" className="shadow-none form-control" placeholder="Nearby landmark" />
                  </div>
               </div>
               <div className="modal-footer">
                  {/* <button type="button" className="btn btn-danger btn-lg" data-bs-dismiss="modal">Save Address</button> */}
                  <a href="/checkout" className="btn btn-danger btn-lg w-100">Save Address</a>
               </div>
            </div>
         </div>
      </div>
    </>
  );
}
