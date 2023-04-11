import React from "react";
import RestaurantDescription from "./RestaurantDescription";
import RestaurantOffer from "./RestaurantOffer";
import RestaurantTabs from "./RestaurantTabs";

export default function RestaurantInfo() {
  return (
    <section className="restaurant">
      <RestaurantDescription />
      <RestaurantOffer />
      <RestaurantTabs />
    </section>
  );
}
