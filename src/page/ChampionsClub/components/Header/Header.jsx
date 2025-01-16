
import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="site-header">
      <div className="contact-info">
        <div className="contact-item">
          <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-01-10/2dbde6fc-7316-4fc7-9cea-dfa0a92182b9.png" alt="Email" className="contact-icon" />
          <span>info@champions.club</span>
        </div>
        <div className="contact-item">
          <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-01-10/a2cbdc8a-7364-49d8-bd6b-e6fd883607f7.png" alt="Phone" className="contact-icon" />
          <span>+91 90719 00022</span>
        </div>
        <div className="social-icons">
          <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-01-10/fcb38a79-5063-4247-a3f2-dced88a60969.png" alt="Social Icon 1" className="social-icon" />
          <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-01-10/c62f163c-fb8a-40c1-a94a-499866026f9f.png" alt="Social Icon 2" className="social-icon" />
          <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-01-10/c81dc2aa-674f-4d52-918c-3d02ed3a5f52.png" alt="Social Icon 3" className="social-icon" />
        </div>
      </div>
      <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-01-10/2ad9e66b-f3ca-4ea6-ad83-d1a84dbfd7ae.png" alt="Champions Club Logo" className="logo" />
      <div className="header-actions">
        <button className="search-button" aria-label="Search">
          <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-01-10/7b7a1ad8-5037-4ea3-a80a-848cb11a278e.png" alt="Search" />
        </button>
        <button className="notification-button" aria-label="Notifications">
          <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-01-10/18e3f2f8-d598-4722-9996-cd053350f150.png" alt="Notifications" />
        </button>
        <button className="register-button">Register/ Login</button>
      </div>
    </header>
  );
}
