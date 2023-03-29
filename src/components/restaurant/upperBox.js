import React from 'react';

export default function RestaurantUpperBox() {
  return (
    <div className="upper-box">
      {/* Adding An Image */}
      <div className="restaurant-image-container">
        <img
          width="254"
          height="165"
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/yfyo8aklppbwdplv7ofp"
          alt="Restaurant Image"
        />
      </div>

      {/* Adding restaurant info */}
      <div className="rest-info">
        <h1>Meghana Foods</h1>
        <p>Biryani, Andhra</p>
        <p>Outer Ring Road, Marathahalli | Change Outlet</p>

        <div className="rating">
          <div>
            <span>4.2</span>
            <p>1k+ rating</p>
          </div>
          <div>
            <span>41 Mins</span>
            <p>Delivery Time</p>
          </div>
          <div>
            <span>Rs 500</span>
            <p>Cost for two</p>
          </div>
        </div>

        {/* Adding offer div */}
      </div>
        <div className="offer">
          <div id="offer">OFFER</div>
          <div id="off">
            <span>50% off up to Rs 100 | Use code WELCOME50</span>
          </div>
          <div id="delivery">
            <span>Free Delivery</span>
          </div>
        </div>
    </div>
  );
}