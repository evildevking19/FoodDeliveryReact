export default function Location() {
  return (
    <>
      <div className="bg-white fixed-top shadow-sm p-3">
         <div className="d-flex align-items-center">
            <div className="gap-3 d-flex align-items-center">
               <a href="/">
                  <i className="bi bi-arrow-left d-flex text-danger h2 m-0 back-page"></i>
               </a>
               <h3 className="fw-bold m-0">Confirm delivery Location</h3>
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
      <div>
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54820.77171390824!2d75.15290850394938!3d30.82230855048896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a088ea744ea81%3A0x3e99f7e54a9b5ae5!2sNature%20Park!5e0!3m2!1sen!2sin!4v1647947561512!5m2!1sen!2sin" className="w-100 vh-100 border-0" allowFullScreen loading="lazy"></iframe>
      </div>
      <div className="bg-white rounded-top fixed-bottom p-3">
         <div className="d-flex align-items-center justify-content-between mb-3">
            <div className="d-flex align-items-center gap-3">
               <div><i className="fa-solid fa-location-dot text-danger h4"></i></div>
               <div>
                  <h4 className="fw-bold mb-1">Akshya Nagar</h4>
                  <p className="text-muted m-0">Raurthy Nagar, Bangalore-56001</p>
               </div>
            </div>
            <div>
               <a href="/personal-info" className="text-decoration-none text-danger text-uppercase">change</a>
            </div>
         </div>
         <div className="d-grid">
            <a href="/personal-info" className="btn btn-danger btn-lg">Confirm Location</a>
         </div>
      </div>
    </>
  );
}
