import React from "react";
import CheckoutItem from "./checkoutItem";


const CheckoutItems = ({foodItemsById, setFoodItemsById}) => {
    return (
        <div>
            {Object.values(foodItemsById).map((foodItem) => {
                if(foodItem.getCount() > 0 ){
                    return (
                        <CheckoutItem
                        foodItem={foodItem}
                        setFoodItemsById={setFoodItemsById}
                        />
                    );
                 }
            })
            }
        </div>
    );
};
export default CheckoutItems;




