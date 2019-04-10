module.exports = function(sequelize, DataTypes) {
  //create a Creations model that matches up with the database
  var Creations = sequelize.define("Creations", {
    category: DataTypes.STRING,
    nickname: DataTypes.STRING,
    title: DataTypes.STRING,
    descript: DataTypes.STRING,
    imgSource: DataTypes.STRING,
    available: DataTypes.BOOLEAN,
    price: DataTypes.INTEGER
  });
  return Creations;
};

// INSERT INTO Creations (category, nickname, title, descript, imgSource, available, price, createdAt, updatedAt) VALUES ("Painting", "Manta Painting", "Framed Watercolor Painting", "Manta Ray Watercolor, in a red oak frame. 11 x 13in.", "manta.jpg", true, 200, NOW(), NOW());
// INSERT INTO Creations (category, nickname, title, descript, imgSource, available, price, createdAt, updatedAt) VALUES ("Painting", "Star Painting", "Framed Watercolor Painting", "Sea Star Watercolor with pressed seaweed, in a red oak frame. 11 x 11in.", "seastar.jpg", true, 220, NOW(), NOW());
// INSERT INTO Creations (category, nickname, title, descript, imgSource, available, price, createdAt, updatedAt) VALUES ("Painting", "Bass Painting", "Framed Watercolor Painting", "Largemouth Bass Watercolor, in a red oak frame. 11 x 13in.", "bass.jpg", true, 250, NOW(), NOW());
// INSERT INTO Creations (category, nickname, title, descript, imgSource, available, price, createdAt, updatedAt) VALUES ("Painting", "Plant Art", "Framed Multimedia Painting", "Pressed aquatic plant in a red oak frame. 11 x 11in.", "press.jpg", true, 100, NOW(), NOW());
// INSERT INTO Creations (category, nickname, title, descript, imgSource, available, price, createdAt, updatedAt) VALUES ("Painting", "Seaweed Art", "Framed Multimedia Painting", "Pressed seaweed, in a red oak frame. 11 x 13in.", "seaweed.jpg", true, 150, NOW(), NOW());
// INSERT INTO Creations (category, nickname, title, descript, imgSource, available, price, createdAt, updatedAt) VALUES ("Painting", "Bishop's Painting", "Framed Watercolor Painting", "Bishop's Peak Watercolor, in a red oak frame with mortis and tenon joints. 20 x 24in.", "bishops.jpg", true, 350, NOW(), NOW());
// INSERT INTO Creations (category, nickname, title, descript, imgSource, available, price, createdAt, updatedAt) VALUES ("Painting", "Underwater Painting", "Framed Multimedia Painting", "Submerged aquatics watercolor, in a red oak frame with mortis and tenon joints. 20 x 24in.", "submerge.jpg", true, 350, NOW(), NOW());
// INSERT INTO Creations (category, nickname, title, descript, imgSource, available, price, createdAt, updatedAt) VALUES ("Frame", "Red Oak 14 x 10 m&t Frame", "Custom Frame", "Red oak frame with mortise and tenon joints. 14 x 19in.", "venice.jpg", true, 250, NOW(), NOW());
// INSERT INTO Creations (category, nickname, title, descript, imgSource, available, price, createdAt, updatedAt) VALUES ("Frame", "Cherry 8 x 10 m&t Frame", "Custom Frame", "Cherry wood frame with mortise and tenon joints. 8 x 10in.", "oliveFrame.jpg", true, 90, NOW(), NOW());
// INSERT INTO Creations (category, nickname, title, descript, imgSource, available, price, createdAt, updatedAt) VALUES ("Frame", "Cherry 12 x 13 m&t Frame", "Custom Frame", "Cherry wood frame with mortise and tenon joints. 12 x 13in.", "florence.jpg", true, 210, NOW(), NOW());
// INSERT INTO Creations (category, nickname, title, descript, imgSource, available, price, createdAt, updatedAt) VALUES ("Frame", "Redwood 11 x 13 Frame", "Custom Frame", "Old growth redwood frame with mitered corners. 11 x 13in.", "cypress.jpg", true, 200, NOW(), NOW());
// INSERT INTO Creations (category, nickname, title, descript, imgSource, available, price, createdAt, updatedAt) VALUES ("Frame", "Walnut Diploma Frame", "Custom Frame", "Walnut diploma frame. 16 x 19in.", "dip.jpg", true, 225, NOW(), NOW());
// INSERT INTO Creations (category, nickname, title, descript, imgSource, available, price, createdAt, updatedAt) VALUES ("Frame", "Redwood 11 x 11 Frame", "Custom Frame", "Old growth redwood frame with mitered corners. 11 x 11in.", "kiwiFrame.jpg", true, 80, NOW(), NOW());
// INSERT INTO Creations (category, nickname, title, descript, imgSource, available, price, createdAt, updatedAt) VALUES ("Frame", "White Oak 10 x 10 Frame", "Custom Frame", "Stained white oak frame. 10 x 10in.", "delftDiamond.jpg", true, 100, NOW(), NOW());
// INSERT INTO Creations (category, nickname, title, descript, imgSource, available, price, createdAt, updatedAt) VALUES ("Frame", "Mixed Oak 10 x 10 Frame", "Custom Frame", "Red wood and white oak frame. 10 x 10in.", "squareDelft.jpg", true, 100, NOW(), NOW());
// INSERT INTO Creations (category, nickname, title, descript, imgSource, available, price, createdAt, updatedAt) VALUES ("Frame", "Redwood and Cherry 9 x 9 Frame", "Custom Frame", "Redwood and cherry frame with mitered corners. 9 x 9in.", "turtle.jpg", true, 90, NOW(), NOW());
