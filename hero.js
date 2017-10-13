var Hero = function(name, health, favouriteFood) {
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.tasks = [];
  this.talk = function() {
    return "Hello, my name is " + this.name;
  }
};


module.exports = Hero;

var a = new Hero("Asfas", "afasf", "Asfaf");

console.log(a);
