import React from "react"
import BreadCrumb from "./breadCrumbList/BreadCrumb"
import Footer from "./footer"
import Header from "./header/Header"
import MenuInfo from "./menuInfo/MenuInfo"
import RestaurentInfo from "./restaurantInfo/ResturantInfo"

const Landing = ({foodItemsById, setFoodItemsById})=>{
    console.log(foodItemsById);
    return <div className="container">
      <Header />
      <BreadCrumb />
      <RestaurentInfo />
      <MenuInfo 
       foodItemsById={foodItemsById}
      setFoodItemsById={setFoodItemsById}  
      />
      <Footer />
    </div>
}

export default Landing;