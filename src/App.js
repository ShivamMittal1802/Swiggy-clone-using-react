import React from "react";
import CreateBreadCrumb from "./components/breadCrumbList";
import CreateRestaurentInfo from "./components/restaurant";

import Footer from "./components/footer";

function App() {
  return (
    <div className="container">
      <CreateBreadCrumb />
      <CreateRestaurentInfo/>
      <Footer />
    </div>
  );
}

export default App;
