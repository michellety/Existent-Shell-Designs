var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Creations.findAll({}).then(function(dbCreations) {
      res.json(dbCreations);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    console.log(req.body);
    var creation = {
      category: "TEST",
      title: req.body.text,
      descript: req.body.description,
      available: true,
      price: 100
    };
    db.Creations.create(creation).then(function(dbCreations) {
      res.json(dbCreations);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Creations.destroy({ where: { id: req.params.id } }).then(function(dbCreations) {
      res.json(dbCreations);
    });
  });

    app.get("/api/examples", function(req, res) {
    db.Creations.findAll({}).then(function(dbCreations) {
      res.json(dbCreations);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Creations.create(req.body).then(function(dbCreations) {
      res.json(dbCreations);
    });
  });

};
