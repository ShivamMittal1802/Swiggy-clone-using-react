import React from "react";
import AddFoodItem from "./AddFoodItem";

const RenderItems = ({ categoryWiseFoodList, setFoodItemsById }) => {
  return (
    <>
      {categoryWiseFoodList.map((foodItem) => {
        return (
          <AddFoodItem
            key={foodItem.getId()}
            foodItem={foodItem}
            setFoodItemsById={setFoodItemsById}
          />
        );
      })}
    </>
  );
};

export default RenderItems;
