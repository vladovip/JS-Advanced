class Company {

  constructor() {
    this.departments = [];
  }
    getDepart (name) {
      let depart = this.departments.find( department => department.name === name);
      if (!depart){
        let temp = { name, employees: [], salaries: [], positions: [] };
        this.departments.push(temp);
        return temp;
      }
      return depart;
    } 
 
    getSalarySum(depart){
       return depart.salaries.reduce((acc, val)=> acc + val, 0);
    };

    bestSalaryDepart(){
     return   this.departments.sort((a,b)=> {
       (this.getSalarySum(b)/b.salaries.length) - (this.getSalarySum(a)/ a.salaries.length)
    })[0];
    };

    addEmployee(...args){
        let [ name, salary, position, departmentName] =  args;
        let isInvalidInput = args.some( (el) => el == undefined || el == null || el == "") || salary < 0;
        if ( isInvalidInput == true ){
            throw new Error("Invalid input!");
        }
        let department = this.getDepart(departmentName);
        department.employees.push(name);
        department.salaries.push(salary);
        department.positions.push(position);
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    };

    bestDepartment(){
        let best = this.bestSalaryDepart();
        let combinedEmployees = best.employees.reduce ((a,v,i)=>{
            a[i]= [];
            a[i].push(v, best.salaries[i], best.positions[i]);
            return a;
        }, []);
        let sorted =  combinedEmployees.sort((a,b)=> {
           return b[1] - a[1] == 0 ? a[0].localeCompare(b[0]) : b[1] - a[1];
        });

       let printResult = sorted.map((x)=> x.join(" ")).join("\n");
       let averageSalary = (this.getSalarySum(best)) / (best.salaries.length);

       return `Best Department is: ${best.name}
Average salary: ${averageSalary.toFixed(2)}
${printResult}`;

    //    `Best Department is: {best department's name}
    //     Average salary: {best department's average salary}
    //     {employee1} {salary} {position}
    //     {employee2} {salary} {position}
    //     {employee3} {salary} {position}

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
