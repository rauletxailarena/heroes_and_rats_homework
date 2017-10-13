var assert = require("assert")
var Hero = require("../hero")

describe("Hero", function() {


  var hero;
  beforeEach( function() {
    hero = new Hero("Link", 100, "chicken");
  });

  it ("should have a name", function() {
    assert.strictEqual(hero.name, "Link");
  });

  it ("should have a health value", function() {
    assert.strictEqual(hero.health, 100);
  });

  it ("should have a favourite food", function() {
    assert.strictEqual(hero.favouriteFood, "chicken");
  });

  it ("should start with 0 tasks", function() {
    assert.strictEqual(hero.tasks.length, 0);
  });



});
