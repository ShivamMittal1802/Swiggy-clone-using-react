import React, { useState, createContext } from "react";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Checkout from "./components/menuInfo/cart/checkout/Checkout";
import Landing from "./components/Landing";
import FOOD_ITEMS from "./data/constants/rawData";
import FoodItem from "./data/builders/FoodItem";

export const FoodItemsContext = createContext();

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

  return (
    <FoodItemsContext.Provider value={{foodItemsById, setFoodItemsById}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path="/checkout" element={<Checkout/>} />
        </Routes>
      </BrowserRouter>
    </FoodItemsContext.Provider>
  );
}

export default App;
