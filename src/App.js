import React from "react";
import BreadCrumb from "./components/breadCrumbList";
import RestaurentInfo from "./components/restaurant";
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
