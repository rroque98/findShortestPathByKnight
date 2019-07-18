var {
  findShortestPathByKnight,
  convertToIndexTuple,
  convertToAlgChessNotation,
  isMoveValid
} = require("./index.js");
var assert = require("assert");

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

describe("function convertToIndexTuple(chessNotation)", function() {
  let actual = convertToIndexTuple("B6");
  let expected = [1, 2];
  it("should return a tuple with the correct chess board coordinates", function() {
    assert.deepEqual(actual, expected);
  });
});

describe("function convertToAlgChessNotation(position)", function() {
  let actual = convertToAlgChessNotation([1, 2]);
  let expected = "B6";
  it("should return an output with a type of string", function() {
    assert.equal(typeof actual, "string");
  });
  it("should return the correct algebraic chess", function() {
    assert.equal(actual, expected);
  });
});

describe("function isMoveValid(endPos)", function() {
  it("should return false if the row is invalid", function() {
    let actual = isMoveValid([-1, 2]);
    let expected = false;
    assert.equal(actual, expected);
  });
  it("should return false if the col is invalid", function() {
    let actual = isMoveValid([1, 8]);
    let expected = false;
    assert.equal(actual, expected);
  });
  it("should return true if the row and col are valid", function() {
    let actual = isMoveValid([1, 2]);
    let expected = true;
    assert.equal(actual, expected);
  });
});
