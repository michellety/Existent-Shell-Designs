var db = require("../models");

module.exports = function (app) {

  //////////////////// gallery route /////////////////////////
  // Get all creations from the Creations table
  app.get("/api/creations", function (req, res) {
    db.Creations.findAll({}).then(function (dbCreations) {
      res.json(dbCreations);
    });
  });

  ///////////////// cart item routes ///////////////////////////

  // get all of the purchases in the cart table of the database
  app.get("/api/purchases", function (req, res) {
    db.CartItems.findAll({}).then(function (cartpurchases) {
      res.json(cartpurchases);
    });
  });

  //creates a new item entry into the CartItems table of the database
  app.post("/api/cart", function (req, res) {
    var body = req.body;
    var item = {
      creationId: body.id,
      item: body.nickname,
      price: body.price
    };
    db.CartItems.create(item).then(function (data) {
      res.json(data);
    });
  });

  //clearing the shopping cart, table CartItems in the database 
  app.delete("/api/shopping-cart", function (req, res) {
    db.CartItems.destroy({
      where: {},
      truncate: true
    }).then(function (data) {
      res.json(data);
    });

  });

  /////////// contact form routes //////////////

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
    };
    db.Messages.create(contactFormInfo).then(function (data) {
      res.json(data);
    });
  });

  ///////////////// stripe //////////////////
  app.get('/stripe', (req, res) => {
    res.render('checkout', {
      stripePublishableKey: keys.stripePublishableKey
    });
  });
  
  // Charge Route
  app.post('/charge', (req, res) => {
    const amount = 9000;
    
    stripe.customers.create({
      email: req.body.stripeEmail,
      source: req.body.stripeToken
    })
    .then(customer => stripe.charges.create({
      amount,
      description: 'Existent-Shell Art',
      currency: 'usd',
      customer: customer.id
    }))
    .then(charge => res.render('success'));
  });

};
