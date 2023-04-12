import React, { useContext } from "react";
import _ from "lodash";
import { filteredListContext } from "./MenuInfo";

const SideNav = () => {
  const { filteredList } = useContext(filteredListContext);

  const categoryNameByCategoryId = getCategoryNameByCategoryId(filteredList);
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

const getCategoryNameByCategoryId = (filteredList) => {
  // const foodItems = Object.values(foodItemsById);
  const categoryNameByCategoryId = _.reduce(
    filteredList,
    (categoryNameByCategoryId, item) => {
      categoryNameByCategoryId[item.getCategoryId()] = item.getCategoryName();
      return categoryNameByCategoryId;
    },
    {}
  );

  return categoryNameByCategoryId;
};

export default SideNav;
