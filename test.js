var { findShortestPathByKnight } = require("./index.js");
var assert = require("assert");

// actual = findShortestPathByKnight("B7", "B7");
// expected = [];
// console.log(actual.length === 0);
// console.log(JSON.stringify(actual) === JSON.stringify(expected));

describe("function findShortestPathByKnight(start, finish)", function() {
  describe("should find shortest path to neighboring position", function() {
    let actual = findShortestPathByKnight("A8", "B7");
    let expected = ["B6", "A4", "C5", "B7"];
    it("should return an output with the correct length", function() {
      assert.equal(actual.length, 4);
    });
    it("should return an output that excludes the start position", function() {
      assert.notEqual("A8", actual[0]);
    });
    it("should return an output that includes the end position", function() {
      assert.equal("B7", actual[actual.length - 1]);
    });
    it("should return an array with a viable shortest path sequence", function() {
      assert.deepEqual(actual, expected);
    });
  });
  describe("should find shortest path while starting from any position", function() {
    let actual = findShortestPathByKnight("D5", "H1");
    let expected = ["B4", "D3", "F2", "H1"];
    it("should return an output with the correct length", function() {
      assert.equal(actual.length, 4);
    });
    it("should return an output that excludes the start position", function() {
      assert.notEqual("D5", actual[0]);
    });
    it("should return an output that includes the end position", function() {
      assert.equal("H1", actual[actual.length - 1]);
    });
    it("should return an array with a viable shortest path sequence", function() {
      assert.deepEqual(actual, expected);
    });
  });
  describe("should be able to handle an equal starting and end position", function() {
    let actual = findShortestPathByKnight("D5", "D5");
    let expected = [];
    it("should return an empty array", function() {
      assert.deepEqual(actual, expected);
    });
  });
});
