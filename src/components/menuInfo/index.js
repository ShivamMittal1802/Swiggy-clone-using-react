import React, { useState } from "react";
import CreateFoodItems from "./createFoodItems";
import FOOD_ITEMS from "../../data/constants/rawData";
import FoodItem from "../../data/builders/FoodItem";

function getFoodItemsById() {
  const mapIdToFoodItem = {};
  FOOD_ITEMS.forEach((item) => {
    const foodItem = new FoodItem(item);
    if (mapIdToFoodItem[foodItem.getId()])
      mapIdToFoodItem[foodItem.getId()].push(foodItem);
    else mapIdToFoodItem[foodItem.getId()] = foodItem;
  });
  return mapIdToFoodItem;
}

const MenuInfo = () => {
  const [foodItemsById, setFoodItemsById] = useState(getFoodItemsById());
  return (
    <CreateFoodItems
      foodItemsById={foodItemsById}
      setFoodItemsById={setFoodItemsById}
    />
  );
};

export default MenuInfo;
