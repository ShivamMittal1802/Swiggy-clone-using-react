import React from "react"
import BreadCrumb from "./breadCrumbList/BreadCrumb"
import Footer from "./footer"
import Header from "./header/Header"
import MenuInfo from "./menuInfo"
import RestaurentInfo from "./restaurant/ResturantInfo"

const Landing = ()=>{
    return <div className="container">
      <Header />
      <BreadCrumb />
      <RestaurentInfo />
      <MenuInfo />
      <Footer />
    </div>
}

export default Landing;