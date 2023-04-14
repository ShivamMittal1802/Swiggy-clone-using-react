import React, { useContext } from "react";
import CheckoutItem from "./checkoutItem";
import { FoodItemsContext } from "../../../../App";

const CheckoutItems = () => {
  const { foodItemsById, setFoodItemsById } = useContext(FoodItemsContext);
  return (
    <div>
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
    </div>
  );
};
export default CheckoutItems;
