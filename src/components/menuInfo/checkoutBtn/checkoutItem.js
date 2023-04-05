import React from "react";


const CheckoutItem = ({foodItem,setFoodItemsById}) => {
    const id = foodItem.getId();
    const count = foodItem.getCount();
    
    const addToCart = () => {
      foodItem.setCount(count + 1);
      const updatedFoodItem = foodItem;
      setFoodItemsById((foodItemsById) => {
        return { ...foodItemsById, [id]: updatedFoodItem };
      });
    };
    const removeFromCart = () => {
      if (count > 0) {
        foodItem.setCount(count - 1);
        const updatedFoodItem = foodItem;
        setFoodItemsById((foodItemsById) => {
          return { ...foodItemsById, [id]: updatedFoodItem };
        });
      }
    };
    return (
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
    );
  };

  export default CheckoutItem;