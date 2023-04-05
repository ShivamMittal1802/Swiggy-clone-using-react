import React, { useCallback} from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";


const Cart = ({ foodItemsById, setFoodItemsById }) => {
  const navigate = useNavigate();
  const handleClick = useCallback(()=>{
    navigate('/checkout')
  }, [navigate]);

  let flag=false;
  
  return (
    <div className="cart">
      {Object.values(foodItemsById).map((foodItem) => {
          if(foodItem.getCount() > 0) {
          flag = true;
          return (
            <CartItem
              foodItem={foodItem}
              setFoodItemsById={setFoodItemsById}
            />
          );
        }
        
      })}
      {flag && <button className="checkOut-Btn" onClick={handleClick}> checkout</button>}
    </div>
  );
};

export default Cart;
