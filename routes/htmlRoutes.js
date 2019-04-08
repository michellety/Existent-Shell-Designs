var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Creations.findAll({}).then(function(dbCreations) {
      res.render("index", {
        msg: "You have reached the home page!"
      });
    });
  });

  // Load gallery page
  app.get("/gallery", function(req, res) {
//getting data from the creations table, stored in dbCreations/ can be named anything 
    db.Creations.findAll({}).then(function(dbCreations) {
      // console.log(dbCreations);
      res.render("gallery", {
        items: dbCreations
      });
    });
  });


  // Load checkout page
  //post r to gallery here 



  app.post("/checkout", function(req, res) {
    //getting data from the creations table, stored in dbCreations/ can be named anything 
    var checkout = req.body;
    console.log("data", checkout)
          res.render("checkout", {
            purchases: checkout
          });
        
      });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
