export default function Store() {
  return (
    <>
      <div className="bg-white shadow-sm p-3">
         <div className="d-flex align-items-center">
            <div className="gap-3 d-flex align-items-center">
               <a href="/"><i className="bi bi-arrow-left d-flex text-danger h2 m-0 back-page"></i></a>
               <h3 className="fw-bold m-0">Domino's Pizza</h3>
            </div>
            <div className="ms-auto gap-3 d-flex align-items-center">
               <button type="button" className="btn btn-white border btn-sm rounded-md text-muted" data-bs-toggle="modal" data-bs-target="#exampleModal2">
               <span><i
                  className="fa-solid fa-tag"></i></span>&nbsp;Coupon
               </button>
               <a className="toggle osahan-toggle text-dark m-0" href="#"><i className="bi bi-list d-flex m-0 h1"></i></a>
            </div>
         </div>
      </div>
      <div className="p-3">
         <div className="row align-items-start justify-content-between">
         <div className="col-8">
            <h1 className="fw-bold mb-1">Domini's Pizza</h1>
            <div className="fs-6 mb-2">Pizza, Fast Food</div>
            <p className="small text-muted">Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</p>
            <div className="d-flex align-items-center gap-2">
               <div><img src="imgs/delivery.png" alt="" className="img-fluid ch-20" /></div>
               <a href="/support" className="text-decoration-none text-muted small">know more</a>
            </div>
         </div>
         <div className="col-3">
            <div className="shadow rounded-3">
               <div className="bg-success rounded-top text-white">
                  <div className="d-flex justify-content-center gap-1 p-1">
                     <div className="h2 m-0">4.2</div>
                     <div className="pt-1"><i className="fa-solid fa-star"></i></div>
                  </div>
               </div>
               <div className="text-center rounded-bottom p-1">
                  <div className="mb-0 text-warning fw-bold">3,946</div>
                  <div className="small text-muted">Reviews</div>
               </div>
            </div>
            <div className="badge bg-light text-dark my-2 p-2 w-100 border text-center"><i className="fa-solid fa-stopwatch text-success me-1"></i>&nbsp;30 mins
            </div>
         </div>
      </div>
      </div>
      <main className="sticky-top">
         <div className="bg-light">
            <div className="row m-0">
               <div className="col-12 p-0">
                  <ul className="nav osahan-tab row m-0" id="pills-tab" role="tablist">
                     <li className="nav-item col p-0" role="presentation">
                        <button className="nav-a bg-light active w-100" id="pills-home-tab" data-bs-toggle="pill"
                           data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                           aria-selected="true">Recommended</button>
                     </li>
                     <li className="nav-item col p-0" role="presentation">
                        <button className="nav-a bg-light w-100" id="pills-profile-tab" data-bs-toggle="pill"
                           data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                           aria-selected="false">Chicken Lovers</button>
                     </li>
                     <li className="nav-item col p-0" role="presentation">
                        <button className="nav-a bg-light w-100" id="pills-contact-tab" data-bs-toggle="pill"
                           data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                           aria-selected="false">New Launches</button>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
         <div className="bg-white px-3 pt-3">
            <div className="input-group bg-white shadow rounded-md border p-1 mb-3">
               <span className="input-group-text border-0 bg-white"><i
                  className="fa-solid fa-magnifying-glass text-danger"></i></span>
               <input type="text" className="shadow-none form-control border-0" placeholder="Search within the menu.." />
            </div>
            <div className="d-flex align-items-center gap-3">
               <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefaultdd" />
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefaultdd">Veg</label>
               </div>
               <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Non-Veg</label>
               </div>
            </div>
         </div>
      </main>
      <div className="p-3">
         <div className="row">
            <div className="col-12">
               <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                     <div>
                        <div className="store-list-2">
                           <div className="row justify-content-between">
                              <div className="col-6">
                                 <div className="d-flex align-items-center gap-2 mb-3">
                                    <img src="imgs/veg.jpeg" alt="" className="img-fluid ch-20" />
                                    <div className="badge border border-warning text-warning">Bestseller</div>
                                 </div>
                                 <h3 className="fw-bold mb-1">Sweet Corn Pizza</h3>
                                 <p className="small text-muted mb-3">In Meal</p>
                                 <h6 className="fw-bold">$146</h6>
                                 <div className="badge border border-warning">
                                    <span><i className="fa-solid fa-star text-warning"></i></span>
                                    <span><i className="fa-solid fa-star text-warning"></i></span>
                                    <span><i className="fa-solid fa-star text-warning"></i></span>
                                    <span><i className="fa-solid fa-star text-warning"></i></span>
                                    <span><i className="fa-solid fa-star text-dark"></i></span>
                                    <span className="text-dark">95</span>
                                 </div>
                              </div>
                              <div className="col-4">
                                 <div className="card border-0">
                                    <img
                                       src="imgs/s1.jpeg"
                                       className="card-img-top rounded-3" alt="..." />
                                    <div className="card-body d-grid px-0 pt-2 pb-0">
                                       <button type="button" className="btn btn-outline-danger fw-bold text-uppercase btn-sm rounded"
                                          data-bs-toggle="modal" data-bs-target="#exampleModal">
                                       Add +
                                       </button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <hr />
                        <div className="store-list-2">
                           <div className="row justify-content-between">
                              <div className="col-6">
                                 <div className="mb-3">
                                    <img src="imgs/veg.jpeg" alt="" className="img-fluid ch-20" />
                                 </div>
                                 <h3 className="fw-bold mb-1">Tandoori Pizza</h3>
                                 <p className="small text-muted mb-3">In Pizza and Pasta</p>
                                 <h6 className="fw-bold">$370</h6>
                                 <div className="badge border border-warning">
                                    <span><i className="fa-solid fa-star text-warning"></i></span>
                                    <span><i className="fa-solid fa-star text-warning"></i></span>
                                    <span><i className="fa-solid fa-star text-warning"></i></span>
                                    <span><i className="fa-solid fa-star text-warning"></i></span>
                                    <span><i className="fa-solid fa-star text-dark"></i></span>
                                    <span className="text-dark">36</span>
                                 </div>
                              </div>
                              <div className="col-4">
                                 <div className="card border-0">
                                    <img
                                       src="imgs/s3.jpeg"
                                       className="card-img-top rounded-3" alt="..." />
                                    <div className="card-body d-grid px-0 pt-2 pb-0">
                                       <button type="button" className="btn btn-outline-danger fw-bold text-uppercase btn-sm rounded"
                                          data-bs-toggle="modal" data-bs-target="#exampleModal">
                                       Add +
                                       </button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <hr />
                        <div className="store-list-2">
                           <div className="row justify-content-between">
                              <div className="col-6">
                                 <div className="mb-3">
                                    <img src="imgs/veg.jpeg" alt="" className="img-fluid ch-20" />
                                 </div>
                                 <h3 className="fw-bold mb-1">Chess Pizza</h3>
                                 <p className="small text-muted mb-3">In Pizza and Chess</p>
                                 <h6 className="fw-bold">$400</h6>
                                 <div className="badge border border-warning">
                                    <span><i className="fa-solid fa-star text-warning"></i></span>
                                    <span><i className="fa-solid fa-star text-warning"></i></span>
                                    <span><i className="fa-solid fa-star text-warning"></i></span>
                                    <span><i className="fa-solid fa-star text-warning"></i></span>
                                    <span><i className="fa-solid fa-star text-dark"></i></span>
                                    <span className="text-dark">45</span>
                                 </div>
                              </div>
                              <div className="col-4">
                                 <div className="card border-0">
                                    <img
                                       src="imgs/s5.jpeg"
                                       className="card-img-top rounded-3" alt="..." />
                                    <div className="card-body d-grid px-0 pt-2 pb-0">
                                       <button type="button" className="btn btn-outline-danger fw-bold text-uppercase btn-sm rounded"
                                          data-bs-toggle="modal" data-bs-target="#exampleModal">
                                       Add +
                                       </button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                     <div>
                        <div className="store-list-2">
                           <div className="row justify-content-between">
                              <div className="col-6">
                                 <div className="d-flex align-items-center gap-2 mb-3">
                                    <img src="imgs/veg.jpeg" alt="" className="img-fluid ch-20" />
                                    <div className="badge border border-warning text-warning">Bestseller</div>
                                 </div>
                                 <h3 className="fw-bold mb-1">Sweet Corn Pizza</h3>
                                 <p className="small text-muted mb-3">In Meal</p>
                                 <h6 className="fw-bold">$146</h6>
                                 <div className="badge border border-warning">
                                    <span><i className="fa-solid fa-star text-warning"></i></span>
                                    <span><i className="fa-solid fa-star text-warning"></i></span>
                                    <span><i className="fa-solid fa-star text-warning"></i></span>
                                    <span><i className="fa-solid fa-star text-warning"></i></span>
                                    <span><i className="fa-solid fa-star text-dark"></i></span>
                                    <span className="text-dark">95</span>
                                 </div>
                              </div>
                              <div className="col-4">
                                 <div className="card border-0">
                                    <img
                                       src="imgs/s6.jpeg"
                                       className="card-img-top d-grid rounded-3" alt="..." />
                                    <div className="card-body d-grid px-0 pt-2 pb-0">
                                       <button type="button" className="btn btn-outline-danger fw-bold text-uppercase btn-sm rounded"
                                          data-bs-toggle="modal" data-bs-target="#exampleModal">
                                       Add +
                                       </button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <hr />
                        <div className="store-list-2">
                           <div className="row justify-content-between">
                              <div className="col-6">
                                 <div className="mb-3">
                                    <img src="imgs/veg.jpeg" alt="" className="img-fluid ch-20" />
                                 </div>
                                 <h3 className="fw-bold mb-1">All Pizza</h3>
                                 <p className="small text-muted mb-3">In Pizza and Pasta</p>
                                 <h6 className="fw-bold">$500</h6>
                                 <div className="badge border border-warning">
                                    <span><i className="fa-solid fa-star text-warning"></i></span>
                                    <span><i className="fa-solid fa-star text-warning"></i></span>
                                    <span><i className="fa-solid fa-star text-warning"></i></span>
                                    <span><i className="fa-solid fa-star text-warning"></i></span>
                                    <span><i className="fa-solid fa-star text-dark"></i></span>
                                    <span className="text-dark">50</span>
                                 </div>
                              </div>
                              <div className="col-4">
                                 <div className="card border-0">
                                    <img
                                       src="imgs/s7.jpeg"
                                       className="card-img-top rounded-3" alt="..." />
                                    <div className="card-body d-grid px-0 pt-2 pb-0">
                                       <button type="button" className="btn btn-outline-danger fw-bold text-uppercase btn-sm rounded"
                                          data-bs-toggle="modal" data-bs-target="#exampleModal">
                                       Add +
                                       </button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <hr />
                        <div className="store-list-2">
                           <div className="row justify-content-between">
                              <div className="col-6">
                                 <div className="mb-3">
                                    <img src="imgs/veg.jpeg" alt="" className="img-fluid ch-20" />
                                 </div>
                                 <h3 className="fw-bold mb-1">Chess Pizza</h3>
                                 <p className="small text-muted mb-3">In Pizza and Chess</p>
                                 <h6 className="fw-bold">$400</h6>
                                 <div className="badge border border-warning">
                                    <span><i className="fa-solid fa-star text-warning"></i></span>
                                    <span><i className="fa-solid fa-star text-warning"></i></span>
                                    <span><i className="fa-solid fa-star text-warning"></i></span>
                                    <span><i className="fa-solid fa-star text-warning"></i></span>
                                    <span><i className="fa-solid fa-star text-dark"></i></span>
                                    <span className="text-dark">45</span>
                                 </div>
                              </div>
                              <div className="col-4">
                                 <div className="card border-0">
                                    <img
                                       src="imgs/s1.jpeg"
                                       className="card-img-top rounded-3" alt="..." />
                                    <div className="card-body d-grid px-0 pt-2 pb-0">
                                       <a href="#" className="btn btn-outline-danger d-grid fs-3 p-1">Add +</a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                     <div>
                        <div className="store-list-2">
                           <div className="row justify-content-between">
                              <div className="col-6">
                                 <div className="d-flex align-items-center gap-2 mb-3">
                                    <img src="imgs/veg.jpeg" alt="" className="img-fluid ch-20" />
                                    <div className="badge border border-warning text-warning">Bestseller</div>
                                 </div>
                                 <h3 className="fw-bold mb-1">Sweet Corn Pizza</h3>
                                 <p className="small text-muted mb-3">In Meal</p>
                                 <h6 className="fw-bold">$146</h6>
                                 <div className="badge border border-warning">
                                    <span><i className="fa-solid fa-star text-warning"></i></span>
                                    <span><i className="fa-solid fa-star text-warning"></i></span>
                                    <span><i className="fa-solid fa-star text-warning"></i></span>
                                    <span><i className="fa-solid fa-star text-warning"></i></span>
                                    <span><i className="fa-solid fa-star text-dark"></i></span>
                                    <span className="text-dark">95</span>
                                 </div>
                              </div>
                              <div className="col-4">
                                 <div className="card border-0">
                                    <img
                                       src="imgs/s2.jpeg"
                                       className="card-img-top rounded-3" alt="..." />
                                    <div className="card-body d-grid px-0 pt-2 pb-0">
                                       <button type="button" className="btn btn-outline-danger fw-bold text-uppercase btn-sm rounded"
                                          data-bs-toggle="modal" data-bs-target="#exampleModal">
                                       Add +
                                       </button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <hr />
                        <div className="store-list-2">
                           <div className="row justify-content-between">
                              <div className="col-6">
                                 <div className="mb-3">
                                    <img src="imgs/veg.jpeg" alt="" className="img-fluid ch-20" />
                                 </div>
                                 <h3 className="fw-bold mb-1">All Pizza</h3>
                                 <p className="small text-muted mb-3">In Pizza and Pasta</p>
                                 <h6 className="fw-bold">$500</h6>
                                 <div className="badge border border-warning">
                                    <span><i className="fa-solid fa-star text-warning"></i></span>
                                    <span><i className="fa-solid fa-star text-warning"></i></span>
                                    <span><i className="fa-solid fa-star text-warning"></i></span>
                                    <span><i className="fa-solid fa-star text-warning"></i></span>
                                    <span><i className="fa-solid fa-star text-dark"></i></span>
                                    <span className="text-dark">50</span>
                                 </div>
                              </div>
                              <div className="col-4">
                                 <div className="card border-0">
                                    <img
                                       src="imgs/s4.jpeg"
                                       className="card-img-top rounded-3" alt="..." />
                                    <div className="card-body d-grid px-0 pt-2 pb-0">
                                       <button type="button" className="btn btn-outline-danger fw-bold text-uppercase btn-sm rounded"
                                          data-bs-toggle="modal" data-bs-target="#exampleModal">
                                       Add +
                                       </button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <hr />
                        <div className="store-list-2">
                           <div className="row justify-content-between">
                              <div className="col-6">
                                 <div className="mb-3">
                                    <img src="imgs/veg.jpeg" alt="" className="img-fluid ch-20" />
                                 </div>
                                 <h3 className="fw-bold mb-1">Chess Pizza</h3>
                                 <p className="small text-muted mb-3">In Pizza and Chess</p>
                                 <h6 className="fw-bold">$400</h6>
                                 <div className="badge border border-warning">
                                    <span><i className="fa-solid fa-star text-warning"></i></span>
                                    <span><i className="fa-solid fa-star text-warning"></i></span>
                                    <span><i className="fa-solid fa-star text-warning"></i></span>
                                    <span><i className="fa-solid fa-star text-warning"></i></span>
                                    <span><i className="fa-solid fa-star text-dark"></i></span>
                                    <span className="text-dark">45</span>
                                 </div>
                              </div>
                              <div className="col-4">
                                 <div className="card border-0">
                                    <img
                                       src="imgs/s6.jpeg"
                                       className="card-img-top rounded-3" alt="..." />
                                    <div className="card-body d-grid px-0 pt-2 pb-0">
                                       <button type="button" className="btn btn-outline-danger fw-bold text-uppercase btn-sm rounded"
                                          data-bs-toggle="modal" data-bs-target="#exampleModal">
                                       Add +
                                       </button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-hidden="true">
         <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0">
               <div className="modal-header border-0">
                  <h5 className="modal-title">Pizza</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div className="modal-body p-0">
                  <div><img
                     src="imgs/s8.jpeg"
                     alt="" className="img-fluid" /></div>
                  <div className="p-3">
                     <div className="d-flex align-items-center gap-2 mb-2">
                        <img src="imgs/veg.jpeg" alt="" className="img-fluid ch-20" />
                        <div className="badge border border-warning text-warning">Bestseller</div>
                     </div>
                     <h3 className="fw-bold mb-2">Pizza</h3>
                     <div className="badge border border-warning">
                        <span><i className="fa-solid fa-star text-warning"></i></span>
                        <span><i className="fa-solid fa-star text-warning"></i></span>
                        <span><i className="fa-solid fa-star text-warning"></i></span>
                        <span><i className="fa-solid fa-star text-warning"></i></span>
                        <span><i className="fa-solid fa-star text-dark"></i></span>
                        <span className="text-dark">95</span>
                     </div>
                  </div>
               </div>
               <div className="modal-footer d-flex justify-content-between">
                  <div className="btn btn-white border border-danger col-3 px-1">
                     <div className="d-flex align-items-start justify-content-between px-1">
                        <div className="minus"><i className="fa-solid fa-minus text-danger"></i></div>
                        <input className="shadow-none form-control text-center border-0 p-0 box" type="text" placeholder="" aria-label="default input example" defaultValue="1" />
                        <div className="plus"><i className="fa-solid fa-plus text-danger"></i></div>
                     </div>
                  </div>
                  <a href="/cart" className="btn btn-danger col-8">Add item</a>
               </div>
            </div>
         </div>
      </div>
      <div className="modal fade" id="exampleModal2" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0">
               <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Coupons</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div className="modal-body p-0">
                  <div className="p-3">
                     <div>
                        <div className="mb-2">
                           <div className="mb-3"><img src="imgs/p1.png" alt="" className="img-fluid ch-40 border rounded-2" /></div>
                           <div className="h4 m-0">Get 50% OFF up to $100</div>
                        </div>
                        <p className="text-muted">Valid on total defaultValue of items worth $159 or more.&nbsp;<span className="text-dark">View Details</span></p>
                        <div className="d-flex justify-content-between pb-3 align-items-center">
                           <div className="text-uppercase fw-bold border border-danger text-danger rounded px-2 py-1 h5 m-0">maxsafety</div>
                           <div><a href="#" data-bs-dismiss="modal" aria-label="Close" className="text-decoration-none text-danger">Apply</a></div>
                        </div>
                        <div className="text-primary">You will save $100 with this code</div>
                     </div>
                     <hr />
                     <div>
                        <div className="mb-2">
                           <div className="mb-3"><img src="imgs/p1.png" alt="" className="img-fluid ch-40 border rounded-2" /></div>
                           <div className="h4 m-0">50% OFF up to $100 and $30 Paytm cashback using Paytm</div>
                        </div>
                        <p className="text-muted">Valid on total defaultValue of items worth $159 or more.&nbsp;<span className="text-dark">View Details</span></p>
                        <div className="d-flex justify-content-between pb-3 align-items-center">
                           <div className="text-uppercase fw-bold border border-danger text-danger rounded px-2 py-1 h5 m-0">zompaytm</div>
                           <div><a href="#" data-bs-dismiss="modal" aria-label="Close" className="text-decoration-none text-danger">Apply</a></div>
                        </div>
                        <div className="text-primary">You will save $100 &amp; get extra cashback with this code</div>
                     </div>
                     <hr />
                     <div>
                        <div className="mb-2">
                           <div className="mb-3"><img src="imgs/p2.png" alt="" className="img-fluid ch-40 border rounded-2" /></div>
                           <div className="h4 m-0">Get 60% OFF up to $140</div>
                        </div>
                        <p className="text-muted">Valid on total defaultValue of items worth $159 or more.&nbsp;<span className="text-dark">View Details</span></p>
                        <div className="d-flex justify-content-between pb-3 align-items-center">
                           <div className="text-uppercase fw-bold border border-danger text-danger rounded px-2 py-1 h5 m-0">simplparty</div>
                           <div><a href="#" data-bs-dismiss="modal" aria-label="Close" className="text-decoration-none text-danger">Apply</a></div>
                        </div>
                        <div className="text-primary">You will save $140 with this code</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </>
  );
}
