export default function NotificationSetting() {
  return (
    <>
      <div className="bg-white shadow-sm p-3 mb-2">
         <div className="d-flex align-items-center">
            <div className="gap-3 d-flex align-items-center">
               <a href="/">
                  <i className="bi bi-arrow-left d-flex text-danger h2 m-0 back-page"></i>
               </a>
               <h3 className="fw-bold m-0">Notification Preferences</h3>
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
         <div className="bg-white p-3 mb-2 shadow-sm">
            <div className="d-flex justify-content-between align-items-center">
               <div>
                  <h4>Push Notifications</h4>
                  <p className="text-muted m-0">Tap to enable notification</p>
               </div>
               <div>
                  <div className="form-check form-switch h5">
                     <input className="form-check-input bg-danger border-0" type="checkbox" role="switch"
                        defaultChecked />
                  </div>
               </div>
            </div>
         </div>
         <div className="bg-white p-3 mb-2 shadow-sm">
            <div className="d-flex justify-content-between align-items-start">
               <div>
                  <h4>Enable all</h4>
                  <p className="text-muted m-0">Activate all notification</p>
               </div>
               <div className="form-check form-switch h5">
                  <input className="form-check-input bg-danger border-0" type="checkbox" role="switch"
                     defaultChecked />
               </div>
            </div>
         </div>
         <div className="bg-white p-3 mb-2 shadow-sm">
            <div className="mb-4">
               <h4>Newsletters</h4>
               <p className="text-muted m-0">Receive newsletter to stay up-to date with whats brewing in food industry</p>
            </div>
            <div className="d-flex justify-content-between">
               <div className="fs-5"><i className="bi bi-envelope-fill me-2"></i>&nbsp;Email</div>
               <div className="form-check form-switch h5">
                  <input className="form-check-input bg-danger border-0" type="checkbox" role="switch"
                     defaultChecked />
               </div>
            </div>
         </div>
         <div className="bg-white p-3 mb-2 shadow-sm">
            <div className="mb-4">
               <h4>Promos and offers</h4>
               <p className="text-muted m-0">Receive updates about coupons, promotions and money saving offers</p>
            </div>
            <div className="d-flex justify-content-between">
               <div className="fs-5"><i className="bi bi-envelope-fill me-2"></i>&nbsp;Email</div>
               <div className="form-check form-switch h5">
                  <input className="form-check-input bg-danger border-0" type="checkbox" role="switch"
                     defaultChecked />
               </div>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
               <div className="fs-5"><i className="bi bi-bell-fill me-2"></i>&nbsp;Push</div>
               <div className="form-check form-switch h5">
                  <input className="form-check-input bg-danger border-0" type="checkbox" role="switch"
                     defaultChecked />
               </div>
            </div>
         </div>
         <div className="bg-white p-3 mb-2 shadow-sm">
            <div className="mb-4">
               <h4>Social notifications</h4>
               <p className="text-muted m-0">Get notified when someone follows your profile, or when you get likes and comments
                  on reviews and photos posted by you
               </p>
            </div>
            <div className="d-flex justify-content-between">
               <div className="fs-5"><i className="bi bi-envelope-fill me-2"></i>&nbsp;Email</div>
               <div className="form-check form-switch h5">
                  <input className="form-check-input bg-danger border-0" type="checkbox" role="switch"
                     defaultChecked />
               </div>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
               <div className="fs-5"><i className="bi bi-bell-fill me-2"></i>&nbsp;Push</div>
               <div className="form-check form-switch h5">
                  <input className="form-check-input bg-danger border-0" type="checkbox" role="switch"
                     defaultChecked />
               </div>
            </div>
         </div>
      </div>
      <div className="pb-5 pt-4"></div>
      <div className="fixed-bottom p-3">
         <div className="d-grid">
            <a href="/search-list" className="btn btn-danger btn-lg">Save changes</a>
         </div>
      </div>
    </>
  );
}
