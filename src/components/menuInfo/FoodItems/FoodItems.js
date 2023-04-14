import React, { useContext } from "react";
import RenderItems from "./renderFoodItems/RenderItems";
import ShowCategory from "./ShowCategory";
import { FoodItemsContext } from "../../../App";
import { filteredFoodItemsListContext } from "../MenuInfo";

const FoodItems = () => {
  const { filteredFoodItemsList } = useContext(filteredFoodItemsListContext);
  const { foodItemsById, setFoodItemsById } = useContext(FoodItemsContext);

<<<<<<< Updated upstream
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
  
=======
  const foodItemsByCategoryId = getFoodItemsByCategoryId(filteredFoodItemsList);
>>>>>>> Stashed changes

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
    if (foodItems) {
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
  }
};

export default FoodItems;
