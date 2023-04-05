import React from "react";
import RestaurantDescription from "./ResturantDescription";
import ResturantOffer from "./ResturantOffer";
import ResturantTabs from "./ResturantTabs";

export default function RestaurantInfo() {
  return (
    <section className="resturant">
      <RestaurantDescription/>
      <ResturantOffer/>
      <ResturantTabs/>
    </section>
  );
}
