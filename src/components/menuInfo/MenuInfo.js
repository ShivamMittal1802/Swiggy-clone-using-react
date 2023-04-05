import React from "react";
import FoodItems from "./foodItems";
// import FOOD_ITEMS from "../../data/constants/rawData";
// import FoodItem from "../../data/builders/FoodItem";
import SideNav from "./sideNav";
import Cart from "./cart";

// function getFoodItemsById() {
//   const mapIdToFoodItem = {};
//   FOOD_ITEMS.forEach((item) => {
//     const foodItem = new FoodItem(item);
//     if (mapIdToFoodItem[foodItem.getId()])
//       mapIdToFoodItem[foodItem.getId()].push(foodItem);
//     else mapIdToFoodItem[foodItem.getId()] = foodItem;
//   });
//   return mapIdToFoodItem;
// }

// function getFoodItemsById() {
//   const foodItemsById = FOOD_ITEMS.reduce((foodItemById,item)=>{
//     const foodItem = new FoodItem(item);   
//      foodItemById[foodItem.getId()] = foodItem;
//      return foodItemById;
//   },{})
//   return foodItemsById;
// }


const MenuInfo = ({foodItemsById, setFoodItemsById}) => {
  // const [foodItemsById, setFoodItemsById] = useState(getFoodItemsById());
  
  return (
    <div className="menu-info">
      <SideNav foodItemsById={foodItemsById} />
      <FoodItems
        foodItemsById={foodItemsById}
        setFoodItemsById={setFoodItemsById}
      />
      <Cart foodItemsById={foodItemsById} setFoodItemsById={setFoodItemsById} />
    </div>
  );
};

export default MenuInfo;
