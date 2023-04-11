import React, { useContext } from "react";
import _ from "lodash";
import { FoodItemsContext } from "../../App";

const SideNav = () => {
  // console.log(foodItemsById);
  const { foodItemsById } = useContext(FoodItemsContext);
  const categoryNameByCategoryId = getCategoryNameByCategoryId(foodItemsById);
  return (
    <div className="category">
      <ul className="category-list">
        {Object.keys(categoryNameByCategoryId).map((categoryId) => {
          return (
            <li key={categoryId}>
              <a href={`#${categoryNameByCategoryId[categoryId]}`}>
                {categoryNameByCategoryId[categoryId]}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const getCategoryNameByCategoryId = (foodItemsById) => {
  const foodItems = Object.values(foodItemsById);
  const categoryNameByCategoryId = _.reduce(
    foodItems,
    (categoryNameByCategoryId, item) => {
      categoryNameByCategoryId[item.getCategoryId()] = item.getCategoryName();
      return categoryNameByCategoryId;
    },
    {}
  );

  return categoryNameByCategoryId;
};

export default SideNav;
