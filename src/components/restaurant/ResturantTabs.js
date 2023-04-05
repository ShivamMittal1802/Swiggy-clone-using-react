import React from "react";


function ResturantTabs() {
    return (        
    <div className="resturant-tabs">
        <div className="resturant-search-text "><i className="bi bi-search icon-modify"></i> Search for dishes...</div>
        <div className="resturant-checkbox-text"><i className="bi bi-square icon-modify"></i> Veg only</div>
        <div className="resturant-favourite-text"><i className="bi bi-suit-heart icon-modify"></i>Favourite</div>    
    </div>
    );
}

export default ResturantTabs;