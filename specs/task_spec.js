var assert = require("assert")
var Task = require("../task")
var Hero = require("../hero")


describe("Task", function() {

  var task;
  var task2;
  var task3;
  var hero;



  beforeEach( function() {
    task = new Task(6, 4, 30);
    task2 = new Task(8, 6, 45);
    task3 = new Task(4, 3, 25);
    hero = new Hero();
  });

  it("Should have a difficulty", function(){
    assert.strictEqual(task.difficulty, 6);
  })

  it("Should have a urgency level", function(){
    assert.strictEqual(task.urgency, 4);
  })

  it("Should have a reward", function(){
    assert.strictEqual(task.reward, 30);
  })

  it("Should start as uncompleted", function(){
    assert.strictEqual(task.completed, false);
  })

  it("Should be able to be set to completed", function(){
    task.completed = true;
    assert.strictEqual(task.completed, true);
  })


});
