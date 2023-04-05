import React from "react";



const AddFoodItem = ({ foodItem, setFoodItemsById }) => {
    const addToCart = () => {
      foodItem.setCount(foodItem.getCount() + 1);
      const updatedFoodItem = { ...foodItem };
      const id = foodItem.getId();
      setFoodItemsById((foodItemsById) => {
        return { ...foodItemsById, [id]: updatedFoodItem };
      });
    };
    const removeFromCart = () => {
      if (foodItem.getCount() > 0) {
        foodItem.setCount(foodItem.getCount() - 1);
        const updatedFoodItem = { ...foodItem };
        const id = foodItem.getId();
        setFoodItemsById((foodItemsById) => {
          return { ...foodItemsById, [id]: updatedFoodItem };
        });
      }
    };
    return (
      <div className="food-item">
        <div id="left-food">
          <p>{foodItem.getIsVeg()}</p>
          <h3 id="title">{foodItem.getName()}</h3>
          <h6 id="price">{foodItem.getPrice()}</h6>
          <p id="desc">{foodItem.getInfo()}</p>
        </div>
        <div id="right-food">
          <img src={foodItem.getImageUrl()} alt="" />
          <div>
            <button id={foodItem.getId()} onClick={addToCart}>
              add
            </button>
            <span className="counter" id={`counter${foodItem.getId()}`}>
              {foodItem.getCount()}
            </span>
            <button id={foodItem.getId()} onClick={removeFromCart}>
              remove
            </button>
          </div>
          <p></p>
        </div>
      </div>
    );
  };

export default AddFoodItem;  