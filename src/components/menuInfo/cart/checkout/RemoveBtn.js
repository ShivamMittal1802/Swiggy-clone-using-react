import React, {useCallback, useContext} from "react";
import { FoodItemsContext } from "../../../../App";


const RemoveBtn = () => {
    const { foodItemsById, setFoodItemsById } = useContext(FoodItemsContext)
    const foodItems = Object.values(foodItemsById);
    const itemId= Object.keys(foodItemsById);
     
    const handleRemoveFoodItems =useCallback( () => {
        foodItems.forEach( (foodItem) => { 
            const updatedFoodItem ={...foodItem};
            updatedFoodItem.setCount(0);
            setFoodItemsById({...foodItemsById,[itemId] : updatedFoodItem});
        })
    },[foodItems, itemId, setFoodItemsById]);
    return (
        <button onClick={handleRemoveFoodItems}>Remove All </button>
    );
}

export default RemoveBtn;