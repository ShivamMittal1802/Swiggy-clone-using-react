import React from "react";


const RemoveBtn = ({foodItemsById, setFoodItemsById}) => {
    const foodItems = Object.values(foodItemsById);
    const itemId= Object.keys(foodItemsById);
     
    const handleRemoveFoodItems = () => {
        foodItems.forEach( (foodItem) => { 
            foodItem.setCount(0);
            const updatedFoodItem ={...foodItem};
            setFoodItemsById({...foodItemsById,[itemId] : updatedFoodItem});
        })
        
    };
    return (
        <button onClick={handleRemoveFoodItems}>Remove All </button>

    );


}

export default RemoveBtn;