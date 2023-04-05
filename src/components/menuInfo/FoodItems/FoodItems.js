import React from "react";
import RenderItems from "./renderFoodItems/RenderItems";
import ShowCategory from "./ShowCategory";

const FoodItems = ({ foodItemsById, setFoodItemsById }) => {
  const foodItems = Object.values(foodItemsById);
  const foodItemsByCategoryId = getFoodItemsByCategoryId(foodItems);

  return (
    <div className="food-items">
      {Object.keys(foodItemsByCategoryId).map((categoryId) => {
        const categoryWiseFoodList = foodItemsByCategoryId[categoryId];
        return (
          <>
            <ShowCategory categoryWiseFoodList={categoryWiseFoodList} />
            <RenderItems
              categoryWiseFoodList={categoryWiseFoodList}
              setFoodItemsById={setFoodItemsById}
              foodItemsById={foodItemsById}
            />
          </>
        );
      })}
    </div>
  );
  function getFoodItemsByCategoryId(foodItems) {
    const foodItemsByCategoryId = {};
    foodItems.forEach((item) => {
      if (foodItemsByCategoryId[item.getCategoryId()]) {
        foodItemsByCategoryId[item.getCategoryId()].push(item);
      } else {
        foodItemsByCategoryId[item.getCategoryId()] = [item];
      }
    });
    return foodItemsByCategoryId;
  }
  
};



export default FoodItems;
