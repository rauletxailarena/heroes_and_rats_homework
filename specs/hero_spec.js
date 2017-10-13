var assert = require("assert");
var Hero = require("../hero");
var Food = require("../food");
var Task = require("../task");

describe("Hero", function() {


  var hero;
  var steak;
  var chichek;
  var task;
  var task2;
  var task3;

  beforeEach( function() {
    hero = new Hero("Link", 100, "chicken");
    steak = new Food("steak", 20);
    chicken = new Food("chicken", 10);
    task = new Task(6, 4, 30);
    task2 = new Task(8, 6, 45);
    task3 = new Task(4, 3, 50);
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

  it ("should be able to recover health eating food", function(){
    hero.eat(steak);
    assert.strictEqual(hero.health, 120);
  });

  it ("should be able to recover more health than usual when eating their favourite food", function(){
    hero.eat(chicken);
    assert.strictEqual(hero.health, 115);
  });

  it("Should be able to sort tasks by their properties", function() {
    hero.tasks.push(task);
    hero.tasks.push(task2);
    hero.tasks.push(task3);
    assert.deepStrictEqual(hero.tasks, [task, task2, task3]);
    hero.sortTasksBy("difficulty");
    assert.deepStrictEqual(hero.tasks, [task2, task, task3]);
    hero.sortTasksBy("urgency");
    assert.deepStrictEqual(hero.tasks, [task2, task, task3]);
    hero.sortTasksBy("reward");
    assert.deepStrictEqual(hero.tasks, [task3, task2, task]);
  })

  it ("should be able to see tasks maked as not-completed", function(){
    hero.tasks.push(task);
    hero.tasks.push(task2);
    hero.tasks.push(task3);
    assert.deepStrictEqual(hero.getUncompletedTasks(), [task, task2, task3]);
  });

  it ("should be able to see tasks maked as completed", function(){
    hero.tasks.push(task);
    hero.tasks.push(task2);
    hero.tasks.push(task3);
    hero.tasks[0].completed = true;
    assert.deepStrictEqual(hero.getCompletedTasks(), [task]);
  });




});
