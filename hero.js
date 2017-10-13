var Hero = function(name, health, favouriteFood) {
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.tasks = [];
};

Hero.prototype.talk = function() {
  return "Hello, my name is " + this.name;
}

Hero.prototype.eat = function(food) {
  var bonusMultiplier = 1;
  if (food.name === this.favouriteFood) bonusMultiplier = 1.5;
  this.health += food.replentishment * bonusMultiplier;
}

Hero.prototype.sortTasksBy = function(category){
  this.tasks.sort(function(a, b){
    return b[category] - a[category];
  });
};

module.exports = Hero;

var a = new Hero("Asfas", "afasf", "Asfaf");

console.log(a);
