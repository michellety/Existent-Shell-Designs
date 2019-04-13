var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Creations.findAll({}).then(function (dbCreations) {
      res.render("index", {
        msg: "You have reached the home page!"
      });
    });
  });

  // Load gallery page with all data from the Creations table
  app.get("/gallery", function (req, res) {
    db.Creations.findAll({}).then(function (dbCreations) {
      //show the info on the gallery page
      res.render("gallery", {
        items: dbCreations
      });
    });
  });

  // Load checkout page, all data from CartItems table
  app.get("/checkout", function (req, res) {
    db.CartItems.findAll({}).then(function (bag) {
      //shown on the checkout page
      res.render("checkout", {
        shoppingBag: bag
        // stripePublishableKey : key.stripePublishableKey
      });
    });
  });


  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
