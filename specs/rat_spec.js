var assert = require("assert")
var Rat = require("../rat")
var Food = require("../food")

describe("Rat", function() {

  var rat;
  var food;

  beforeEach( function() {
    rat = new Rat();
    food = new Food();

  });

  it("Should be able to contaminate food", function(){
    rat.touchFood(food);
    assert.strictEqual(food.contaminated, true);
  })

});
