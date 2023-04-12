import React, { useContext, useEffect, useState } from "react";
import RenderItems from "./renderFoodItems/RenderItems";
import ShowCategory from "./ShowCategory";
import { FoodItemsContext } from "../../../App";
import { isVegContext, searchQueryContext } from "../../Landing";
import { filteredListContext } from "../MenuInfo";

const FoodItems = () => {
  const {searchQuery} = useContext(searchQueryContext);
  const {setFilteredList } = useContext(filteredListContext);
  const {foodItemsById, setFoodItemsById } = useContext(FoodItemsContext);
  const {isVeg} = useContext(isVegContext);

  const [foodItemFilteredList, setFoodItemFilteredList] = useState([]);

  // useEffect(() => {
  //   if (foodItemFilteredList !== undefined) {
  //     setFilteredList(foodItemFilteredList);
  //   }
  // }, [foodItemFilteredList,setFilteredList]);

  useEffect(() => {
    if (foodItemFilteredList !== undefined) {
      setFilteredList(foodItemFilteredList);
    }
    setFoodItemFilteredList(Object.values(foodItemsById).filter((item)=>{
      if(isVeg){
        // console.log(item.getIsVeg())
        return item.getIsVeg() && item.getName().toLowerCase().includes(searchQuery.toLowerCase());
      }
      else
        return item.getName().toLowerCase().includes(searchQuery.toLowerCase());
    }))
  }, [searchQuery,setFilteredList,foodItemFilteredList, foodItemsById, isVeg ]);
  
  const foodItemsByCategoryId = getFoodItemsByCategoryId(foodItemFilteredList);
  

  return (
    <div className="food-items">
      {Object.keys(foodItemsByCategoryId).map((categoryId) => {
        const categoryWiseFoodList = foodItemsByCategoryId[categoryId];
        return (
          <div key={categoryId}>
            <ShowCategory categoryWiseFoodList={categoryWiseFoodList} />
            <RenderItems
              categoryWiseFoodList={categoryWiseFoodList}
              setFoodItemsById={setFoodItemsById}
              foodItemsById={foodItemsById}
            />
          </div>
        );
      })}
    </div>
  );

  function getFoodItemsByCategoryId(foodItems) {
    const foodItemsByCategoryId = foodItems.reduce(
      (foodItemsByCategoryId, item) => {
        if (foodItemsByCategoryId[item.getCategoryId()]) {
          foodItemsByCategoryId[item.getCategoryId()].push(item);
        } else {
          foodItemsByCategoryId[item.getCategoryId()] = [item];
        }
        return foodItemsByCategoryId;
      },
      {}
    );
    return foodItemsByCategoryId;
  }
};

export default FoodItems;
