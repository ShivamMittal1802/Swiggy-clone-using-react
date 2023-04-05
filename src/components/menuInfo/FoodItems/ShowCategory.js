import React from "react";


const ShowCategory = ({ categoryWiseFoodList }) => {
    const categoryName = categoryWiseFoodList[0].getCategoryName();
    return (
      <div id="section">
        <h1>{categoryName}</h1>
        <p>{categoryWiseFoodList.length} Items</p>
      </div>
    );
  };

  export default ShowCategory;