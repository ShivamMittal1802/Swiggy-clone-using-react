import React, {useContext} from "react";
import { FoodItemsContext} from "../../App";
import { searchQueryContext } from "../Landing";

function RestaurantTabs() {
  const {foodItemsById} = useContext(FoodItemsContext);
  const {searchQuery, setSearchQuery} = useContext(searchQueryContext);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // const filteredFoodItems = foodItemsById.filter((foodItem) => {
  //   return foodItem.name.toLowerCase().includes(searchQuery.toLowerCase());
  // });

  return (
    <div className="restaurant-tabs">
      {/* <div className="restaurant-search-text "> */}
        {/* <i className="bi bi-search icon-modify"></i> Search for dishes... */}
        <input className="restaurant-search-text "
        type="text"
        placeholder="Search for food items"
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      {/* </div> */}
      <div className="restaurant-checkbox-text">
        <i className="bi bi-square icon-modify"></i> Veg only
      </div>
      <div className="restaurant-favourite-text">
        <i className="bi bi-suit-heart icon-modify"></i>Favourite
      </div>
    </div>
  );
}

export default RestaurantTabs;
