export default function Setting() {
  return (
    <>
      <div className="bg-white shadow-sm p-3">
         <div className="d-flex align-items-center">
            <div className="gap-3 d-flex align-items-center">
               <a href="/"><i className="bi bi-arrow-left d-flex text-danger h2 m-0 back-page"></i></a>
               <h3 className="fw-bold m-0">Setting</h3>
            </div>
            <div className="ms-auto gap-3 d-flex align-items-center">
               <a href="/notifications" className="link-dark"><i className="bi bi-bell d-flex m-0 h2"></i></a>
               <a className="toggle osahan-toggle text-dark m-0" href="#"><i className="bi bi-list d-flex m-0 h1"></i></a>
            </div>
         </div>
      </div>
      <div className="p-3">
         <a href="/my-address" className="text-decoration-none link-dark">
            <h5 className="mb-0">Add a Place</h5>
            <p className="text-muted">In case we're missing something</p>
         </a>
         <hr />
         <a href="/location" className="text-decoration-none link-dark">
            <h5>Place you've added</h5>
            <p className="text-muted">See all the place you've added so far</p>
         </a>
         <hr />
         <a href="/edit-profile" className="text-decoration-none link-dark">
            <h5>Edit profile</h5>
            <p className="text-muted">Change your name, description and profile photo</p>
         </a>
         <hr />
         <a href="/notification-setting" className="text-decoration-none link-dark">
            <h5>Notification settings</h5>
            <p className="text-muted">Define what alerts and notifications you want to see</p>
         </a>
         <hr />
         <a href="/edit-profile" className="text-decoration-none link-dark">
            <h5>Account settings</h5>
            <p className="text-muted">Delete your account</p>
         </a>
      </div>
    </>
  );
}
