// hexMatrix.js - core logic for hexagon-based field transformations

// Richtlijnen voor posities in een hexagonale matrix
// Elke cel heeft 6 directe buren op ±60°
// We representeren de matrix als een lijst van cellen met (q, r)-coördinaten

class HexCell {
  constructor(q, r, value = null) {
    this.q = q; // axiale coördinaat
    this.r = r;
    this.value = value;
  }

  key() {
    return `${this.q},${this.r}`;
  }

  neighbors() {
    const directions = [
      [+1,  0], [0, +1], [-1, +1],
      [-1,  0], [0, -1], [+1, -1]
    ];
    return directions.map(([dq, dr]) => new HexCell(this.q + dq, this.r + dr));
  }

  rotate(clockwise = true) {
    return clockwise ? new HexCell(-this.r, this.q + this.r) : new HexCell(this.q + this.r, -this.q);
  }

  shift(dx, dy) {
    return new HexCell(this.q + dx, this.r + dy);
  }
}

class HexMatrix {
  constructor() {
    this.cells = new Map();
  }

  set(q, r, value) {
    const cell = new HexCell(q, r, value);
    this.cells.set(cell.key(), cell);
  }

  get(q, r) {
    return this.cells.get(`${q},${r}`)?.value || null;
  }

  applyTransformation(operator) {
    const result = new HexMatrix();
    for (let cell of this.cells.values()) {
      let transformed = operator(cell);
      result.set(transformed.q, transformed.r, transformed.value);
    }
    return result;
  }

  debug() {
    for (let cell of this.cells.values()) {
      console.log(`[${cell.q}, ${cell.r}] => ${cell.value}`);
    }
  }
}

// Operators
function T_operator(cell) {
  const reversed = cell.value.split('').reverse().join('');
  return new HexCell(cell.q, cell.r, reversed + "_T");
}

function R_operator(cell) {
  const rotated = cell.value.toUpperCase();
  const newCell = cell.rotate();
  newCell.value = rotated + "_R";
  return newCell;
}

function S_operator(cell) {
  const shifted = cell.value.replace(/ /g, '_');
  const newCell = cell.shift(1, -1); // voorbeeldverschuiving
  newCell.value = shifted + "_S";
  return newCell;
}

// Export
if (typeof module !== 'undefined') {
  module.exports = { HexCell, HexMatrix, T_operator, R_operator, S_operator };
}
