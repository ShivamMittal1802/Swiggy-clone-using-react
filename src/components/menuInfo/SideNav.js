import React, { useContext } from "react";
import _ from "lodash";
import { filteredFoodItemsListContext } from "./MenuInfo";

const SideNav = () => {
  const { filteredFoodItemsList } = useContext(filteredFoodItemsListContext);

  const categoryNameByCategoryId = getCategoryNameByCategoryId(
    filteredFoodItemsList
  );
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

const getCategoryNameByCategoryId = (filteredFoodItemsListContext) => {
  const categoryNameByCategoryId = _.reduce(
    filteredFoodItemsListContext,
    (categoryNameByCategoryId, item) => {
      categoryNameByCategoryId[item.getCategoryId()] = item.getCategoryName();
      return categoryNameByCategoryId;
    },
    {}
  );

  return categoryNameByCategoryId;
};

export default SideNav;
