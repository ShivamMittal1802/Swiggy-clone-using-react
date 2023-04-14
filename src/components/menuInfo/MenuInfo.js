import React, { useState, useContext, createContext, useEffect } from "react";
import FoodItems from "./FoodItems/FoodItems";
import SideNav from "./SideNav";
import Cart from "./cart/Cart";
import { FoodItemsContext } from "../../App";
import { isVegContext, searchQueryContext } from "../Landing";

export const filteredFoodItemsListContext = createContext();

const MenuInfo = () => {
  const { foodItemsById } = useContext(FoodItemsContext);
  const [filteredFoodItemsList, setFilteredFoodItemsList] = useState([]);
  const { searchQuery } = useContext(searchQueryContext);
  const { isVeg } = useContext(isVegContext);
  useEffect(() => {
    setFilteredFoodItemsList(
      Object.values(foodItemsById).filter((item) => {
        if (isVeg) {
          return (
            item.getIsVeg() &&
            item.getName().toLowerCase().includes(searchQuery.toLowerCase())
          );
        } else
          return item
            .getName()
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
      })
    );
  }, [searchQuery, foodItemsById, isVeg]);
  return (
    <filteredFoodItemsListContext.Provider
      value={{ filteredFoodItemsList, setFilteredFoodItemsList }}
    >
      <div className="menu-info">
        <SideNav />
        <FoodItems />
        <Cart />
      </div>
    </filteredFoodItemsListContext.Provider>
  );
};

export default MenuInfo;
