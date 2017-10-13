var assert = require("assert")
var Task = require("../task")


describe("Task", function() {

  var task;
  beforeEach( function() {
    task = new Task("hard", 7, 30);
  });

  it("Should have a difficulty", function(){
    assert.strictEqual(task.difficulty, "hard");
  })

  it("Should have a urgency level", function(){
    assert.strictEqual(task.urgency, 7);
  })

  it("Should have a reward", function(){
    assert.strictEqual(task.reward, 30);
  })

});
