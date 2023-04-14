import React, { useCallback, useContext } from "react";
import { FoodItemsContext } from "../../../../App";

const RemoveBtn = () => {
  const { foodItemsById, setFoodItemsById } = useContext(FoodItemsContext);
  const foodItems = Object.values(foodItemsById);

  const handleRemoveFoodItems = useCallback(() => {
    foodItems.forEach((foodItem) => {
      const updatedFoodItem = { ...foodItem };
      const itemId = foodItem.getId();
      updatedFoodItem.setCount(0);
      setFoodItemsById({ ...foodItemsById, [itemId]: updatedFoodItem });
    });
  }, [foodItems, foodItemsById, setFoodItemsById]);
  return <button onClick={handleRemoveFoodItems}>Remove All </button>;
};

export default RemoveBtn;
