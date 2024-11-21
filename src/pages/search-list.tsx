export default function SearchList() {
  return (
    <>
      <div className="bg-white shadow-sm px-3 pt-3">
         <div className="d-flex align-items-center">
            <div className="gap-3 d-flex align-items-center">
               <a href="/"><i className="bi bi-arrow-left d-flex text-danger h2 m-0 back-page"></i></a>
               <h3 className="fw-bold m-0">Search List</h3>
            </div>
            <div className="ms-auto gap-3 d-flex align-items-center">
               <a href="/notifications" className="link-dark"><i className="bi bi-bell d-flex m-0 h2"></i></a>
               <a className="toggle osahan-toggle text-dark m-0" href="#"><i className="bi bi-list d-flex m-0 h1"></i></a>
            </div>
         </div>
      </div>
      <div className="sticky-top bg-white p-3">
         <div className="input-group bg-white rounded-md border p-0 overflow-hidden">
            <a href="/" className="input-group-text text-decoration-none text-danger border-0 border-end bg-white pe-0"><i className="fa-solid fa-arrow-left"></i></a>
            <input type="text" className="shadow-none form-control border-0 border-end" defaultValue="Pizza" />
            <a href="#" className="input-group-text text-decoration-none border-0 bg-white"><i className="fa-solid fa-xmark text-danger"></i></a>
         </div>
      </div>
      <main className="px-3">
         <div className="relevance-back">
            <div className="relevance-scroll d-flex gap-2">
               <div className="bg-white">
                  <input type="radio" className="btn-check" name="btnradio" id="btnradio1" />
                  <label className="btn btn-outline-secondary btn-sm rounded" htmlFor="btnradio1"><span><i className="fa-solid fa-shield"></i></span> MAX Safety</label>
               </div>
               <div className="bg-white">
                  <input type="radio" className="btn-check" name="btnradio" id="btnradio2" />
                  <label className="btn btn-outline-secondary btn-sm rounded" htmlFor="btnradio2">Fast Delivery</label>
               </div>
               <div className="bg-white">
                  <input type="radio" className="btn-check" name="btnradio" id="btnradio3" />
                  <label className="btn btn-outline-secondary btn-sm rounded" htmlFor="btnradio3"><span><i className="fa-brands fa-envira"></i></span> Veg</label>
               </div>
            </div>
         </div>
      </main>
      <div className="p-3">
         <div className="d-flex align-items-center justify-content-between mb-3">
            <h3 className="fw-bold mb-0">Restaurants</h3>
            <button type="button" className="btn btn-white bg-white border rounded btn-sm" data-bs-toggle="modal"
               data-bs-target="#staticBackdrop2">
            <span><i className="fa-solid fa-arrows-up-down"></i></span>
            Relevance
            </button>
         </div>
         <div className="row g-3">
            <div className="col-12 col-md-4">
               <a href="/store" className="text-decoration-none link-dark">
                  <div className="card rounded-4 shadow border-0 overflow-hidden">
                     <div className="position-relative">
                        <div className="product-veg bg-success  opacity-75 text-center text-white p-2"><span><i
                           className="fa-brands fa-envira"></i></span>&nbsp;Pure Veg Resturant</div>
                        <img
                           src="imgs/1.jpeg"
                           alt="" className="img-fluid rounded-top" />
                     </div>
                     <div className="card-body">
                        <div className="d-flex justify-content-between">
                           <div className="h4 fw-bold">Domino's Pizza</div>
                           <div><span className="badge bg-success">4.5&nbsp;<i className="fa-solid fa-star"></i></span></div>
                        </div>
                        <div className="d-flex justify-content-between text-muted h6 m-0 fw-normal">
                           <div>Burger, Fast Food, Beverages</div>
                           <div>$150 for one</div>
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
               <a href="/store" className="text-decoration-none link-dark">
                  <div className="card rounded-4 shadow border-0 overflow-hidden">
                     <div className="position-relative"> 
                        <img
                           src="imgs/6.jpeg"
                           alt="" className="img-fluid rounded-top" />
                     </div>
                     <div className="card-body">
                        <div className="d-flex justify-content-between">
                           <div className="h4 fw-bold">Pizza Hut</div>
                           <div><span className="badge bg-success">4.2&nbsp;<i className="fa-solid fa-star"></i></span></div>
                        </div>
                        <div className="d-flex justify-content-between text-muted h6 m-0 fw-normal">
                           <div>Fast Food Burger</div>
                           <div>$100 for one</div>
                        </div>
                     </div>
                     <div className="card-footer p-3 border-0">
                        <div className="d-flex align-items-center gap-2">
                           <div><img src="imgs/graph-up.png" alt="" className="img-fluid ch-30 cw-30" /></div>
                           <div className="text-muted">8400+ orders pplaced from here recently</div>
                        </div>
                     </div>
                  </div>
               </a>
            </div>
            <div className="col-12 col-md-4">
               <a href="/store" className="text-decoration-none link-dark">
                  <div className="card rounded-4 shadow border-0 overflow-hidden">
                     <div className="position-relative"> 
                        <img
                           src="imgs/7.jpeg"
                           alt="" className="img-fluid rounded-top" />
                     </div>
                     <div className="card-body">
                        <div className="d-flex justify-content-between">
                           <div className="h4 fw-bold">Dabbu Pizza</div>
                           <div><span className="badge bg-success">4.4&nbsp;<i className="fa-solid fa-star"></i></span></div>
                        </div>
                        <div className="d-flex justify-content-between text-muted h6 m-0 fw-normal">
                           <div>Pizza, Fast Food</div>
                           <div>$170 for one</div>
                        </div>
                     </div>
                     <div className="card-footer p-3 border-0">
                        <div className="d-flex align-items-center gap-2">
                           <div><img src="imgs/graph-up.png" alt="" className="img-fluid ch-30 cw-30" /></div>
                           <div className="text-muted">3400+ orders pplaced from here recently</div>
                        </div>
                     </div>
                  </div>
               </a>
            </div>
            <div className="col-12 col-md-4">
               <a href="/store" className="text-decoration-none link-dark">
                  <div className="card rounded-4 shadow border-0 overflow-hidden">
                     <div className="position-relative"> 
                        <img
                           src="imgs/8.jpeg"
                           alt="" className="img-fluid rounded-top" />
                     </div>
                     <div className="card-body">
                        <div className="d-flex justify-content-between">
                           <div className="h4 fw-bold">Castle Grill</div>
                           <div><span className="badge bg-success">4.4&nbsp;<i className="fa-solid fa-star"></i></span></div>
                        </div>
                        <div className="d-flex justify-content-between text-muted h6 m-0 fw-normal">
                           <div>Pizza, Fast Food</div>
                           <div>$200 for one</div>
                        </div>
                     </div>
                     <div className="card-footer p-3 border-0">
                        <div className="d-flex align-items-center gap-2">
                           <div><img src="imgs/graph-up.png" alt="" className="img-fluid ch-30 cw-30" /></div>
                           <div className="text-muted">5400+ orders pplaced from here recently</div>
                        </div>
                     </div>
                  </div>
               </a>
            </div>
            <div className="col-12 col-md-4">
               <a href="/store" className="text-decoration-none link-dark">
                  <div className="card rounded-4 shadow border-0 overflow-hidden">
                     <div className="position-relative"> 
                        <img
                           src="imgs/9.jpeg"
                           alt="" className="img-fluid rounded-top" />
                     </div>
                     <div className="card-body">
                        <div className="d-flex justify-content-between">
                           <div className="h4 fw-bold">BBC</div>
                           <div><span className="badge bg-success">3.6&nbsp;<i className="fa-solid fa-star"></i></span></div>
                        </div>
                        <div className="d-flex justify-content-between text-muted h6 m-0 fw-normal">
                           <div>Fast Food, Burger, Pizza</div>
                           <div>$150 for one</div>
                        </div>
                     </div>
                     <div className="card-footer p-3 border-0">
                        <div className="d-flex align-items-center gap-2">
                           <div><img src="imgs/graph-up.png" alt="" className="img-fluid ch-30 cw-30" /></div>
                           <div className="text-muted">300+ orders pplaced from here recently</div>
                        </div>
                     </div>
                  </div>
               </a>
            </div>
            <div className="col-12 col-md-4">
               <a href="/store" className="text-decoration-none link-dark">
                  <div className="card rounded-4 shadow border-0 overflow-hidden">
                     <div className="position-relative"> 
                        <img
                           src="imgs/10.jpeg"
                           alt="" className="img-fluid rounded-top" />
                     </div>
                     <div className="card-body">
                        <div className="d-flex justify-content-between">
                           <div className="h4 fw-bold">9/12 Dining Restaurants</div>
                           <div><span className="badge bg-success">3.4&nbsp;<i className="fa-solid fa-star"></i></span></div>
                        </div>
                        <div className="d-flex justify-content-between text-muted h6 m-0 fw-normal">
                           <div>North Indian,chines, Fast...</div>
                           <div>$200 for one</div>
                        </div>
                     </div>
                     <div className="card-footer p-3 border-0">
                        <div className="d-flex align-items-center gap-2">
                           <div><img src="imgs/graph-up.png" alt="" className="img-fluid ch-30 cw-30" /></div>
                           <div className="text-muted">250+ orders pplaced from here recently</div>
                        </div>
                     </div>
                  </div>
               </a>
            </div>
         </div>
      </div>
      <div className="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1}
         aria-labelledby="staticBackdropLabel" aria-hidden="true">
         <div className="modal-dialog  modal-dialog-centered">
            <div className="modal-content border-0">
               <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">Sort by</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div className="modal-body">
                  <div className="form-check d-flex justify-content-between mb-3 px-0 fs-6">
                     <label className="form-check-label" htmlFor="flexRadioDefault1">
                     Relevance
                     </label>
                     <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                        defaultChecked
                     />
                  </div>
                  <div className="form-check d-flex justify-content-between mb-3 px-0 fs-6">
                     <label className="form-check-label text-muted" htmlFor="flexRadioDefault2">
                     Rating: High To Low
                     </label>
                     <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                  </div>
                  <div className="form-check d-flex justify-content-between mb-3 px-0 fs-6">
                     <label className="form-check-label text-muted" htmlFor="flexRadioDefault3">
                     Cost: Low To High
                     </label>
                     <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                  </div>
                  <div className="form-check d-flex justify-content-between mb-0 px-0 fs-6">
                     <label className="form-check-label text-muted" htmlFor="flexRadioDefault4">
                     Cost: High To Low
                     </label>
                     <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                  </div>
               </div>
               <div className="modal-footer">
                  <button type="button" className="btn btn-white text-danger" data-bs-dismiss="modal">Clear
                  All</button>
                  <button type="button" className="btn btn-danger rounded-md">Apply</button>
               </div>
            </div>
         </div>
      </div>
    </>
  );
}
