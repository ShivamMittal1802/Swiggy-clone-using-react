import React, { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import { FoodItemsContext } from "../../../App";

const Cart = () => {
  const { foodItemsById, setFoodItemsById } = useContext(FoodItemsContext);
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    navigate("/checkout");
  }, [navigate]);

  let flag = false;

  return (
    <div className="cart">
      {Object.values(foodItemsById).map((foodItem) => {
        if (foodItem.getCount() > 0) {
          flag = true;
          return (
            <CartItem
              key={foodItem.getId()}
              foodItem={foodItem}
              setFoodItemsById={setFoodItemsById}
            />
          );
        }
      })}
      {flag && (
        <button className="checkOut-Btn" onClick={handleClick}>
          {" "}
          checkout
        </button>
      )}
    </div>
  );
};

export default Cart;
