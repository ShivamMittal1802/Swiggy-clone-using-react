import React from "react";

const CreateFoodItems = ({ foodItems }) => {
  const foodItemsByCategoryId = getFoodItemsByCategoryId(foodItems);

  return (
    <div className="food-items">
      {Object.keys(foodItemsByCategoryId).map((categoryId) => {
        const foodList = foodItemsByCategoryId[categoryId];
        return (
          <>
            <AddSection foodList={foodList} />
            <RenderItems foodList={foodList} />
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
const RenderItems = ({ foodList }) => {
  return (
    <>
      {foodList.map((value) => {
        return <AddFoodItem foodItem={value} />;
      })}
    </>
  );
};
const AddFoodItem = ({ foodItem }) => {
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
          <button id={foodItem.getId()}>add</button>
          <span className="counter" id={`counter${foodItem.getId()}`}>
            {foodItem.getCount()}
          </span>
          <button id={foodItem.getId()}>remove</button>
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

export default CreateFoodItems;
