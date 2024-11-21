export default function EnableLocation() {
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
      <div className="p-3 text-center">
         <img src="imgs/pin.png" alt="" className="img-fluid" />
         <div className="text-center">
            <div className="display-4 fw-bold mt-4 mb-2">We don't have your<br /> location, yet!</div>
            <div className="fs-5 text-muted">Set your location to start exploring<br /> restaurants near you</div>
         </div>
         <div className="pt-4 pb-5"></div>
         <div className="d-grid fixed-bottom gap-2 p-3">
            <a href="/location" className="btn btn-danger btn-lg">
              <i className="fa-solid fa-location-crosshairs"></i>&nbsp;Enable Device Location
            </a>
            <a href="/location" className="btn btn-outline-danger btn-lg">Enter Your Location Manually</a>
         </div>
      </div>
    </>
  );
}
