function classHierarchy1() {

  class Figure {
    constructor(units) {
      this.units = units;
    }

    changeUnits(num) {
      this.units = num;
    }

    convertMeasurement(x) {
      let objConverter = {
        // 30cm
        m: (x) => x /= 10,
        cm: (x) => x,
        mm: (x) => x *= 10,
      };
      return objConverter[this.units](x);
    }
  }

  class Circle extends Figure {
    constructor(units, radius) {
      super(units);
      this._radius = radius;
    }
    get radius (){
        return this.convertMeasurement(this._radius);
    }
    get area() {
      return this.radius * this.radius * Math.PI;
    }
    toString() {
      return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`;
    }
  }

  class Rectangle extends Figure {
    constructor (width, height, units){
        super(units);
        this._width = width;
        this._height = height;
    }
    get width (){
       return this.convertMeasurement(this._width);
    }

    get height (){
        return this.convertMeasurement(this._height);
     }

    get area(){
        return this.width*this.height;
    }
    toString(){
       return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`  
    }
  }
    
  let c = new Circle(5);
  console.log(c.area);

  return {
    Figure,
    Circle,
    Rectangle,
  }

}
