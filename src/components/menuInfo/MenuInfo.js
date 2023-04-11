import React from "react";
import FoodItems from "./FoodItems/FoodItems";
import SideNav from "./SideNav";
import Cart from "./cart/Cart";

const MenuInfo = ({foodItemsById, setFoodItemsById}) => {
  
  return (
    <div className="menu-info">
      <SideNav foodItemsById={foodItemsById} />
      <FoodItems
        foodItemsById={foodItemsById}
        setFoodItemsById={setFoodItemsById}
      />
      <Cart foodItemsById={foodItemsById} setFoodItemsById={setFoodItemsById} />
    </div>
  );
};

export default MenuInfo;
