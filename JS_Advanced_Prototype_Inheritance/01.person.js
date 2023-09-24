function createPerson(firstName, lastName) {

  let person = {
    firstName,
    lastName,

    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },

    set fullName(stringName) {
      let tokens = stringName.split(" ");
      this.firstName = tokens[0];
      this.lastName = tokens[1];
    },
  };

  return person; 
}


let person = createPerson("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla
