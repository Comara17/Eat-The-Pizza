var express = require("express");

var router = express.Router();

// Import the model (pizza.js) to use its database functions.
var pizza = require("../models/pizza.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  pizza.all(function(data) {
    var hbsObject = {
      pizzas: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  pizza.create([
    "name", "devoured"
  ], [
    req.body.name, false
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  pizza.update({
    devoured: true
  }, condition, function() {
    res.redirect("/");
  });
});


// Export routes for server.js to use.
module.exports = router;
