export default function Notifications() {
  return (
    <>
      <div className="bg-white shadow-sm p-3">
         <div className="d-flex align-items-center">
            <div className="gap-3 d-flex align-items-center">
               <a href="/">
                  <i className="bi bi-arrow-left d-flex text-danger h2 m-0 back-page"></i>
               </a>
               <h3 className="fw-bold m-0">Notification</h3>
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
      <div className="p-3 notification-page">
         <div className="d-flex gap-3">
            <div><img src="imgs/logo.png" alt="" className="img-fluid rounded-circle" /></div>
            <div>
               <div className="h6 mb-2">Order delivered</div>
               <div className="mb-2">Your order from Meshi Vaishnu Dhaba has been delivered. Feel free to tio the delivery partner.</div>
               <p className="small m-0 text-muted">2 days ago</p>
            </div>
         </div>
         <hr />
         <div className="d-flex gap-3">
            <div><img src="imgs/logo.png" alt="" className="img-fluid rounded-circle" /></div>
            <div>
               <div className="h6 mb-2">Order is arriving soon!</div>
               <div className="mb-2">Your delivery partner has almost reached your location.</div>
               <p className="small m-0 text-muted">2 days ago</p>
            </div>
         </div>
         <hr />
         <div className="d-flex gap-3">
            <div><img src="imgs/logo.png" alt="" className="img-fluid rounded-circle" /></div>
            <div>
               <div className="h6 mb-2">Order is on its way!</div>
               <div className="mb-2">It should reach your locaton shortly. Hands are sanitized</div>
               <p className="small m-0 text-muted">2 days ago</p>
            </div>
         </div>
         <hr />
         <div className="d-flex gap-3">
            <div><img src="imgs/logo.png" alt="" className="img-fluid rounded-circle" /></div>
            <div>
               <div className="h6 mb-2">Your order was delivered at your door</div>
               <div className="mb-2">As requested by you, your order has been Kept at door. Please rate your delivery experience</div>
               <p className="small m-0 text-muted">1 months ago</p>
            </div>
         </div>
         <hr />
         <div className="d-flex gap-3">
            <div><img src="imgs/logo.png" alt="" className="img-fluid rounded-circle" /></div>
            <div>
               <div className="h6 mb-2">Knock! Knock!</div>
               <div className="mb-2">Arjun reached your location in just 16 mins. THey should be at your doorstep shortly. Feel free to tip them.</div>
               <p className="small m-0 text-muted">1 months ago</p>
            </div>
         </div>
         <hr />
         <div className="d-flex gap-3">
            <div><img src="imgs/logo.png" alt="" className="img-fluid rounded-circle" /></div>
            <div>
               <div className="h6 mb-2">Order is on its way!</div>
               <div className="mb-2">It should reach your location in 20 mins. Hands are sanitized</div>
               <p className="small m-0 text-muted">1 months ago</p>
            </div>
         </div>
         <hr />
         <div className="d-flex gap-3">
            <div><img src="imgs/logo.png" alt="" className="img-fluid rounded-circle" /></div>
            <div>
               <div className="h6 mb-2">Arjun is your delivery partner</div>
               <div className="mb-2">THey are on their way to pick your order.</div>
               <p className="small m-0 text-muted">1 months ago</p>
            </div>
         </div>
      </div>
    </>
  );
}
