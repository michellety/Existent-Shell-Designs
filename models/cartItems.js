module.exports = function (sequelize, DataTypes) {
  //create a CartItems model that matches up with the database to store the purchases added to the cart 
  var CartItems = sequelize.define("CartItems", {
    creationId: DataTypes.INTEGER,
    item: DataTypes.STRING,
    price: DataTypes.INTEGER,
  });
  return CartItems;
};

