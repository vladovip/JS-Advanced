function createComputerHierarchy() {

  class Keyboard {
    constructor(manufacturer, responseTime) {
      this.manufacturer = manufacturer;
      this.responseTime = responseTime;
    }

    get manufacturer() { // getter and setter for manufacturer;
      return this._manufacturer;
    }
    set manufacturer(argumentValue) {
      if (typeof argumentValue !== "string") {
        throw new TypeError("Manufacturer must be a valid string!");
      }
      this._manufacturer = argumentValue;
    }

    get responseTime() { // getter and setter for responseTime;
      return this._responseTime;
    }
    set responseTime(argumentValue) {
      if (typeof argumentValue !== "number") {
        throw new TypeError("Response Time must be a number!");
      }
      this._responseTime = argumentValue;
    }
  }

  class Monitor {
    constructor(manufacturer, width, height) {
      this.manufacturer = manufacturer;
      this.width = width;
      this.height = height;
    }

    get width() { // getter and setter for the width;
      return this._width;
    }
    set width(param) {
      if (typeof param !== "number") {
        throw new TypeError("Width must be a number.");
      }
      this._width = param;
    }

    get height() { // getter and setter for height;
      return this._height;
    }
    set height(param) {
      if (typeof param !== "number") {
        throw new TypeError("Height must be a number.");
      }
      this._height = param;
    }
  }

  class Battery {
    constructor(manufacturer, expectedLife) {
      this.manufacturer = manufacturer;
      this.expectedLife = expectedLife;
    }
    get expectedLife (){ // getter and setter for expected life;
      return this._expectedLife;
    }
    set expectedLife (param) {
      if (typeof param !== "number"){
       throw new TypeError("Passed parameter must be number reflecting the expected years of the life of the battery.")
      }
      this._expectedLife = param;
    }
  }

  class Computer {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
      if (this.constructor === Computer) { // makes class Computer abstract Class.
        throw new Error("Abstract class Computer can not be instantiated!");
      }
      this.manufacturer = manufacturer;
      this.processorSpeed = processorSpeed;
      this.ram = ram;
      this.hardDiskSpace = hardDiskSpace;
    }

    get processorSpeed() {  // returns the processor speed
      return this._processorSpeed; 
    }
    set processorSpeed(param){ // set the processor speed
      if (typeof param !== "number"){
       throw new TypeError("Processor Speed must be a number!");
      }
      this._processorSpeed = param;
    }

    get ram() {  // getter and setter for ram property;
      return this._ram; 
    }
    set ram(param){
      if (typeof param !== "number"){
       throw new TypeError("Ram must be a number!");
      }
      this._ram = param;
    }

    get hardDiskSpace() {  // getter and setter for hard disk;
      return this._hardDiskSpace; 
    }
    set hardDiskSpace(param){
      if (typeof param !== "number"){
       throw new TypeError("HardDisk space must be a number!");
      }
      this._hardDiskSpace= param;
    }

  }

  class Laptop extends Computer {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight,color, battery) {
      super(manufacturer, processorSpeed, ram, hardDiskSpace);
      this.weight = weight;
      this.color = color;
      this.battery = battery;
    }

    get color (){ // getter and setter for the color property;
      return this._color;
    }
    set color (param){
      if( typeof param != "string"){
         throw new TypeError("Color must be a string!");
      }
      this._color = param;
    }

    get weight (){ // getter and setter for weight property;
      return this._weight;
    }
    set weight (param){
      if( typeof param !== "number"){
         throw new TypeError("Weight must be a number in kilograms!");
      }
      this._weight = param;
    }

    get battery() { // getter and setter for battery property;
      return this._battery;
    }
    set battery(paramObj) {
      if( (paramObj instanceof Battery) == false ){
        throw new TypeError("Battery must be a instance of the class Battery!")
      }
      this._battery = paramObj;
    }
  }

  class Desktop extends Computer {
    constructor (manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor){
       super(manufacturer, processorSpeed, ram, hardDiskSpace);
       this.keyboard = keyboard;
       this.monitor = monitor;
    }

    // getter and setter for keyboard-> check if the passed keyboardObject is an instance of class Keyboard;
    get keyboard(){
      return this._keyboard;
    }
    set keyboard(keyboardObject) {
      if ((keyboardObject instanceof Keyboard) ==  false){
         throw new TypeError ("Passed keyboardObject must be instance of class Keyboard!")
      }
      this._keyboard = keyboardObject;
    }
   
    // getter and setter for monitor-> check if the passed monitorObject is an instance of class Monitor;
    get monitor (){
      return this._monitor;
    }
    set monitor(monitorObject) {
      if((monitorObject instanceof Monitor) == false){
          throw new TypeError("Passed monitorObject must be an instance of  class Monitor!");
      }
      this._monitor = monitorObject;
    }
  }

  return{
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop,
  }

}
