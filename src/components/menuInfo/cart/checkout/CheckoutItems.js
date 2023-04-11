import React, {useContext} from "react";
import CheckoutItem from "./checkoutItem";
import { FoodItemsContext } from "../../../../App";

const CheckoutItems = () => {
    const { foodItemsById, setFoodItemsById } = useContext(FoodItemsContext)
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




