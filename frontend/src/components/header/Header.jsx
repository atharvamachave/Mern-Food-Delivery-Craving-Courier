import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Delivering happiness. Straight out of the kitchen to your doorstep.
          The best service to fulfill your expectations. Delivering lip-smacking
          food is our passion.Trusted by every food addict. Delivery that
          satisfies your hunger. Tasty, hot, and hygienic. Time is precious, and
          we know that.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
