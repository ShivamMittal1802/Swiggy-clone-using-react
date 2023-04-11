import React from "react";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Checkout from "./components/menuInfo/cart/checkout/Checkout";
import Landing from "./components/landing";
import FOOD_ITEMS from "./data/constants/rawData";
import FoodItem from "./data/builders/FoodItem";
import { useState } from "react";

function getFoodItemsById() {
  const foodItemsById = FOOD_ITEMS.reduce((foodItemById,item)=>{
    const foodItem = new FoodItem(item);   
     foodItemById[foodItem.getId()] = foodItem;
     return foodItemById;
  },{})
  return foodItemsById;
}


function App() {
  const [foodItemsById, setFoodItemsById] = useState(getFoodItemsById());
  console.log(foodItemsById);
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing 
      foodItemsById={foodItemsById}
      setFoodItemsById={setFoodItemsById}  
      />}/>
      <Route path="/checkout" element={<Checkout
      foodItemsById={foodItemsById}
      setFoodItemsById={setFoodItemsById}  
      />}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
