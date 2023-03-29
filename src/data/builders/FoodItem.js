class FoodItem {
  constructor({
    itemId,
    itemName,
    itemPrice,
    itemImage,
    itemInfo,
    isVeg,
    itemCartCount,
    itemCategoryId,
    itemCategoryName,
  }) {
    this.setId(itemId);
    this.setName(itemName);
    this.setPrice(itemPrice);
    this.setImageUrl(itemImage);
    this.setInfo(itemInfo);
    this.setIsVeg(isVeg);
    this.setCount(itemCartCount);
    this.setCategoryId(itemCategoryId);
    this.setCategoryName(itemCategoryName);
  }
  getId = () => {
    return this.itemId;
  };
  getName = () => {
    return this.itemName;
  };
  getPrice = () => {
    return this.itemPrice;
  };
  getImageUrl = () => {
    return this.itemImage;
  };
  getInfo = () => {
    return this.itemInfo;
  };
  getIsVeg = () => {
    return this.isVeg;
  };
  getCount = () => {
    return this.itemCartCount;
  };
  getCategoryName = () => {
    return this.itemCategoryName;
  };
  getCategoryId = () => {
    return this.itemCategoryId;
  };
  setId = (id) => {
    this.itemId = id;
    return this.itemId;
  };
  setName = (name) => {
    this.itemName = name;
    return this.itemName;
  };
  setPrice = (price) => {
    this.itemPrice = price;
    return this.itemPrice;
  };
  setImageUrl = (imageUrl) => {
    this.itemImage = imageUrl;
    return this.itemImage;
  };
  setInfo = (info) => {
    this.itemInfo = info;
    return this.itemInfo;
  };
  setIsVeg = (isVeg) => {
    this.isVeg = isVeg;
    return this.isVeg;
  };
  setCount = (count) => {
    this.itemCartCount = count;
    return this.itemCartCount;
  };
  setCategoryName = (categoryName) => {
    this.itemCategoryName = categoryName;
    return this.itemCategoryName;
  };
  setCategoryId = (categoryId) => {
    this.itemCategoryId = categoryId;
    return this.itemCategoryId;
  };
}

export default FoodItem;
