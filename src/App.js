import React from "react";
import CreateBreadCrumb from "./components/breadCrumbList";
import CreateRestaurentInfo from "./components/restaurant";
import CreateHeader from "./components/header/createHeaderSection";
import Footer from "./components/footer";

function App() {
  return (
    <div className="container">
      <CreateHeader/>
      <CreateBreadCrumb />
      <CreateRestaurentInfo/>
      <Footer />
    </div>
  );
}

export default App;
