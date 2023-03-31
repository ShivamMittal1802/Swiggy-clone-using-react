import React from "react";


const CreateSideNav =  ({ foodItemsById }) => {
 const foodItems = Object.values(foodItemsById);
    const categoryNameByCategoryId = getCategoryNameByCategoryId(foodItems)
 return (
    <div className="category">
    <ul className="category-list">
    {
        Object.keys(categoryNameByCategoryId).map((categoryId)=>{
            return (
                <li>
                <a href={`#${categoryNameByCategoryId[categoryId]}`}>
                 {categoryNameByCategoryId[categoryId]}
                </a>
                </li>
            )
        })
    }
    </ul>
    </div>
 );
};

const getCategoryNameByCategoryId = (foodItems) =>{
    const categoryNameByCategoryId ={};
    foodItems.forEach((item)=>{
        categoryNameByCategoryId[item.getCategoryId()]=item.getCategoryName();
    })
    return categoryNameByCategoryId;
}


export default CreateSideNav;