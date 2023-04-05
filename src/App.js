import React from "react";
import BreadCrumb from "./components/breadCrumbList/BreadCrumb";
import RestaurentInfo from "./components/restaurant/ResturantInfo";
import MenuInfo from "./components/menuInfo";
import Header from "./components/header/Header";
import Footer from "./components/footer";

function App() {
  return (
    <div className="container">
      <Header />
      <BreadCrumb />
      <RestaurentInfo />
      <MenuInfo />
      <Footer />
    </div>
  );
}

export default App;
