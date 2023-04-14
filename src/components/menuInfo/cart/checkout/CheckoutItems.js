import React, { useContext } from "react";
import CheckoutItem from "./checkoutItem";
import { FoodItemsContext } from "../../../../App";

const CheckoutItems = () => {
  const { foodItemsById, setFoodItemsById } = useContext(FoodItemsContext);
  return (
    <div>
<<<<<<< Updated upstream
      {Object.values(foodItemsById).map((foodItem) => {
        if (foodItem.getCount() > 0) {
          return (
            <CheckoutItem
              foodItem={foodItem}
              setFoodItemsById={setFoodItemsById}
            />
          );
        }
      })}
=======
      {Object.values(foodItemsById).map(
        (foodItem) =>
          foodItem.getCount() > 0 && (
            <CheckoutItem
              key={foodItem.getId()}
              foodItem={foodItem}
              setFoodItemsById={setFoodItemsById}
            />
          )
      )}
>>>>>>> Stashed changes
    </div>
  );
};
export default CheckoutItems;
