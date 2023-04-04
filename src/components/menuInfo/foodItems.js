import React from "react";

const FoodItems = ({ foodItemsById, setFoodItemsById }) => {
  const foodItems = Object.values(foodItemsById);
  const foodItemsByCategoryId = getFoodItemsByCategoryId(foodItems);

  return (
    <div className="food-items">
      {Object.keys(foodItemsByCategoryId).map((categoryId) => {
        const foodList = foodItemsByCategoryId[categoryId];
        return (
          <>
            <AddSection foodList={foodList} />
            <RenderItems
              foodList={foodList}
              setFoodItemsById={setFoodItemsById}
              foodItemsById={foodItemsById}
            />
          </>
        );
      })}
    </div>
  );
};

const AddSection = ({ foodList }) => {
  const categoryName = foodList[0].getCategoryName();
  return (
    <div id="section">
      <h1>{categoryName}</h1>
      <p>{foodList.length} Items</p>
    </div>
  );
};
const RenderItems = ({ foodList, setFoodItemsById }) => {
  return (
    <>
      {foodList.map((foodItem) => {
        return (
          <AddFoodItem
            foodItem={foodItem}
            setFoodItemsById={setFoodItemsById}
          />
        );
      })}
    </>
  );
};
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

export default FoodItems;
