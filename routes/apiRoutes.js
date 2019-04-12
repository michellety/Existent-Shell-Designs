var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Creations.findAll({}).then(function(dbCreations) {
      res.json(dbCreations);
    });
  });

  // TODO: finish this
  app.get("/api/purchases", function(req, res) {
    db.CartItems.findAll({}).then(function(cartpurchases) {
      res.json(cartpurchases);
    })
  });

  app.post("/api/cart", function(req, res) {
      var body = req.body;
      var item = {
        creationId: body.id,
        item: body.nickname,
        // item: body.title,
        price: body.price
      }
      db.CartItems.create(item).then(function(data) {
        res.json(data);
      })
  })


  //for the contact form 
  app.get("/api/contacts", function(req,res) {
    db.Messages.findAll({}).then(function(message) {
      res.json(message);
    });
  });

  //create a new contact form message
  app.post("/api/messages", function(req, res) {
    var body = req.body;
    var contactFormInfo = {
      firstName: body.firstName,
      lastName: body.lastName,
      contactEmail: body.contactEmail,
      message: body.message,

    }
    db.Messages.create(contactFormInfo).then(function(data) {
      res.json(data);
    })
  })
  
//clearing the shopping cart 
  app.delete("/api/shopping-cart", function(req, res) {
    db.CartItems.destroy({
      where: {},
      truncate: true
    }).then(function(data) {
      res.json(data);
    })
    
  })


  // Create a new example
  // app.post("/api/examples", function(req, res) {
  //   console.log(req.body);
  //   var creation = {
  //     category: "TEST",
  //     title: req.body.text,
  //     descript: req.body.description,
  //     available: true,
  //     price: 100
  //   };
  //   db.Creations.create(creation).then(function(dbCreations) {
  //     res.json(dbCreations);
  //   });
  // });

  //Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Creations.destroy({ where: { id: req.params.id } }).then(function(dbCreations) {
  //     res.json(dbCreations);
  //   });
  // });

   
  // Create a new example
  // app.post("/api/examples", function(req, res) {
  //   db.Creations.create(req.body).then(function(dbCreations) {
  //     res.json(dbCreations);
  //   });
  // });

};
