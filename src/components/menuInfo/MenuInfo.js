import React from "react";
import FoodItems from "./FoodItems/FoodItems";
import SideNav from "./SideNav";
import Cart from "./cart/Cart";

const MenuInfo = () => {
  return (
    <div className="menu-info">
      <SideNav />
      <FoodItems />
      <Cart />
    </div>
  );
};

export default MenuInfo;
