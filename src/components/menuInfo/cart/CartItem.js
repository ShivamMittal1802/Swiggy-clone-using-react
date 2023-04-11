import React, {useContext } from "react";
import { FoodItemsContext } from "../../../App";

const CartItem = ({ foodItem, setFoodItemsById }) => {
    const id = foodItem.getId();
    const count = foodItem.getCount();
    
    const addToCart = () => {
      const updatedFoodItem = {...foodItem};
      updatedFoodItem.setCount(count + 1);
      setFoodItemsById((foodItemsById) => {
        return { ...foodItemsById, [id]: updatedFoodItem };
      });
    };

    const removeFromCart = () => {
      if (count > 0) {
        const updatedFoodItem = foodItem;
        updatedFoodItem.setCount(count - 1);
        setFoodItemsById((foodItemsById) => {
          return { ...foodItemsById, [id]: updatedFoodItem };
        });
      }
    };
    
    return (
      <>
      <div id={`list-${foodItem.getId()}`}>
        <div>{foodItem.getName()}</div>
        <button id={id} onClick={addToCart}>
          Add
        </button>
        <span id={`quantity-${id}`}>{count}</span>
        <button id={foodItem.getId()} onClick={removeFromCart}>
          Remove
        </button>
        <div id={`price-${id}`}>{foodItem.getPrice() * count}</div>
      </div>
      
      </>
    );
  };

export default CartItem;