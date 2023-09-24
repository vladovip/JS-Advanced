class Company {
constructor (){
    this.departments = {};
}

addEmployee( name, salary, position, department ){
if ( name ==""|| position =="" || department == "" || name == null || position == null || department == null 
|| name == undefined || position == undefined || department == undefined || salary < 0) {
    throw new Error ("Invalid input!");
}
let newEmployee = {name, salary, position, department };
if  (this.departments.hasOwnProperty(department) == false) {
    this.departments[department] = [newEmployee];
} else  if (this.departments.hasOwnProperty(department) == true) {
    this.departments[department].push(newEmployee);
}
return `New employee is hired. Name: ${name}. Position: ${position}`;

}

bestDepartment (){

let arrofDeparments  = Object.keys(this.departments);
for  ( let el of arrofDeparments){
       let currentDepartment = this.departments[el];
    //    console.log(currentDepartment);
    let departmentSize = this.departments[el].length;
    let totalSalary = 0;
    for( let currentPerson of currentDepartment){
        totalSalary += Number(currentPerson.salary);
    }
    let averageSalary = Number(totalSalary / departmentSize);
    this.departments[el].push(averageSalary);
    // console.log(this.departments); 
}

let departmentSortArr = Object.keys(this.departments);
departmentSortArr.sort((a,b)=>{
     let lastIndexA = this.departments[a].length-1;
     let lastIndexB = this.departments[b].length-1;
     let lastElementA = this.departments[a][lastIndexA];
     let lastElementB = this.departments[b][lastIndexB];
     return  lastElementB - lastElementA;
});

let bestDepartment = departmentSortArr[0];
let resultStr = `Best Department is: ${bestDepartment}\n`;
resultStr += `Average salary: ${(this.departments[bestDepartment][this.departments[bestDepartment].length-1]).toFixed(2)}\n`;
let salaryElement = this.departments[bestDepartment].pop();
let employeeForSorting = this.departments[bestDepartment];
employeeForSorting.sort((a,b)=> {
   return  (b.salary - a.salary) ? (b.salary - a.salary) : (a.name.localeCompare(b.name));
})

employeeForSorting.forEach(el => {
    resultStr +=`${el.name} ${el.salary} ${el.position}\n`;
});
return resultStr.trim();

};

}




let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
