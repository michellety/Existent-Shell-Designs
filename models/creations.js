module.exports = function(sequelize, DataTypes) {
  //create a Creations model that matches up with the database
  var Creations = sequelize.define("Creations", {
    category: DataTypes.STRING,
    title: DataTypes.STRING,
    descript: DataTypes.STRING,
    imgSource: DataTypes.STRING,
    available: DataTypes.BOOLEAN,
    price: DataTypes.INTEGER
  });
  return Creations;
};
