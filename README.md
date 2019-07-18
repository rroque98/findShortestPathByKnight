# Find Shortest Path By Knight

> This program provides access to a findShortestPathByKnight function which takes in 2 positions on an 8x8 chess board in algebraic chess notation and returns an array with the shortest sequence between the 2 positions

## Description

Given a standard 8x8 chessboard, the findShortestPathByKnight function accepts two squares identified by algebraic chess notation. The first square is the starting position, and the second square is the ending position. Using a queue and Breadth First Search (BFS), it will find the shortest sequence of valid moves to take a Knight piece from the starting position to the ending position. Each move must be a legal move by a Knight.

For any two squares there may be more than one valid solution. There are no pieces
other than the Knight on the board.

**Input:** Two squares, identified in algebraic chess notation representing the starting and ending positions of the Knight.
**Output:** A list of squares through which the Knight passes, in algebraic chess notation. This includes the ending position, but excludes the starting position.

**Example:**
findShortestPathByKnight('A8', 'B7');
Test Input:
'A8' 'B7'
Expected Output:
['B6', 'A4', 'C5', 'B7]

**Example of an 8x8 nested array chess board with algebraic chess notation:**

```javascript
const chessBoard = [
  [a8, b8, c8, d8, e8, f8, g8, h8],
  [a7, b7, c7, d7, e7, f7, g7, h7],
  [a6, b6, c6, d6, e6, f6, g6, h6],
  [a5, b5, c5, d5, e5, f5, g5, h5],
  [a4, b4, c4, d4, e4, f4, g4, h4],
  [a3, b3, c3, d3, e3, f3, g3, h3],
  [a2, b2, c2, d2, e2, f2, g2, h2],
  [a1, b1, c1, d1, e1, f1, g1, h1]
];
```

## Technology stack

- JavaScript ES6
- Node.js
- Mocha.js

## Development

### Setup Instructions

From within the root directory:

```sh
1. Clone repo locally
2. Install dependencies: `npm install`
3. To run tests: `npm test`
```

In your File:

```javascript
var { findShortestPathByKnight } = require("PATH_TO_THIS_PROGRAM'S_index.js");
const shortestSeqOfMoves = findShortestPathByKnight("A8", "B7");
console.log(shortestSeqOfMoves); // ["B6", "A4", "C5", "B7"]
```
