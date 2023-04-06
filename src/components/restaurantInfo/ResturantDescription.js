import React from "react";

const listItemsContent =[{
    id:0,
    icon : <i className="bi bi-star-fill icon-modify"></i>,
    value : "4.1",
    content : "500+ rating" 
},{
    id:1,
    className: "time",
    value : "19 mins",
    content: "Delivery Time" 

},{
    id:2,
    icon : <i className="bi bi-currency-rupee icon-modify"></i>,
    value : "600",
    content : "Cost for two" 
}];

function RestaurantDescription() {

    const listItems=listItemsContent.map((listItem) => {
        return (
                    <div className= {`${listItem.className} new-font-again`}>
                     {listItem.icon}{listItem.value}
                     <div className="new-font">{listItem.content}</div>
                    </div>       
        );
    });
    return (
        <div className="resturant-description-items">
            <div className="logo-resturant-items"> 
                <img width="254" height="165" alt="" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ikmqsf8l9scdlnhahftx" />
            </div>

            <div className="resturant-description-content-items">
                <div className="resturant-description-content-items-header">Auntie Fung's</div>
                <div className="resturant-description-content-items-header-style">Thai, Chinese</div>
                <div className="resturant-description-content-items-header-style">Munnekollal, Marathahalli | <b>Change Outlet<i className="bi bi-chevron-down bi-chevron-down-mod"></i></b></div>
                <div className="resturant-description-content-items-container">                 
                    <div className="resturant-description-content-items-container" id="rtcContainer">
                        {listItems}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RestaurantDescription;

// <div class="resturant-description-content-items-container" id="rtcContainer">
//     <div class="rating new-font-again"><i class="bi bi-star-fill icon-modify"></i> 4.1
//         <div class="rating-500 new-font">500+ rating
//         </div>
//     </div>
//     <div class="time new-font-again">19 mins
//         <div class="delivery new-font">Delivery Time
//         </div>
//     </div>
//     <div class="price new-font-again"><i class="bi bi-currency-rupee icon-modify"></i> 600
//         <div class="cost new-font">Cost for Two
//         </div>
//     </div>
// </div>