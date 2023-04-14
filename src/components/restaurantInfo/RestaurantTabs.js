import React, { useContext } from "react";
import { isVegContext, searchQueryContext } from "../Landing";

function RestaurantTabs() {
  const { searchQuery, setSearchQuery } = useContext(searchQueryContext);
  const { isVeg, setIsVeg } = useContext(isVegContext);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleIsVegCheckbox = (event) => {
    setIsVeg(event.target.checked);
  };

  return (
    <div className="restaurant-tabs">
      {/* <div className="restaurant-search-text "> */}
      {/* <i className="bi bi-search icon-modify"></i> Search for dishes... */}
      <input
        className="restaurant-search-text "
        type="text"
        placeholder="Search for food items"
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      {/* </div> */}
      <div className="restaurant-checkbox-text">
        <input
          type="checkbox"
          className="bi bi-square icon-modify"
          value={isVeg}
          onClick={handleIsVegCheckbox}
        />
        Veg only
      </div>
      <div className="restaurant-favourite-text">
        <i className="bi bi-suit-heart icon-modify"></i>Favourite
      </div>
    </div>
  );
}

export default RestaurantTabs;
