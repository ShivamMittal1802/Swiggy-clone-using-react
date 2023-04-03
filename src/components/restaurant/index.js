import React from "react";
import RestaurantUpperBox from "./upperBox";
import RestaurantLowerBox from "./lowerBox";

export default function RestaurentInfo() {
  return (
    <div className="restaurent">
      <RestaurantUpperBox />
      <RestaurantLowerBox />
    </div>
  );
}
