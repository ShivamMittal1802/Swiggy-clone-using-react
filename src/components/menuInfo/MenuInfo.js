import React, {useState, useContext, createContext} from "react";
import FoodItems from "./FoodItems/FoodItems";
import SideNav from "./SideNav";
import Cart from "./cart/Cart";
import { FoodItemsContext } from "../../App";

export const filteredListContext = createContext();

const MenuInfo = () => {
  const {foodItemsById } = useContext(FoodItemsContext);
  const [filteredList, setFilteredList] = useState(foodItemsById);

  return (
    <filteredListContext.Provider value={{filteredList, setFilteredList}}>
    <div className="menu-info">
      <SideNav />
      <FoodItems />
      <Cart />
    </div>
    </filteredListContext.Provider>
  );
};

export default MenuInfo;
