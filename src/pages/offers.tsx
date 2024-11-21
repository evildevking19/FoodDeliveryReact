export default function Offers() {
  return (
    <>
      <div className="bg-white shadow-sm px-3 pt-3">
         <div className="d-flex align-items-center">
            <div className="gap-3 d-flex align-items-center">
               <a href="/">
                  <i className="bi bi-arrow-left d-flex text-danger h2 m-0 back-page"></i>
               </a>
               <button type="button" className="btn bg-white border-0 p-0" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                  <span className="text-danger h4 m-0">
                     <i className="fa-solid fa-location-dot"></i>&nbsp;
                     <span>Set Location</span>&nbsp;<i className="fa-solid fa-chevron-down"></i>
                  </span>
               </button>
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
      <div className="sticky-top bg-white p-3">
         <div className="input-group bg-white shadow rounded-md border p-1 overflow-hidden">
            <span className="input-group-text border-0 bg-white"><i
               className="fa-solid fa-magnifying-glass text-danger"></i></span>
            <input type="text" className="shadow-none form-control border-0 ps-1" placeholder="Restaurant name or a dish..." />
         </div>
      </div>
      <div className="ps-3 py-3 bg-light">
         <div className="d-flex align-items-center justify-content-between mb-3 pe-3">
            <div className="d-flex align-items-center gap-2">
               <div><img src="imgs/discount.png" alt="" className="img-fluid ch-30 cw-30" /></div>
               <div>
                  <h5 className="fw-bold mb-0">Minimum 50% OFF</h5>
                  <p className="text-muted m-0">and other amazing offers too</p>
               </div>
            </div>
            <div><a href="/search-list" className="text-decoration-none text-danger fw-bold">See all</a></div>
         </div>
         <div className="px-0">
            <div className="multipleitems">
               <div className="item pe-3">
                  <a href="/search-list" className="text-decoration-none link-dark">
                     <div className="card bg-light border-0">
                        <div className="product-offer-back"><img
                           src="imgs/o1.jpeg"
                           alt="" className="img-fluid rounded-md" />
                        </div>
                        <div className="product-rating shadow-sm">
                           <span className="badge bg-success">4.2<i className="fa-solid fa-star"></i></span>
                        </div>
                        <div className="card-body px-0 pb-0 pt-2">
                           <h5 className="fw-bold mb-0">Om Corner</h5>
                           <p className="text-muted m-0 mt-1 small">60% OFF up to $120</p>
                        </div>
                     </div>
                  </a>
               </div>
               <div className="item pe-3">
                  <a href="/search-list" className="text-decoration-none link-dark">
                     <div className="card bg-light border-0">
                        <div className="product-offer-back"><img
                           src="imgs/4.jpeg"
                           alt="" className="img-fluid rounded-md" /></div>
                        <div className="product-rating shadow-sm">
                           <span className="badge bg-success">4.3<i className="fa-solid fa-star"></i></span>
                        </div>
                        <div className="card-body px-0 pb-0 pt-2">
                           <h5 className="fw-bold mb-0">Dhir Refresh..</h5>
                           <p className="text-muted m-0 mt-1 small">60% OFF up to $120</p>
                        </div>
                     </div>
                  </a>
               </div>
               <div className="item pe-3">
                  <a href="/search-list" className="text-decoration-none link-dark">
                     <div className="card bg-light border-0">
                        <div className="product-offer-back"><img
                           src="imgs/o1.jpeg"
                           alt="" className="img-fluid rounded-md" /></div>
                        <div className="product-rating shadow-sm">
                           <span className="badge bg-warning">3.0<i className="fa-solid fa-star"></i></span>
                        </div>
                        <div className="card-body px-0 pb-0 pt-2">
                           <h5 className="fw-bold mb-0">Spicy Food</h5>
                           <p className="text-muted m-0 mt-1 small">60% OFF up to $120</p>
                        </div>
                     </div>
                  </a>
               </div>
               <div className="item pe-3">
                  <a href="/search-list" className="text-decoration-none link-dark">
                     <div className="card bg-light border-0">
                        <div className="product-offer-back"><img
                           src="imgs/o2.jpeg"
                           alt="" className="img-fluid rounded-md" /></div>
                        <div className="product-rating shadow-sm">
                           <span className="badge bg-success">4.0<i className="fa-solid fa-star"></i></span>
                        </div>
                        <div className="card-body px-0 pb-0 pt-2">
                           <h5 className="fw-bold mb-0">Pizza Hut</h5>
                           <p className="text-muted m-0 mt-1 small">50% OFF up to $120</p>
                        </div>
                     </div>
                  </a>
               </div>
               <div className="item pe-3">
                  <a href="/search-list" className="text-decoration-none link-dark">
                     <div className="card bg-light border-0">
                        <div className="product-offer-back"><img
                           src="imgs/o3.jpeg"
                           alt="" className="img-fluid rounded-md" /></div>
                        <div className="product-rating shadow-sm">
                           <span className="badge bg-success">4.0<i className="fa-solid fa-star"></i></span>
                        </div>
                        <div className="card-body px-0 pb-0 pt-2">
                           <h5 className="fw-bold mb-0">Prem Bakers</h5>
                           <p className="text-muted m-0 mt-1 small">50% OFF up to $100</p>
                        </div>
                     </div>
                  </a>
               </div>
               <div className="item pe-3">
                  <a href="/search-list" className="text-decoration-none link-dark">
                     <div className="card bg-light border-0">
                        <div className="product-offer-back"><img
                           src="imgs/o4.jpeg"
                           alt="" className="img-fluid rounded-md" /></div>
                        <div className="product-rating shadow-sm">
                           <span className="badge bg-success">4.0<i className="fa-solid fa-star"></i></span>
                        </div>
                        <div className="card-body px-0 pb-0 pt-2">
                           <h5 className="fw-bold mb-0">Laziz Family</h5>
                           <p className="text-muted m-0 mt-1 small">50% OFF up to $100</p>
                        </div>
                     </div>
                  </a>
               </div>
            </div>
         </div>
      </div>
      <div className="p-3">
         <div className="mb-4">
            <h3 className="fw-bold pb-3">Check offers on top dishes</h3>
            <div className="row align-items-end g-4">
               <div className="col-3">
                  <a href="/search-list" className="text-decoration-none">
                     <div className="card border-0">
                        <img src="imgs/d9.png" className="img-fluid m-auto ch-70" alt="#" />
                        <div className="card-body text-center px-0 pb-0">
                           <h6 className="card-title text-muted">Sweets</h6>
                        </div>
                     </div>
                  </a>
               </div>
               <div className="col-3">
                  <a href="/search-list" className="text-decoration-none">
                     <div className="card border-0">
                        <img src="imgs/d1.png" className="img-fluid rounded-circle m-auto ch-70" alt="#" />
                        <div className="card-body text-center px-0 pb-0">
                           <h6 className="card-title text-muted">Samosa</h6>
                        </div>
                     </div>
                  </a>
               </div>
               <div className="col-3">
                  <a href="/search-list" className="text-decoration-none link-dark">
                     <div className="card border-0">
                        <img src="imgs/d4.png" className="img-fluid m-auto ch-70" alt="#" />
                        <div className="card-body text-center px-0 pb-0">
                           <h6 className="card-title text-muted">Pizza</h6>
                        </div>
                     </div>
                  </a>
               </div>
               <div className="col-3">
                  <a href="#" className="text-decoration-none">
                     <div className="card border-0">
                        <img src="imgs/d5.png" className="img-fluid rounded-circle m-auto ch-70" alt="#" />
                        <div className="card-body text-center px-0 pb-0">
                           <h6 className="card-title text-muted">Noddles</h6>
                        </div>
                     </div>
                  </a>
               </div>
            </div>
         </div>
         <div>
            <h3 className="fw-bold pb-2">Most loved offers on Eatsome</h3>
            <div className="row g-2">
               <div className="col-4">
                  <div className="text-decoration-none text-white">
                     <div className="bg-danger bg-gradient p-3 rounded-md text-white">
                        <h4 className="fw-bold mb-1">Deals For One</h4>
                        <p className="small m-0">To 60% OFF&nbsp;
                  <a href="#" className="text-decoration-none text-white"><i className="fa-solid fa-arrow-right"></i></a></p>
                  </div>
                  </div>
               </div>
               <div className="col-4">
                  <div className="text-decoration-none text-white">
                     <div className="bg-warning bg-gradient p-3 rounded-md text-white">
                        <h4 className="fw-bold mb-1">Unlimited Flat Deal</h4>
                        <p className="small m-0">Big orders&nbsp;
                  <a href="#" className="text-decoration-none text-white"><i className="fa-solid fa-arrow-right"></i></a></p>
                  </div>
                  </div>
               </div>
               <div className="col-4">
                  <div className="text-decoration-none text-white">
                     <div className="bg-success bg-gradient p-3 rounded-md text-white">
                        <h4 className="fw-bold mb-1">Fastest Deliveries</h4>
                        <p className="small m-0">See offers&nbsp;
                  <a href="#" className="text-decoration-none text-white"><i className="fa-solid fa-arrow-right"></i></a></p>
                  </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="p-3">
         <h3 className="fw-bold mb-3">Best offers around you</h3>
         <div className="row g-3">
            <div className="col-12 col-md-4">
               <a href="/search-list" className="text-decoration-none link-dark">
                  <div className="card rounded-4 shadow border-0 overflow-hidden">
                     <div className="position-relative">
                        <div className="product-back"><img
                           src="imgs/1.jpeg"
                           alt="" className="img-fluid rounded-top" /></div>
                        <div className="product-time shadow-sm position-absolute bottom-0 end-0 m-3">
                           <span className="badge bg-light text-dark"><i
                              className="fa-solid fa-stopwatch text-success"></i>&nbsp;37 mins | 2 km</span>
                        </div>
                        <div className="product-off bg-primary p-2 rounded-2 shadow-sm position-absolute top-0 end-0 m-3">
                           <div className="d-flex align-items-start gap-1 fw-bold text-white">
                              <div><i className="fa-solid fa-percent fs-5"></i></div>
                              <div>
                                 <div>50% OFF</div>
                                 <div className="fw-normal">Up to $100</div>
                              </div>
                           </div>
                        </div>
                        <div className="position-absolute bottom-0 start-0 bg-danger p-1 rounded-end text-white mb-3">
                           <div className="fw-bold">Extra 15% OFF with Pro</div>
                        </div>
                     </div>
                     <div className="card-body">
                        <div className="d-flex justify-content-between">
                           <div className="h4 fw-bold">La Pino'z Pizza</div>
                           <div><span className="badge bg-success">4.2&nbsp;<i className="fa-solid fa-star"></i></span>
                           </div>
                        </div>
                        <div className="d-flex justify-content-between text-muted h6 m-0 fw-normal">
                           <div>Pizza, Fast Food, Beverages</div>
                           <div>$200 for one</div>
                        </div>
                     </div>
                     <div className="card-footer p-3 border-0">
                        <div className="d-flex align-items-center justify-content-between">
                           <div className="d-flex align-items-center gap-2">
                              <div><img src="imgs/delivery.png" alt="" className="img-fluid ch-30" /></div>
                              <div className="text-muted small">Follows all Max Safety measures to<br /> ensure your
                                 food
                                 id safe
                              </div>
                           </div>
                           <div><img src="imgs/graph-up.png" alt="" className="img-fluid ch-30 cw-30" /></div>
                        </div>
                     </div>
                  </div>
               </a>
            </div>
            <div className="col-12 col-md-4">
               <a href="/search-list" className="text-decoration-none link-dark">
                  <div className="card rounded-4 shadow border-0 overflow-hidden">
                     <div className="position-relative">
                        <div className="product-veg bg-success  opacity-75 text-center text-white p-2"><span><i
                           className="fa-brands fa-envira"></i></span>&nbsp;Pure Veg Resturant</div>
                        <div className="product-back-two"><img
                           src="imgs/2.jpeg"
                           alt="" className="img-fluid rounded-top" /></div>
                        <div className="product-time shadow-sm position-absolute bottom-0 end-0 m-3">
                           <span className="badge bg-light text-dark"><i
                              className="fa-solid fa-stopwatch text-success"></i>&nbsp;30 mins | 1 km</span>
                        </div>
                     </div>
                     <div className="card-body">
                        <div className="d-flex justify-content-between">
                           <div className="h4 fw-bold">La Pino'z Burger</div>
                           <div><span className="badge bg-success">4.0&nbsp;<i className="fa-solid fa-star"></i></span>
                           </div>
                        </div>
                        <div className="d-flex justify-content-between text-muted h6 m-0 fw-normal">
                           <div>Burger, Fast Food, Beverages</div>
                           <div>$80 for one</div>
                        </div>
                     </div>
                     <div className="card-footer p-3 border-0">
                        <div className="d-flex align-items-center justify-content-between">
                           <div className="d-flex align-items-center gap-2">
                              <div><img src="imgs/delivery.png" alt="" className="img-fluid ch-30" /></div>
                              <div className="text-muted small">Follows all Max Safety measures to<br /> ensure your
                                 food
                                 id safe
                              </div>
                           </div>
                           <div><img src="imgs/graph-up.png" alt="" className="img-fluid ch-30 cw-30" /></div>
                        </div>
                     </div>
                  </div>
               </a>
            </div>
            <div className="col-12 col-md-4">
               <a href="/search-list" className="text-decoration-none link-dark">
                  <div className="card rounded-4 shadow border-0 overflow-hidden">
                     <div className="position-relative">
                        <div className="product-back"><img
                           src="imgs/3.jpeg"
                           alt="" className="img-fluid rounded-top" /></div>
                        <div className="product-time shadow-sm position-absolute bottom-0 end-0 m-3">
                           <span className="badge bg-light text-dark"><i
                              className="fa-solid fa-stopwatch text-success"></i>&nbsp;25 mins | 1.5 km</span>
                        </div>
                        <div className="product-off bg-primary p-2 rounded-2 shadow-sm position-absolute top-0 end-0 m-3">
                           <div className="d-flex align-items-start gap-1 fw-bold text-white">
                              <div><i className="fa-solid fa-percent fs-5"></i></div>
                              <div>
                                 <div>40% OFF</div>
                                 <div className="fw-normal">Up to $100</div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="card-body">
                        <div className="d-flex justify-content-between">
                           <div className="h4 fw-bold">Sharma Sweets And Fast Food</div>
                           <div><span className="badge bg-success">4.5&nbsp;<i className="fa-solid fa-star"></i></span>
                           </div>
                        </div>
                        <div className="d-flex justify-content-between text-muted h6 m-0 fw-normal">
                           <div>North India</div>
                           <div>$100 for one</div>
                        </div>
                     </div>
                     <div className="card-footer p-3 border-0">
                        <div className="d-flex align-items-center justify-content-between">
                           <div className="d-flex align-items-center gap-2">
                              <div><img src="imgs/delivery.png" alt="" className="img-fluid ch-30" /></div>
                              <div className="text-muted small">Follows all Max Safety measures to<br /> ensure your
                                 food
                                 id safe
                              </div>
                           </div>
                           <div><img src="imgs/graph-up.png" alt="" className="img-fluid ch-30 cw-30" /></div>
                        </div>
                     </div>
                  </div>
               </a>
            </div>
            <div className="col-12 col-md-4">
               <a href="/search-list" className="text-decoration-none link-dark">
                  <div className="card rounded-4 shadow border-0 overflow-hidden">
                     <div className="position-relative">
                        <div className="product-back"><img
                           src="imgs/4.jpeg"
                           alt="" className="img-fluid rounded-top" /></div>
                        <div className="product-time shadow-sm position-absolute bottom-0 end-0 m-3">
                           <span className="badge bg-light text-dark"><i
                              className="fa-solid fa-stopwatch text-success"></i>&nbsp;28 mins | 1 km</span>
                        </div>
                        <div className="product-off bg-primary p-2 rounded-2 shadow-sm position-absolute top-0 end-0 m-3">
                           <div className="d-flex align-items-start gap-1 fw-bold text-white">
                              <div><i className="fa-solid fa-percent fs-5"></i></div>
                              <div>
                                 <div>10% OFF</div>
                                 <div className="fw-normal">Up to $100</div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="card-body">
                        <div className="d-flex justify-content-between">
                           <div className="h4 fw-bold">Tibet Kitchen</div>
                           <div><span className="badge bg-success">4.5&nbsp;<i className="fa-solid fa-star"></i></span>
                           </div>
                        </div>
                        <div className="d-flex justify-content-between text-muted h6 m-0 fw-normal">
                           <div>Fast Food, CHinese</div>
                           <div>$100 for one</div>
                        </div>
                     </div>
                     <div className="card-footer p-3 border-0">
                        <div className="d-flex align-items-center gap-2">
                           <div><img src="imgs/graph-up.png" alt="" className="img-fluid ch-30 cw-30" /></div>
                           <div className="text-muted">4300+ orders pplaced from here recently</div>
                        </div>
                     </div>
                  </div>
               </a>
            </div>
            <div className="col-12 col-md-4">
               <a href="/search-list" className="text-decoration-none link-dark">
                  <div className="card rounded-4 shadow border-0 overflow-hidden">
                     <div className="position-relative">
                        <div className="product-back"><img
                           src="imgs/5.jpeg"
                           alt="" className="img-fluid rounded-top" /></div>
                        <div className="product-time shadow-sm position-absolute bottom-0 end-0 m-3">
                           <span className="badge bg-light text-dark"><i
                              className="fa-solid fa-stopwatch text-success"></i>&nbsp;25 mins | 1.5 km</span>
                        </div>
                        <div className="product-off bg-primary p-2 rounded-2 shadow-sm position-absolute top-0 end-0 m-3">
                           <div className="d-flex align-items-start gap-1 fw-bold text-white">
                              <div><i className="fa-solid fa-percent fs-5"></i></div>
                              <div>
                                 <div>40% OFF</div>
                                 <div className="fw-normal">Up to $100</div>
                              </div>
                           </div>
                        </div>
                        <div className="position-absolute bottom-0 start-0 bg-danger p-1 rounded-end text-white mb-3">
                           <div className="fw-bold">Extra 10% OFF with Pro</div>
                        </div>
                     </div>
                     <div className="card-body">
                        <div className="d-flex justify-content-between">
                           <div className="h4 fw-bold">Grill Masters</div>
                           <div><span className="badge bg-success">4.2&nbsp;<i className="fa-solid fa-star"></i></span>
                           </div>
                        </div>
                        <div className="d-flex justify-content-between text-muted h6 m-0 fw-normal">
                           <div>Pizza, Burger, Fast Food</div>
                           <div>$100 for one</div>
                        </div>
                     </div>
                     <div className="card-footer p-3 border-0">
                        <div className="d-flex align-items-center gap-2">
                           <div><img src="imgs/graph-up.png" alt="" className="img-fluid ch-30 cw-30" /></div>
                           <div className="text-muted">2175+ orders pplaced from here recently</div>
                        </div>
                     </div>
                  </div>
               </a>
            </div>
            <div className="col-12 col-md-4">
               <a href="/search-list" className="text-decoration-none link-dark">
                  <div className="card rounded-4 shadow border-0 overflow-hidden">
                     <div className="position-relative">
                        <div className="product-back"><img
                           src="imgs/11.jpeg"
                           alt="" className="img-fluid rounded-top" /></div>
                        <div className="product-time shadow-sm position-absolute bottom-0 end-0 m-3">
                           <span className="badge bg-light text-dark"><i
                              className="fa-solid fa-stopwatch text-success"></i>&nbsp;25 mins | 1.5 km</span>
                        </div>
                        <div className="product-off bg-primary p-2 rounded-2 shadow-sm position-absolute top-0 end-0 m-3">
                           <div className="d-flex align-items-start gap-1 fw-bold text-white">
                              <div><i className="fa-solid fa-percent fs-5"></i></div>
                              <div>
                                 <div>40% OFF</div>
                                 <div className="fw-normal">Up to $100</div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="card-body">
                        <div className="d-flex justify-content-between">
                           <div className="h4 fw-bold">Grill Masters</div>
                           <div><span className="badge bg-success">4.1&nbsp;<i className="fa-solid fa-star"></i></span>
                           </div>
                        </div>
                        <div className="d-flex justify-content-between text-muted h6 m-0 fw-normal">
                           <div>Pizza, Burger, Fast Food</div>
                           <div>$100 for one</div>
                        </div>
                     </div>
                     <div className="card-footer p-3 border-0">
                        <div className="d-flex align-items-center gap-2">
                           <div><img src="imgs/graph-up.png" alt="" className="img-fluid ch-30 cw-30" /></div>
                           <div className="text-muted">2175+ orders pplaced from here recently</div>
                        </div>
                     </div>
                  </div>
               </a>
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
                  <span><i className="bi bi-percent h1 active"></i></span>
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
