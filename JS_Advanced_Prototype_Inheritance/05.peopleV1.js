function people (){

   class Employee {
    constructor (name,age){
        if(new.target == Employee){ /// this code makes Employee work as a abstract class. Object can not be instantiated.
            throw new Error("You can not make an instance of abstract class Employee.");
        }
        this.name = name;
        this.age=age;
        this.salary = 0;
        this.tasks = []; 
    }

    getSalary(){
        return this.salary;
    }

    work (){
        let ongoingTask =  this.tasks.shift();
        console.log(`${this.name + " " + ongoingTask}`);
        this.tasks.push(ongoingTask);
    };


    collectSalary(){
       console.log(`${this.name} received ${this.getSalary()} this month.`)
    };


   }

   class Junior extends Employee{
    constructor (name,age){
      super(name,age);
      this.tasks.push(`is working on a simple task.`);
    }


   }
   
   class Senior extends Employee {
    constructor (name,age){
        super(name,age);
        this.tasks.push(`is working on a complicated task.`);
        this.tasks.push(`is taking time off work.`);
        this.tasks.push(`is supervising junior workers.`);
    }
   }
   
   class Manager extends Employee{
      constructor(name,age, dividend){
        super(name,age);
        this.dividend= 0;
        this.tasks.push(`scheduled a meeting.`);
        this.tasks.push(`is preparing a quarterly report.`);

      }

      getSalary(){
        return super.getSalary() + this.dividend;
      }

   }

   return { 
    Employee,
    Junior,
    Senior,
    Manager,
}

}