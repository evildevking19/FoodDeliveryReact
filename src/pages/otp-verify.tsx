export default function OtpVerify() {
  return (
    <>
      <div className="bg-white sticky-top shadow-sm p-3">
         <div className="d-flex align-items-center">
            <div className="gap-3 d-flex align-items-center">
               <a href="/"><i className="bi bi-arrow-left d-flex text-danger h2 m-0 back-page"></i></a>
               <h3 className="fw-bold m-0">OTP Verification</h3>
            </div>
            <div className="ms-auto gap-3 d-flex align-items-center">
               <a href="/notifications" className="link-dark"><i className="bi bi-bell d-flex m-0 h2"></i></a>
               <a className="toggle osahan-toggle text-dark m-0" href="#"><i className="bi bi-list d-flex m-0 h1"></i></a>
            </div>
         </div>
      </div>
      <div className="text-center my-5 h5">
         <div>We have sent a verification code to</div>
         <div className="fw-bold mt-2">+91-12345-67890</div>
      </div>
      <div className="text-center px-5">
         <div className="d-flex gap-3 mb-3">
            <div><input className="shadow-none form-control px-0 text-center" type="number" placeholder="" aria-label="default input example" defaultValue="5" /></div>
            <div><input className="shadow-none form-control px-0 text-center" type="number" placeholder="" aria-label="default input example" defaultValue="2" /></div>
            <div><input className="shadow-none form-control px-0 text-center" type="number" placeholder="" aria-label="default input example" defaultValue="7" /></div>
            <div><input className="shadow-none form-control px-0 text-center" type="number" placeholder="" aria-label="default input example" defaultValue="4" /></div>
            <div><input className="shadow-none form-control px-0 text-center" type="number" placeholder="" aria-label="default input example" defaultValue="9" /></div>
            <div><input className="shadow-none form-control px-0 text-center" type="number" placeholder="" aria-label="default input example" defaultValue="3" /></div>
         </div>
         <div className="d-flex d-grid gap-2 mb-3">
            <button type="button" className="btn btn-outline-secondary w-50 btn-sm">Resend SMS in 15</button>
            <button type="button" className="btn btn-outline-secondary w-50 btn-sm">Call me in 15</button>
         </div>
         <div>
            <a href="#" className="text-decoration-none a-danger">Try other login methods</a>
         </div>
      </div>
      <div className="bg-white fixed-bottom p-3">
         <a href="/" className="btn btn-danger btn-lg d-grid">Continue</a>
      </div>
    </>
  );
}
