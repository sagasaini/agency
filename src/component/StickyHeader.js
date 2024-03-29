import React from 'react';
import './StickyHeader.css'; // Make sure to link the CSS file

const StickyHeader = () => {
  return (
    <div className="sticky-header">
      <div className="title">Notification</div>

    <div className="input-headers">
    <input type="text" placeholder="Name" className="form-field" />
      <input type="email" placeholder="Email" className="form-field" />
      <input type="text" placeholder="Token" className="form-field" />
      <button class="login-btn"> Submit
</button>
    </div>

    </div>
  );
};

export default StickyHeader;
