var assert = require("assert")
var Food = require("../food")


describe("Food", function() {

  var chicken;
  beforeEach( function() {
    chicken = new Food("chicken", 20);
  });

  it("Should have a name", function(){
    assert.strictEqual(chicken.name, "chicken");
  })

  it("Should have a replentishment value", function(){
    assert.strictEqual(chicken.replentishment, 20);
  })


});
