() => {

    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }
    
        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }
    
    const myPerson1 = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
    const myPerson2 = new Person('SoftUni');
    const myPerson3 = new Person('Stephan', 'Johnson', 25);
    const myPerson4 = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com');
    
    return personArray = [myPerson1, myPerson2, myPerson3, myPerson4];  
}
