export default function EditProfile() {
  return (
    <>
      <div className="bg-white shadow-sm p-3">
         <div className="d-flex align-items-center">
            <div className="gap-3 d-flex align-items-center">
               <a href="/">
                  <i className="bi bi-arrow-left d-flex text-danger h2 m-0 back-page"></i>
               </a>
               <h3 className="fw-bold m-0">Edit Profile</h3>
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
      <div className="p-3 text-center bg-light">
         <div>  <img src="img/user.jpeg" alt="" className="img-fluid cw-70 ch-70 rounded-pill mb-3" /></div>
         <a href="#" className="btn btn-sm btn-outline-danger">Edit Photo</a>
      </div>
      <div className="p-3">
         <div>
            <form>
               <div className="mb-3">
                  <label className="form-label text-muted">Name*</label>
                  <input type="text" className="shadow-none form-control" defaultValue="yourname" />
               </div>
               <div className="mb-3">
                  <label className="form-label text-muted">Phone Number</label>
                  <div className="input-group">
                     <span className="input-group-text bg-white">+91</span>
                     <input type="text" className="shadow-none form-control" placeholder="" defaultValue="1234567890" />
                     <span className="input-group-text bg-white">
                      <a href="#" className="text-decoration-none text-danger"> Change</a>
                     </span>
                  </div>
               </div>
               <div className="mb-3">
                  <label className="form-label text-muted">Email</label>
                  <div className="input-group">
                     <input type="email" className="shadow-none form-control" placeholder="Username" defaultValue="example@gmail.com" />
                     <span className="input-group-text bg-white">
                      <a href="#" className="text-decoration-none text-danger"> Change</a>
                     </span>
                  </div>
               </div>
               <div className="mb-3">
                  <label className="form-label text-muted">Location</label>
                  <input type="email" className="shadow-none form-control" defaultValue="Ludhiana" />
               </div>
               <div className="mb-3">
                  <label className="form-label text-muted fw-bold">Description</label>
                  <input
                    type="text"
                    className="shadow-none form-control text-muted"
                    defaultValue="Tell us a little something about yourself (in less than 150 characters)"
                  />
               </div>
            </form>
         </div>
      </div>
      <div className="p-5"></div>
      <div className="fixed-bottom p-3">
         <div className="d-grid">
            <a href="/" className="btn btn-danger btn-lg">Save changes</a>
         </div>
      </div>
    </>
  );
}
