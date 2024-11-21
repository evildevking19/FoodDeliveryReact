export default function Signup() {
  return (
    <>
      <div><img src="imgs/sign-up-bg.png" alt="" className="img-fluid" /></div>
      <div className="bg-white p-4">
         <div className="text-center px-4 mb-4">
            <h1 className="fw-bold">India's #1 Food Delivery and Dining App</h1>
         </div>
         <div className="d-flex gap-3 align-items-center justify-content-center mb-2">
            <div className="w-25">
               <hr />
            </div>
            <div className="text-muted">Log in or sign up</div>
            <div className="w-25">
               <hr />
            </div>
         </div>
         <div className="mb-3">
            <form>
               <div className="input-group mb-2">
                  <span className="input-group-text rounded-3 bg-white me-2 p-0">
                     <select className="form-select border-0" aria-label="Default select example" >
                        <option selected>+91</option>
                        <option defaultValue="1">+01</option>
                        <option defaultValue="2">+65</option>
                        <option defaultValue="3">+92</option>
                     </select>
                  </span>
                  <input type="number" className="shadow-none form-control rounded-3" placeholder="Enter Your Number" defaultValue="1234567890" required />
               </div>
               <div className="d-grid">
                  <a href="/otp-verify" className="btn btn-danger btn-lg">Continue</a>
               </div>
            </form>
         </div>
         <div className="d-flex gap-3 align-items-center justify-content-center mb-2">
            <div className="w-50">
               <hr />
            </div>
            <div className="text-muted">or</div>
            <div className="w-50">
               <hr />
            </div>
         </div>
         <div className="d-flex gap-3 align-items-center justify-content-center mb-4">
            <div><a href="/" className="text-decoration-none link-dark btn btn-light ch-40 cw-40 p-0 d-flex align-items-center justify-content-center border rounded-pill h1 text-muted"><i className="bi bi-google d-flex"></i></a></div>
            <div><a href="/" className="text-decoration-none link-dark btn btn-light ch-40 cw-40 p-0 d-flex align-items-center justify-content-center border rounded-pill h1 text-muted"><i className="bi bi-apple d-flex"></i></a></div>
            <div><a href="/" className="text-decoration-none link-dark btn btn-light ch-40 cw-40 p-0 d-flex align-items-center justify-content-center border rounded-pill h1 text-muted"><i className="bi bi-facebook d-flex"></i></a></div>
            <div><a href="/" className="text-decoration-none link-dark btn btn-light ch-40 cw-40 p-0 d-flex align-items-center justify-content-center border rounded-pill h1 text-muted"><i className="bi bi-twitter d-flex"></i></a></div>
         </div>
         <div className="text-center">
            <p className="small mb-2 text-muted">By continuing you agree to our</p>
            <div className="d-flex justify-content-center gap-3 small">
               <div><a href="#" className="link-dark">Terms of Service</a></div>
               <div><a href="#" className="link-dark">Privacy Policy</a></div>
               <div><a href="#" className="link-dark">Content Policy</a></div>
            </div>
         </div>
      </div>
    </>
  );
}
