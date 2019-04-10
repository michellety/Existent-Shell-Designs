module.exports = function(sequelize, DataTypes) {
    //create a CartItems model that matches up with the database
    var CartItems = sequelize.define("CartItems", {
      item: DataTypes.STRING,
      price: DataTypes.INTEGER,
      total: DataTypes.INTEGER
    });
    return CartItems;
  };