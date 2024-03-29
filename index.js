class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    let node = new Node(val);
    if (this.size === 0) {
      this.first = node;
    } else {
      this.last.next = node;
    }
    this.last = node;
    return ++this.size;
  }
  dequeue() {
    if (this.size === 0) {
      return null;
    }
    let temp = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.size--;
    return temp.val;
  }
}

const findShortestPathByKnight = (start, finish) => {
  const visited = {};
  const queue = new Queue();
  queue.enqueue(start);
  const previous = {};
  previous[start] = null;
  const shortestPath = [];
  visited[start] = true;
  const rowIndexes = [-2, -2, -1, 1, 2, 2, 1, -1];
  const colIndexes = [-1, 1, 2, 2, 1, -1, -2, -2];

  while (queue.size) {
    let algChessNotation = queue.dequeue();
    if (algChessNotation === finish) {
      shortestPath.push(finish);
      while (previous[algChessNotation]) {
        shortestPath.push(previous[algChessNotation]);
        algChessNotation = previous[algChessNotation];
      }
      break;
    }
    let [row, col] = convertToIndexTuple(algChessNotation);
    for (let i = 0; i < rowIndexes.length; i++) {
      let currMove = [row + rowIndexes[i], col + colIndexes[i]];
      let currBoardPos = convertToAlgChessNotation(currMove);
      if (!visited[currBoardPos] && isMoveValid(currMove)) {
        previous[currBoardPos] = algChessNotation;
        visited[currBoardPos] = true;
        queue.enqueue(currBoardPos);
      }
    }
  }
  shortestPath.pop();
  return shortestPath.reverse();
};

// ********* HELPER FUNCTIONS **********
function convertToIndexTuple(chessNotation) {
  const charToIndex = {
    A: 0,
    B: 1,
    C: 2,
    D: 3,
    E: 4,
    F: 5,
    G: 6,
    H: 7,
    1: 7,
    2: 6,
    3: 5,
    4: 4,
    5: 3,
    6: 2,
    7: 1,
    8: 0
  };
  return [charToIndex[chessNotation[0]], charToIndex[chessNotation[1]]];
}

function convertToAlgChessNotation(position) {
  const indexToCol = {
    0: "A",
    1: "B",
    2: "C",
    3: "D",
    4: "E",
    5: "F",
    6: "G",
    7: "H"
  };
  const indexToRow = {
    7: 1,
    6: 2,
    5: 3,
    4: 4,
    3: 5,
    2: 6,
    1: 7,
    0: 8
  };
  return `${indexToCol[position[0]]}${indexToRow[position[1]]}`;
}

function isMoveValid(endPos) {
  let row = endPos[0];
  let col = endPos[1];
  return !(row < 0 || row > 7 || col < 0 || col > 7);
}

module.exports = {
  findShortestPathByKnight,
  convertToIndexTuple,
  convertToAlgChessNotation,
  isMoveValid
};
