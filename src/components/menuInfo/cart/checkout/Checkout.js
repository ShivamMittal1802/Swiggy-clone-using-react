import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CheckoutItems from "./CheckoutItems";


const Checkout = ({ foodItemsById, setFoodItemsById }) => {
    // console.log(foodItemsById);
    const navigate = useNavigate();
  const handleClick = useCallback(()=>{
    navigate('/')
  }, [navigate]);

    return (
        <div className="checkout">
            <h1 className="checkOut-header">checkout</h1>
            {/* <div></div> */}
            <CheckoutItems
            foodItemsById={foodItemsById}
            setFoodItemsById={setFoodItemsById}
            />
        <button className="checkOut-addMore-btn" onClick={handleClick}>ADD MORE FOD ITEMS</button>
        </div>
);
}
  
  



export default Checkout;