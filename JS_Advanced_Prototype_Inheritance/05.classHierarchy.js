function createHierarchy() {

  class Figure {
    constructor(units = "cm") {
      this.units = units;
    }

    get  _devideValue (){
        switch(this.units){
            case "cm" : return 1;
            case "mm" : return 0.10;
            case "m" : return 100;
        }
    }

    changeUnits (value){
      this.units = value;
    }

    toString(){
        return `Figures units: ${this.units}`
    }
  }

  class Circle extends Figure {
    constructor (radius){
     super();
     this._radiusradius = radius;
    }

    get  _devideValue (){
        switch(this.units){
            case "cm" : return 1;
            case "mm" : return 0.10;
            case "m" : return 100;
        }
    }

    get radius(){
      return  this._radius / this._devideValue;
    }

    get area (){
        return Math.PI * this.radius * this.radius;
    }

    toString(){
        let baseToString = super.toString();
        return `Figures units: ${baseToString} Area: ${this.area} - radius: ${this.radius}`
    }
  }

  class Rectangle extends Figure {
    constructor (width, height, units){
    super(units);
    this._width = width;
    this._height = height;
    }

    get  _devideValue (){
        switch(this.units){
            case "cm" : return 1;
            case "mm" : return 0.10;
            case "m" : return 100;
        }
    }

    get width() {
       return this._width / this._devideValue;
    }
    get height() {
        return this._height / this._devideValue;
    }
    get area () {
        let area = this.width * this.height;
        return area;
    }
    toString(){
        let baseToString = super.toString();
        return `Figures units: ${baseToString} Area: ${this.area} - width: ${this.width}, height: ${this.height}`
    }
  }

  return {
    Figure,
    Circle,
    Rectangle
  }
}
