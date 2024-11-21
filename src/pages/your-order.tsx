export default function YourOrder() {
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
      <div className="px-3 pt-3">
         <div className="input-group bg-white shadow rounded-3 border p-1 mb-3">
            <span className="input-group-text border-0 bg-white"><i className="fa-solid fa-magnifying-glass text-danger"></i></span>
            <input type="text" className="shadow-none form-control border-0" placeholder="Search by restaurant or dish" />
         </div>
         <div className="bg-white my-3">
            <div className="card shadow rounded-3 border overflow-hidden">
               <div className="card-header p-3">
                  <div className="d-flex justify-content-between">
                     <div className="d-flex gap-2">
                        <div><img src="imgs/s2.jpeg" alt="" className="img-fluid rounded-md ch-60" /></div>
                        <div>
                           <h5>Meshi Vaishnu Dhaba</h5>
                           <p className="text-muted my-0">Indistrail Area, Ludhiana</p>
                           <div className="text-muted">25 mins</div>
                        </div>
                     </div>
                     <div className="text-end">
                        <div className="badge bg-secondary mb-4">Deliverd</div>
                        <div><a href="#" className="text-decoration-none text-danger">View menu&nbsp;<i className="fa-solid fa-caret-right"></i></a></div>
                     </div>
                  </div>
               </div>
               <div className="card-body">
                  <div className="d-flex align-items-center gap-2 h6 mb-3">
                     <div><img src="imgs/veg.jpeg" alt="" className="img-fluid ch-20" /></div>
                     <div className="text-muted">1&nbsp;x</div>
                     <div>Plain Rice</div>
                  </div>
                  <div className="d-flex align-items-center gap-2 h6">
                     <div><img src="imgs/veg.jpeg" alt="" className="img-fluid ch-20" /></div>
                     <div className="text-muted">1&nbsp;x</div>
                     <div>Mushroom Matar</div>
                     <div className="text-muted d-block">Half</div>
                  </div>
                  <hr />
                  <a href="#" className="text-decoration-none link-dark">
                     <div className="d-flex justify-content-between">
                        <div className="text-muted">04 Mar 2023 at 2.22PM</div>
                        <div className="fw-bold">$101.00&nbsp;<i className="fa-solid fa-chevron-right text-muted"></i></div>
                     </div>
                  </a>
                  <hr />
                  <div className="d-flex align-items-center justify-content-between">
                     <div className="text-muted">Your rated&nbsp;&nbsp;<span className="badge bg-success">4&nbsp;<i className="fa-solid fa-star"></i></span></div>
                     <div><a href="#" className="btn btn-danger btn-sm"><i className="fa-solid fa-arrow-rotate-right"></i>&nbsp;Reorder</a></div>
                  </div>
               </div>
            </div>
         </div>
         <div className="bg-white mb-3">
            <div className="card shadow rounded-3 border overflow-hidden">
               <div className="card-header p-3">
                  <div className="d-flex justify-content-between">
                     <div className="d-flex gap-2">
                        <div><img src="imgs/s3.jpeg" alt="" className="img-fluid rounded-md ch-60" /></div>
                        <div>
                           <h5>Basant Restaurant</h5>
                           <p className="text-muted my-0">Dugri, Ludhiana</p>
                           <div className="text-muted">28 mins</div>
                        </div>
                     </div>
                     <div className="text-end">
                        <div className="badge bg-secondary mb-4">Deliverd</div>
                        <div><a href="#" className="text-decoration-none text-danger">View menu&nbsp;<i className="fa-solid fa-caret-right"></i></a></div>
                     </div>
                  </div>
               </div>
               <div className="card-body">
                  <div className="d-flex align-items-center gap-2 h6 mb-3">
                     <div><img src="imgs/veg.jpeg" alt="" className="img-fluid ch-20" /></div>
                     <div className="text-muted">1&nbsp;x</div>
                     <div>Basant Special Pizza with Coke [300 ml]</div>
                  </div>
                  <hr />
                  <a href="#" className="text-decoration-none link-dark">
                     <div className="d-flex justify-content-between">
                        <div className="text-muted">11 Jan 2023 at 9.23PM</div>
                        <div className="fw-bold">$230.50&nbsp;<i className="fa-solid fa-chevron-right text-muted"></i></div>
                     </div>
                  </a>
                  <hr />
                  <div className="d-flex align-items-center justify-content-between">
                     <div className="text-muted">Your rated&nbsp;&nbsp;<span className="badge bg-success">5&nbsp;<i className="fa-solid fa-star"></i></span></div>
                     <div><a href="#" className="btn btn-danger btn-sm"><i className="fa-solid fa-arrow-rotate-right"></i>&nbsp;Reorder</a></div>
                  </div>
               </div>
            </div>
         </div>
         <div className="bg-white mb-3">
            <div className="card shadow rounded-3 border overflow-hidden">
               <div className="card-header p-3">
                  <div className="d-flex justify-content-between">
                     <div className="d-flex gap-2">
                        <div><img src="imgs/s4.jpeg" alt="" className="img-fluid rounded-md ch-60" /></div>
                        <div>
                           <h5>Natural 2</h5>
                           <p className="text-muted my-0">Civil Lines, Ludhiana</p>
                           <div className="text-muted">53 mins</div>
                        </div>
                     </div>
                     <div className="text-end">
                        <div className="badge bg-secondary mb-4">Deliverd</div>
                        <div><a href="#" className="text-decoration-none text-danger">View menu&nbsp;<i className="fa-solid fa-caret-right"></i></a></div>
                     </div>
                  </div>
               </div>
               <div className="card-body">
                  <div className="d-flex align-items-center gap-2 h6 mb-3">
                     <div><img src="imgs/veg.jpeg" alt="" className="img-fluid ch-20" /></div>
                     <div className="text-muted">2&nbsp;x</div>
                     <div>Natural Special Burger</div>
                  </div>
                  <a href="#" className="text-decoration-none link-dark">
                     <div className="d-flex justify-content-between">
                        <div className="text-muted">28 Feb 2023 at 3.47PM</div>
                        <div className="fw-bold">$310.75&nbsp;<i className="fa-solid fa-chevron-right text-muted"></i></div>
                     </div>
                  </a>
                  <hr />
                  <div className="d-flex align-items-center justify-content-between">
                     <div className="text-muted">Your rated&nbsp;&nbsp;<span className="badge bg-success">5&nbsp;<i className="fa-solid fa-star"></i></span></div>
                     <div><a href="#" className="btn btn-danger btn-sm"><i className="fa-solid fa-arrow-rotate-right"></i>&nbsp;Reorder</a></div>
                  </div>
               </div>
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
                  <span><i className="bi bi-receipt h1 active"></i></span>
                  <p className="m-0">History</p>
               </a>
            </div>
         </div>
      </div>
    </>
  );
}
