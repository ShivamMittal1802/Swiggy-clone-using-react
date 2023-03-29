import React from "react";
import RestaurantUpperBox from "./upperBox";
import CreateRestaurantLowerBox from "./lowerBox";

export default function CreateRestaurentInfo(){
    return (
        <div className="restaurent">
            {RestaurantUpperBox()}
            {CreateRestaurantLowerBox()}
        </div>
    );
}