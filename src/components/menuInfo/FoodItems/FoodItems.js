import React, { useContext } from "react";
import RenderItems from "./renderFoodItems/RenderItems";
import ShowCategory from "./ShowCategory";
import { FoodItemsContext } from "../../../App";
import { filteredFoodItemsListContext } from "../MenuInfo";

const FoodItems = () => {
  const { filteredFoodItemsList } = useContext(filteredFoodItemsListContext);
  const { foodItemsById, setFoodItemsById } = useContext(FoodItemsContext);

  const foodItemsByCategoryId = getFoodItemsByCategoryId(filteredFoodItemsList);

  return (
    <div className="food-items">
      {Object.keys(foodItemsByCategoryId).map((categoryId) => {
        const categoryWiseFoodList = foodItemsByCategoryId[categoryId];
        return (
          <div key={categoryId}>
            <ShowCategory categoryWiseFoodList={categoryWiseFoodList} />
            <RenderItems
              categoryWiseFoodList={categoryWiseFoodList}
              setFoodItemsById={setFoodItemsById}
              foodItemsById={foodItemsById}
            />
          </div>
        );
      })}
    </div>
  );

  function getFoodItemsByCategoryId(foodItems) {
    if (foodItems) {
      const foodItemsByCategoryId = foodItems.reduce(
        (foodItemsByCategoryId, item) => {
          if (foodItemsByCategoryId[item.getCategoryId()]) {
            foodItemsByCategoryId[item.getCategoryId()].push(item);
          } else {
            foodItemsByCategoryId[item.getCategoryId()] = [item];
          }
          return foodItemsByCategoryId;
        },
        {}
      );
      return foodItemsByCategoryId;
    }
  }
};

export default FoodItems;
