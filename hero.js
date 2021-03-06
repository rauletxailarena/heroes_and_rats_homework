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
  if (food.contaminated === true) this.health -= food.replentishment;
  return;
  var bonusMultiplier = 1;
  if (food.name === this.favouriteFood) bonusMultiplier = 1.5;
  this.health += food.replentishment * bonusMultiplier;
}

Hero.prototype.sortTasksBy = function(category){
  this.tasks.sort(function(a, b){
    return b[category] - a[category];
  });
};

Hero.prototype.getUncompletedTasks = function(){
  return this.tasks.filter(function(task){
    return !task.completed;
  });
};

Hero.prototype.getCompletedTasks = function(){
  return this.tasks.filter(function(task){
    return task.completed;
  });
};

module.exports = Hero;

var a = new Hero("Asfas", "afasf", "Asfaf");

console.log(a);
