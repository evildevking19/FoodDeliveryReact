export default function Wallet() {
  return (
    <>
      <div className="border-bottom bg-white shadow-sm p-3">
         <div className="d-flex align-items-center">
            <div className="gap-3 d-flex align-items-center">
               <a href="/">
                  <i className="bi bi-arrow-left d-flex text-danger h2 m-0 back-page"></i>
               </a>
               <button type="button" className="btn bg-white border-0 p-0" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                  <span className="text-danger h4 m-0"><i className="fa-solid fa-location-dot"></i>&nbsp;<span>Set Location</span>&nbsp;<i className="fa-solid fa-chevron-down"></i></span>
               </button>
            </div>
            <div className="ms-auto gap-3 d-flex align-items-center">
               <a href="/notifications" className="link-dark">
                  <i className="bi bi-bell d-flex m-0 h2"></i>
               </a>
               <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" className="osahan-toggle text-dark m-0" href="#">
                  <i className="bi bi-list d-flex m-0 h1"></i>
               </a>
            </div>
         </div>
      </div>
      <nav className="navbar navbar-light bg-white">
         <div className="container">
            <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasNavbar">
               <div className="border-bottom bg-white shadow-sm p-3">
                  <div className="d-flex align-items-center">
                     <div className="gap-3 d-flex align-items-center">
                        <button type="button" className="border-0 bg-white" data-bs-dismiss="offcanvas" aria-label="Close"><i className="bi bi-arrow-left d-flex text-danger h2 m-0 back-page"></i></button>
                        <button type="button" className="btn bg-white border-0 p-0" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                           <span className="text-danger h4 m-0"><i className="fa-solid fa-location-dot"></i>&nbsp;<span>Set
                              Location</span>&nbsp;<i className="fa-solid fa-chevron-down"></i>
                           </span>
                        </button>
                     </div>
                     <div className="ms-auto gap-3 d-flex align-items-center">
                        <a href="/notifications" className="link-dark">
                           <i className="bi bi-bell d-flex m-0 h2"></i>
                        </a>
                        <a href="/" className="link-dark">
                           <i className="bi bi-house d-flex m-0 h2"></i>
                        </a>
                     </div>
                  </div>
               </div>
               <div className="offcanvas-body">
                  <div className="bg-white sticky-top">
                     <h4 className="fw-bold mb-1">Your profile</h4>
                     <p>Log in or sign up to view your complete..</p>
                     <a href="/signup" className="btn btn-outline-danger d-grid">Continue</a>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                     <div className="text-center">
                        <a href="/signup" className="text-decoration-none link-dark">
                           <span><i className="fa-solid fa-heart h3"></i></span>
                           <p className="m-0">Likes</p>
                        </a>
                     </div>
                     <div className="text-center">
                        <a href="/notifications" className="text-decoration-none link-dark">
                           <span><i className="fa-solid fa-bell h3"></i></span>
                           <p className="m-0">Notifications</p>
                        </a>
                     </div>
                     <div className="text-center">
                        <a href="/setting" className="text-decoration-none link-dark">
                           <span><i className="fa-solid fa-gear h3"></i></span>
                           <p className="m-0">Settings</p>
                        </a>
                     </div>
                     <div className="text-center">
                        <a href="/payment" className="text-decoration-none link-dark">
                           <span><i className="fa-solid fa-credit-card h3"></i></span>
                           <p className="m-0">Payments</p>
                        </a>
                     </div>
                  </div>
                  <hr />
                  <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                     <li className="text-muted text-uppercase small mb-2">food orders</li>
                     <li className="nav-item">
                        <a className="nav-a" aria-current="page" href="/your-order">
                        <span><i className="fa-solid fa-bag-shopping cw-20 text-center me-1"></i></span>&nbsp;Your Orders
                        </a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-a" href="/your-order">
                        <span><i className="fa-solid fa-heart cw-20 text-center me-1"></i></span>&nbsp;Favorite Order
                        </a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-a" href="/your-order">
                        <span><i className="fa-solid fa-address-book cw-20 text-center me-1"></i></span>&nbsp;Address Book
                        </a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-a pb-0" href="/support">
                        <span><i className="fa-solid fa-receipt cw-20 text-center me-1"></i></span>&nbsp;Online Ordering Help
                        </a>
                     </li>
                     <li><hr /></li>
                     <li className="nav-item">
                        <a className="nav-a py-0" href="/your-order">
                        <span><i className="fa-solid fa-circle-info cw-20 text-center me-1"></i></span>&nbsp;About
                        </a>
                     </li>
                  </ul>
                  <hr />
                  <div className="pb-5">
                     <ul className="navbar-nav">
                        <li className="nav-item">
                           <a className="nav-a" href="/support">Send Feedback</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-a" href="/support">Rate us on the Play Store</a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </nav>
      <div>
         <div className="text-center p-3 border-bottom">
            <img src="imgs/wallet.png" alt="" className="img-fluid mb-3 px-5" />
            <h1 className="fw-bold mb-1">Edition Wallet</h1>
            <p className="text-muted">Seamless one-click checkout for all payments<br /> on Eatsome</p>
            <a href="/offers" className="btn btn-danger btn-lg d-grid">Activate Wallet</a>
         </div>
         <div className="d-flex align-items-center gap-3 p-3 border-bottom">
            <div><i className="fa-solid fa-bolt text-warning h1 m-0 cw-30 text-center"></i></div>
            <div>
               <h4 className="fw-bold mb-1">One-click checkout</h4>
               <p className="text-muted m-0">No need to wait for OTPs- payment get processed instantly</p>
            </div>
         </div>
         <div className="d-flex align-items-center gap-3 p-3 border-bottom">
            <div><i className="fa-solid fa-shield text-success h1 m-0 cw-30 text-center"></i></div>
            <div>
               <h4 className="fw-bold mb-1">Safe and secure</h4>
               <p className="text-muted m-0">Stay protected with bank-grade security while making payments</p>
            </div>
         </div>
         <div className="d-flex align-items-center gap-3 p-3 border-bottom">
            <div><i className="fa-solid fa-bars-progress text-danger h1 m-0 cw-30 text-center"></i></div>
            <div>
               <h4 className="fw-bold mb-1">Complimentry Eatsome Pro</h4>
               <p className="text-muted m-0">Get Eatsome Pro for 3 month on adding $5,000 or more</p>
            </div>
         </div>
      </div>
      <div className="pt-4 pb-5"></div>
      <div className="fixed-bottom bg-white shadow px-3 py-2 osahan-nav-bottom">
         <div className="row links">
            <div className="col-3 text-center">
               <a href="/">
                  <span><i className="bi bi-truck h1"></i></span>
                  <p className="m-0">Delivery</p>
               </a>
            </div>
            <div className="col-3 p-0 text-center">
               <a href="/offers">
                  <span><i className="bi bi-percent h1"></i></span>
                  <p className="m-0">Offers</p>
               </a>
            </div>
            <div className="col-3 p-0 text-center">
               <a href="/cart">
                  <span><i className="bi bi-basket h1"></i></span>
                  <p className="m-0">Cart</p>
               </a>
            </div>
            <div className="col-3 p-0 text-center">
               <a href="/your-order">
                  <span><i className="bi bi-receipt h1"></i></span>
                  <p className="m-0">History</p>
               </a>
            </div>
         </div>
      </div>
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1}
         aria-labelledby="staticBackdropLabel" aria-hidden="true">
         <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
            <div className="modal-content border-0">
               <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">Add Your Location</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div className="modal-body">
                  <form>
                     <div className="input-group border rounded-3 mb-3 shadow-sm">
                        <span className="input-group-text bg-white border-0"><i className="bi bi-search"></i></span>
                        <input type="text" className="shadow-none form-control bg-white border-0 ps-0" placeholder="bang" />
                     </div>
                  </form>
                  <div data-bs-dismiss="modal"  className="d-flex align-items-center gap-3 mb-3 px-0">
                     <div><i className="fa-solid fa-location-crosshairs text-danger"></i></div>
                     <div>Use Current Location</div>
                  </div>
                  <div className="text-muted text-uppercase small mb-1">Search Results</div>
                  <div data-bs-dismiss="modal" className="d-flex align-items-center gap-3 border-bottom py-3">
                     <span><i className="bi bi-search h6"></i></span>
                     <div className="lh-sm">
                        <h6 className="mb-1">Bangalore</h6>
                        <p className="text-muted m-0">Karnataka, India</p>
                     </div>
                  </div>
                  <div data-bs-dismiss="modal" className="d-flex align-items-center gap-3 border-bottom py-3">
                     <span><i className="bi bi-search h6"></i></span>
                     <div className="lh-sm">
                        <h6 className="mb-1">Bangalore internaltional airport</h6>
                        <p className="text-muted m-0">Karmpegowda.in't Airport, Hunachur, karnataka, India</p>
                     </div>
                  </div>
                  <div data-bs-dismiss="modal" className="d-flex align-items-center gap-3 border-bottom py-3">
                     <span><i className="bi bi-search h6"></i></span>
                     <div className="lh-sm">
                        <h6 className="mb-1">Railway Station back gate</h6>
                        <p className="text-muted m-0">M.G. Railway Colony, Majestic, Bangaluru</p>
                     </div>
                  </div>
                  <div data-bs-dismiss="modal" className="d-flex align-items-center gap-3 pt-3">
                     <span><i className="bi bi-search h6"></i></span>
                     <div className="lh-sm">
                        <h6 className="mb-1">Bangalore Cant</h6>
                        <p className="text-muted m-0">Cantonent Railway Station Road, Contonment Railway</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </>
  );
}
