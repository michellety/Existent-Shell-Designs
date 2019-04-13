var db = require("../models");

module.exports = function (app) {
  // Get all creations from the Creations table
  app.get("/api/creations", function (req, res) {
    db.Creations.findAll({}).then(function (dbCreations) {
      res.json(dbCreations);
    });
  });

  // TODO: finish this
  app.get("/api/purchases", function (req, res) {
    db.CartItems.findAll({}).then(function (cartpurchases) {
      res.json(cartpurchases);
    })
  });

  //creates a new item entry into the CartItems table of the database
  app.post("/api/cart", function (req, res) {
    var body = req.body;
    var item = {
      creationId: body.id,
      item: body.nickname,
      price: body.price
    }
    db.CartItems.create(item).then(function (data) {
      res.json(data);
    })
  })

  //for the contact form, gets all of the information saved in the Messages table 
  app.get("/api/contacts", function (req, res) {
    db.Messages.findAll({}).then(function (message) {
      res.json(message);
    });
  });

  //create a new contact form entry into the Messages table
  app.post("/api/messages", function (req, res) {
    console.log("req body", req.body);
    var contactFormInfo = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      contactEmail: req.body.contactEmail,
      message: req.body.message,

    }
    db.Messages.create(contactFormInfo).then(function (data) {
      res.json(data);
    })
  })

  //clearing the shopping cart, table CartItems in the database 
  app.delete("/api/shopping-cart", function (req, res) {
    db.CartItems.destroy({
      where: {},
      truncate: true
    }).then(function (data) {
      res.json(data);
    })

  })

};
