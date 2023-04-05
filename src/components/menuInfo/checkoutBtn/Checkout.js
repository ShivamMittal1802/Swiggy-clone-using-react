import React from "react";
import CheckoutItems from "./CheckoutItems";


const Checkout = ({ foodItemsById, setFoodItemsById }) => {
    console.log(foodItemsById);
    return (
        <>
        <h1>checkout</h1>
        <CheckoutItems
        foodItemsById={foodItemsById}
        setFoodItemsById={setFoodItemsById}
        />
        </>
);
}
  
  



export default Checkout;