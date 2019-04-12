module.exports = function (sequelize, DataTypes) {
    //create a Messages model that matches up with the database
    var Messages = sequelize.define("Messages", {

        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        contactEmail: DataTypes.STRING,
        message: DataTypes.STRING,

    });
    return Messages;
};

