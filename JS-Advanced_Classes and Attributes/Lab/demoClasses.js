class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  congratulations () { 
   console.log `${this.name} at ${this.age} says Hi.`
};
}

let obj1 = new Person("Vladimir", 39);
let obj2 = new Person("Desislava", 32);
let obj3= new Person("Madalina", 5);

console.log(obj1);
console.log(obj2);
console.log(obj3);


