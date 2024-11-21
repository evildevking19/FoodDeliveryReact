export default function SideNav() {
    return (
        <nav id="main-nav">
        <ul className="second-nav">
          <li>
            <a
              href="/edit-profile"
              className="bg-danger sidebar-user d-flex align-items-center p-3 border-0 mb-0 rounded-4"
            >
              <img
                src="imgs/user.jpeg"
                className="img-fluid rounded-pill me-3 ch-50"
                alt="#"
              />
              <div className="text-white">
                <h6 className="mb-0">Hi Your Name</h6>
                <small>+91 12345-67890</small>
                <br />
                <span className="f-10 text-white-50">Version 1.32</span>
              </div>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="bi bi-house me-2"></i> Homepage
            </a>
          </li>
          <li>
            <a href="/enable-location">
              <i className="bi bi-geo-alt me-2"></i> Enable Location
            </a>
          </li>
          <li>
            <a href="/location">
              <i className="bi bi-geo me-2"></i> Add Location
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-key me-2"></i> Authentication
            </a>
            <ul>
              <li>
                <a href="/signup">Sign In/Up</a>
              </li>
              <li>
                <a href="/otp-verify">Verification</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/coupons">
              <i className="bi bi-ticket-detailed me-2"></i> Coupons
            </a>
          </li>
          <li>
            <a href="/offers">
              <i className="bi bi-percent me-2"></i> Offers
            </a>
          </li>
          <li>
            <a href="/wallet">
              <i className="bi bi-wallet me-2"></i> Wallet
            </a>
          </li>
          <li>
            <a href="/notification-setting">
              <i className="bi bi-bell-slash me-2"></i> Notification Setting
            </a>
          </li>
          <li>
            <a href="/notifications">
              <i className="bi bi-bell me-2"></i> Notifications
            </a>
          </li>
          <li>
            <a href="/setting">
              <i className="bi bi-gear me-2"></i> Setting
            </a>
          </li>
          <li>
            <a href="/search-list">
              <i className="bi bi-search me-2"></i> Search List
            </a>
          </li>
          <li>
            <a href="/store">
              <i className="bi bi-shop me-2"></i> Store
            </a>
          </li>
          <li>
            <a href="/cart">
              <i className="bi bi-bag me-2"></i> Cart
            </a>
          </li>
          <li>
            <a href="/checkout">
              <i className="bi bi-cart me-2"></i> Checkout
            </a>
          </li>
          <li>
            <a href="/payment">
              <i className="bi bi-credit-card me-2"></i> Payment
            </a>
          </li>
          <li>
            <a href="/add-card">
              <i className="bi bi-credit-card-2-front me-2"></i> Add Card
            </a>
          </li>
          <li>
            <a href="/personal-info">
              <i className="bi bi-person me-2"></i> Personal Info
            </a>
          </li>
          <li>
            <a href="/edit-profile">
              <i className="bi bi-pencil me-2"></i> Edit Profile
            </a>
          </li>
          <li>
            <a href="/my-address">
              <i className="bi bi-map me-2"></i> My Address
            </a>
          </li>
          <li>
            <a href="/your-order">
              <i className="bi bi-view-list me-2"></i> Your Order
            </a>
          </li>
          <li>
            <a href="/order-confirm">
              <i className="bi bi-bag-check me-2"></i> Order Confirm
            </a>
          </li>
          <li>
            <a href="/order-details">
              <i className="bi bi-list-nested me-2"></i> Order Details
            </a>
          </li>
          <li>
            <a href="/support">
              <i className="bi bi-question-circle me-2"></i> Support
            </a>
          </li>
        </ul>
        <ul className="bottom-nav">
          <li className="email">
            <a
              className="text-danger nav-item text-center"
              href="/"
              tabIndex={0}
            >
              <p className="h5 m-0">
                <i className="icofont-ui-home text-danger"></i>
              </p>
              Home
            </a>
          </li>
          <li className="github">
            <a href="/offers" className="nav-item text-center" tabIndex={0}>
              <p className="h5 m-0">
                <i className="icofont-sale-discount"></i>
              </p>
              Offer
            </a>
          </li>
          <li className="ko-fi">
            <a href="/support" className="nav-item text-center" tabIndex={0}>
              <p className="h5 m-0">
                <i className="icofont-support-faq"></i>
              </p>
              Help
            </a>
          </li>
        </ul>
      </nav>
    );
}