import React from "react";
import BreadCrumb from "./breadCrumbList/BreadCrumb";
import Footer from "./footer";
import Header from "./header/Header";
import MenuInfo from "./menuInfo/MenuInfo";
import RestaurentInfo from "./restaurantInfo/RestaurantInfo";

const Landing = () => {
  // console.log(foodItemsById);
  return (
    <div className="container">
      <Header />
      <BreadCrumb />
      <RestaurentInfo />
      <MenuInfo />
      <Footer />
    </div>
  );
};

export default Landing;
