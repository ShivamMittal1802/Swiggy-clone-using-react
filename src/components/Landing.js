import React, { createContext, useState } from "react";
import BreadCrumb from "./breadCrumbList/BreadCrumb";
import Footer from "./footer";
import Header from "./header/Header";
import MenuInfo from "./menuInfo/MenuInfo";
import RestaurentInfo from "./restaurantInfo/RestaurantInfo";

export const searchQueryContext = createContext();
export const isVegContext = createContext();

const Landing = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isVeg, setIsVeg] = useState(false);

  return (
    <searchQueryContext.Provider value={{ searchQuery, setSearchQuery }}>
      <isVegContext.Provider value={{ isVeg, setIsVeg }}>
        <div className="container">
          <Header />
          <BreadCrumb />
          <RestaurentInfo />
          <MenuInfo />
          <Footer />
        </div>
      </isVegContext.Provider>
    </searchQueryContext.Provider>
  );
};

export default Landing;
