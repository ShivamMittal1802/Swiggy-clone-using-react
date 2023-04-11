import React from "react";

function RestaurantTabs() {
  return (
    <div className="restaurant-tabs">
      <div className="restaurant-search-text ">
        <i className="bi bi-search icon-modify"></i> Search for dishes...
      </div>
      <div className="restaurant-checkbox-text">
        <i className="bi bi-square icon-modify"></i> Veg only
      </div>
      <div className="restaurant-favourite-text">
        <i className="bi bi-suit-heart icon-modify"></i>Favourite
      </div>
    </div>
  );
}

export default RestaurantTabs;
