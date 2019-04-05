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
      console.log(dbCreations);
      res.render("gallery", {
        items: dbCreations
      });
    });
  });

  // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Creations.findOne({ where: { id: req.params.id } }).then(function(dbCreations) {
  //     res.render("example", {
  //       example: dbCreations
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
