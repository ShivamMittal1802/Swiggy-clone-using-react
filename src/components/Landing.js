import React, { createContext, useState } from "react";
import BreadCrumb from "./breadCrumbList/BreadCrumb";
import Footer from "./footer";
import Header from "./header/Header";
import MenuInfo from "./menuInfo/MenuInfo";
import RestaurentInfo from "./restaurantInfo/RestaurantInfo";

export const searchQueryContext = createContext();


const Landing = () => {
  // console.log(foodItemsById);
  const [searchQuery, setSearchQuery] = useState("");
  
  return (
    <searchQueryContext.Provider value={{ searchQuery, setSearchQuery }}>
      <div className="container">
      <Header />
      <BreadCrumb />
      <RestaurentInfo />
      <MenuInfo />
      <Footer />
    </div>
    </searchQueryContext.Provider>

  );
};

export default Landing;
