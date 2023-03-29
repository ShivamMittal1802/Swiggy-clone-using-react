import React from "react";

export default function CreateRestaurantLowerBox() {
  return (
    <div className="lower-box">
      <div id="search-bar">
        <input type="text" placeholder="Search For Dishes..." />
      </div>
      <div id="veg-only">
        <div>Veg-Only</div>
      </div>
      <div id="favourite">
        <label>Favourite</label>
      </div>
    </div>
  );
};