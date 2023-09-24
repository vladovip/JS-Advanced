// PROTOTYPE and Inheritance: 

// With Object.create() :
const a = { a: 1 };
// a ---> Object.prototype ---> null

const b = Object.create(a);
// b ---> a ---> Object.prototype ---> null
console.log(b.a); // 1 (inherited)

const c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null
console.log(c.a); // 1 (inherited)


//------------------------------------------------------------------------------
// With constructor functions:
function Graph() {
    this.vertices = [];
    this.edges = [];
  }
  
  Graph.prototype.addVertex = function (v) {
    this.vertices.push(v);
  };
  
  const g = new Graph();
  // g is an object with own properties 'vertices' and 'edges'.
  // g.[[Prototype]] is the value of Graph.prototype when new Graph() is executed.

//-----------------------------------------------------------------------------
//With classes : 
class Rectangle {
  constructor(height, width) {
    this.name = "Rectangle";
    this.height = height;
    this.width = width;
  }
}

class FilledRectangle extends Rectangle {
  constructor(height, width, color) {
    super(height, width);
    this.name = "Filled rectangle";
    this.color = color;
  }
}

const filledRectangle = new FilledRectangle(5, 10, "blue");
// filledRectangle ---> FilledRectangle.prototype ---> Rectangle.prototype ---> Object.prototype ---> null
//----------------------------------------------------------------------------

// With Object.setPrototypeOf() 
//  While all methods above will set the prototype chain at object creation time, 
//  Object.setPrototypeOf() allows mutating the [[Prototype]] internal property of an existing object.
const obj = { a: 1 };
const anotherObj = { b: 2 };
Object.setPrototypeOf(obj, anotherObj);
// obj ---> anotherObj ---> Object.prototype ---> null