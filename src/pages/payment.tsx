export default function Payment() {
  return (
    <>
      <div className="bg-white shadow-sm p-3 mb-3">
         <div className="d-flex align-items-center">
            <div className="gap-3 d-flex align-items-center">
               <a href="/checkout"><i className="bi bi-arrow-left d-flex text-danger h2 m-0 back-page"></i></a>
               <h3 className="fw-bold m-0">Bill total: $249.30</h3>
            </div>
            <div className="ms-auto gap-3 d-flex align-items-center">
               <a href="/notifications" className="link-dark"><i className="bi bi-bell d-flex m-0 h2"></i></a>
               <a className="toggle osahan-toggle text-dark m-0" href="#"><i className="bi bi-list d-flex m-0 h1"></i></a>
            </div>
         </div>
      </div>
      <div>
         <div className="bg-white p-3 mb-3 shadow-sm">
            <h3 className="fw-bold mb-3">Recommended</h3>
            <a href="#" className="text-decoration-none link-dark">
               <div className="d-flex align-items-center gap-3">
                  <div className="border rounded p-1"><img src="imgs/p7.png" alt="" className="img-fluid cw-30 ch-20" /></div>
                  <div className="fs-5">Google Pay</div>
               </div>
            </a>
         </div>
         <div className="bg-white p-3 mb-3 shadow-sm">
            <h3 className="fw-bold mb-3">Cards</h3>
            <a href="add-card" className="text-decoration-none link-dark">
               <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                     <div className="border rounded p-1"><img
                        src="imgs/p3.png" alt=""
                        className="img-fluid cw-30 ch-20"
                     /></div>
                     <div className="fs-5">Add Credit, Debit & ATM Cards</div>
                  </div>
                  <div><i className="fa-solid fa-chevron-right"></i></div>
               </div>
            </a>
            <hr />
            <a href="add-card" className="text-decoration-none link-dark">
               <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                     <div className="border rounded p-1">
                        <img
                           src="imgs/p1.png"
                           alt=""
                           className="img-fluid cw-30 ch-20"
                        />
                     </div>
                     <div className="fs-5">Sodexo Meal Pass</div>
                  </div>
                  <div><i className="fa-solid fa-chevron-right"></i></div>
               </div>
            </a>
         </div>
         <div className="bg-white p-3 mb-3 shadow-sm">
            <h3 className="fw-bold mb-3">UPI</h3>
            <div className="accordion">
               <div className="accordion-item border-0">
                  <div className="accordion-header lh-sm">
                     <div className="accordion-button collapsed p-0 border-0 shadow-none bg-white" role="navigation" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseThree">
                        <div className="d-flex align-items-center gap-3">
                           <div className="border p-1 rounded-3"><img
                              src="imgs/p4.png"
                              alt=""
                              className="img-fluid cw-30 ch-20"
                           /></div>
                           <div>
                              <h6 className="mb-1">Pay via UPI</h6>
                              <div className="small text-muted">You need to have a registres UPI ID.</div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                     <div className="accordion-body border-0 px-0 pb-0">
                        <form>
                           <div className="mb-3">
                              <input type="email" className="shadow-none form-control" placeholder="Enter Your UPI ID" />
                              <div id="emailHelp" className="form-text">
                                 <div className="d-flex gap-1 align-items-center">
                                    <div><i className="fa-solid fa-shield text-success"></i></div>
                                    <div className="small text-muted">Your UPI ID will be encrypted and is 100% safe with us</div>
                                 </div>
                              </div>
                           </div>
                           <div className="d-grid">
                              <a href="#" className="btn btn-danger btn-lg">Save UPI ID</a>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="bg-white p-3 mb-3 shadow-sm">
            <h3 className="fw-bold mb-3">Wallets</h3>
            <div className="accordion">
               <div className="accordion-item border-0">
                  <div className="accordion-header lh-sm">
                     <div className="accordion-button collapsed p-0 border-0 shadow-none bg-white" role="navigation" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseOne">
                        <div className="d-flex align-items-center gap-3">
                           <div className="border p-1 rounded-3"><img
                              src="imgs/p2.png"
                              alt=""
                              className="img-fluid cw-30 ch-20"
                           /></div>
                           <div>
                              <h6 className="mb-1">Paytm</h6>
                              <div className="small text-muted">a your Paytm wallet to use this payment method.</div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse">
                     <div className="accordion-body border-0 px-0 pb-0">
                        <div className="input-group">
                           <input type="text" className="shadow-none form-control" placeholder="Enter Code" />
                           <button className="btn btn-outline-secondary" type="button">Pay</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <hr />
            <div className="accordion my-2">
               <div className="accordion-item border-0">
                  <div className="accordion-header lh-sm">
                     <div className="accordion-button collapsed p-0 border-0 shadow-none bg-white" role="navigation" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTwo">
                        <div className="d-flex align-items-center gap-3">
                           <div className="border p-1 rounded-3"><img
                              src="imgs/p3.png"
                              alt=""
                              className="img-fluid cw-30 ch-20"
                           /></div>
                           <div>
                              <h6 className="mb-1">Mobikwik</h6>
                              <div className="small text-muted">a your Mobikwik wallet to use this payment method.</div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                     <div className="accordion-body border-0 px-0 pb-0">
                        <div className="input-group">
                           <input type="text" className="shadow-none form-control" placeholder="Enter Code" />
                           <button className="btn btn-outline-secondary" type="button">Pay</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <hr />
            <div className="accordion">
               <div className="accordion-item border-0">
                  <div className="accordion-header lh-sm">
                     <div className="accordion-button collapsed p-0 border-0 shadow-none bg-white" role="navigation" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseFour">
                        <div className="d-flex align-items-center gap-3">
                           <div className="border p-1 rounded-3"><img
                              src="imgs/p4.png"
                              alt=""
                              className="img-fluid cw-30 ch-20"
                           /></div>
                           <div>
                              <h6 className="mb-1">Freecharge</h6>
                              <div className="small text-muted">a your Freecharge wallet to use this payment menthod.</div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse">
                     <div className="accordion-body border-0 px-0 pb-0">
                        <div className="input-group">
                           <input type="text" className="shadow-none form-control" placeholder="Enter Code" />
                           <button className="btn btn-outline-secondary" type="button">Pay</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="bg-white p-3 mb-3 shadow-sm">
            <h3 className="fw-bold mb-3">Recommended</h3>
            <a href="#" className="text-decoration-none link-dark">
               <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                     <div className="border rounded p-1"><img
                        src="imgs/p3.png"
                        alt=""
                        className="img-fluid cw-30 ch-20"
                     /></div>
                     <div className="fs-5">Netbanking</div>
                  </div>
                  <div><i className="fa-solid fa-chevron-right"></i></div>
               </div>
            </a>
         </div>
         <div className="bg-white p-3 mb-3 shadow-sm">
            <h3 className="fw-bold mb-3">Pay Later</h3>
            <div className="accordion">
               <div className="accordion-item border-0">
                  <div className="accordion-header lh-sm">
                     <div className="accordion-button collapsed p-0 border-0 shadow-none bg-white" role="navigation" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseLaztpay" aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseLaztpay">
                        <div className="d-flex align-items-center gap-3">
                           <div className="border p-1 rounded-3"><img
                              src="imgs/p1.png"
                              alt=""
                              className="img-fluid cw-30 ch-20"
                           /></div>
                           <div>
                              <h6 className="mb-1">LazyPay</h6>
                              <div className="small text-muted">a your Freecharge wallet to use this payment menthod.</div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div id="panelsStayOpen-collapseLaztpay" className="accordion-collapse collapse">
                     <div className="accordion-body border-0 px-0 pb-0">
                        <div className="input-group">
                           <input type="text" className="shadow-none form-control" placeholder="Enter Code" />
                           <button className="btn btn-outline-secondary" type="button">Pay</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <hr />
            <div className="accordion my-2">
               <div className="accordion-item border-0">
                  <div className="accordion-header lh-sm">
                     <div className="accordion-button collapsed p-0 border-0 shadow-none bg-white" role="navigation" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseSimpl" aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseSimpl">
                        <div className="d-flex align-items-center gap-3">
                           <div className="border p-1 rounded-3"><img
                              src="imgs/p2.png"
                              alt=""
                              className="img-fluid cw-30 ch-20"
                           /></div>
                           <div>
                              <h6 className="mb-1">Simpl</h6>
                              <div className="small text-muted">a your Freecharge wallet to use this payment menthod.</div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div id="panelsStayOpen-collapseSimpl" className="accordion-collapse collapse">
                     <div className="accordion-body border-0 px-0 pb-0">
                        <div className="input-group">
                           <input type="text" className="shadow-none form-control" placeholder="Enter Code" />
                           <button className="btn btn-outline-secondary" type="button">Pay</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <hr />
            <div className="accordion">
               <div className="accordion-item border-0">
                  <div className="accordion-header lh-sm">
                     <div className="accordion-button collapsed p-0 border-0 shadow-none bg-white" role="navigation" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseola" aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseola">
                        <div className="d-flex align-items-center gap-3">
                           <div className="border p-1 rounded-3"><img
                              src="imgs/p5.png"
                              alt=""
                              className="img-fluid cw-30 ch-20"
                           /></div>
                           <div>
                              <h6 className="mb-1">OLA Money Postpaid+</h6>
                              <div className="small text-muted">a your Freecharge wallet to use this payment menthod.</div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div id="panelsStayOpen-collapseola" className="accordion-collapse collapse">
                     <div className="accordion-body border-0 px-0 pb-0">
                        <div className="input-group">
                           <input type="text" className="shadow-none form-control" placeholder="Enter Code" />
                           <button className="btn btn-outline-secondary" type="button">Pay</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="bg-white p-3">
            <h3 className="fw-bold mb-3">Pay On Delivery</h3>
            <div className="d-flex align-items-center gap-3">
               <div className="border p-1 rounded">
                  <img src="imgs/p6.png" alt="" className="img-fluid cw-30 ch-20" />
               </div>
               <div>
                  <h6 className="mb-1">Cash On Delivery</h6>
                  <div className="small text-danger">Cash On delivery Is not available at this moment</div>
               </div>
            </div>
         </div>
      </div>
      <div className="p-5"></div>
      <div className="bg-white p-3 fixed-bottom">
         <div className="d-grid">
            <a href="/order-confirm" className="btn btn-danger btn-lg">Done</a>
         </div>
      </div>
    </>
  );
}
