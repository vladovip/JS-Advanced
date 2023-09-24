

function greet() {
  console.log(this.name);
}

let person = { name:'Alex' };
let person2 = { name:'Boris' };

greet.call(person); // Alex
