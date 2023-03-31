import React from "react";
import CreateBreadCrumb from "./components/breadCrumbList";
import CreateRestaurentInfo from "./components/restaurant";
import MenuInfo from "./components/menuInfo";
import CreateHeader from "./components/header/createHeaderSection";
import Footer from "./components/footer";

function App() {
  return (
    <div className="container">
      <CreateHeader />
      <CreateBreadCrumb />
      <CreateRestaurentInfo />
      <MenuInfo />
      <Footer />
    </div>
  );
}

export default App;
