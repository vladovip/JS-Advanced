function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      
      let input = document.querySelectorAll("div#inputs textarea")[0].value;
      let inputArr = JSON.parse(input);
      // console.log(input);
      let averageSalary = 0;
      let totalSalary = 0;
      let currentAvgSalary=0;
      let bestNameRestaurant = "";
      let bestSalary = 0;
      let output = {};

    // [ "PizzaHut - Peter 500, George 300, Mark 800", "TheLake - Bob 1300, Joe 780, Jane 660"]

      for (let inputElem of inputArr) {
          let restaurantInfoTokens = inputElem.split(" - ");
         //  console.log(restaurantInfo);
         let restaurantName = restaurantInfoTokens[0];
         let workersData = restaurantInfoTokens[1].split(", ");
         for (let workerPairs of workersData) {
               let [name, salary]= workerPairs.split(" ");

               if ( output.hasOwnProperty(restaurantName) == false ){
                  output[restaurantName] = {}; 
               } else if (output.hasOwnProperty(restaurantName) == true)  {
                 output[restaurantName][name]= Number(salary);
               }
         }
      }
          let entriesArr = Object.entries(output);
          for (let entry of entriesArr) {
            let key = entry[0];
            let valuesArrTuples = Object.entries(entry[1]);
            
            for (let [name,salary]  of valuesArrTuples) {
               totalSalary += Number(salary);   
            }
            averageSalary = totalSalary/valuesArrTuples.length
            if (averageSalary > currentAvgSalary ){
               currentAvgSalary = averageSalary;
               bestNameRestaurant = key;
               totalSalary = 0;
            }
          }

         let result = Object.entries(output[bestNameRestaurant]).sort((a,b) => b[1] - a[1]);
         let print = '';
         result.forEach( x => print += `Name: ${x[0]} With Salary: ${x[1]} `)

          document.querySelector("#bestRestaurant p")
          .textContent = `Name: ${bestNameRestaurant} Average Salary: ${currentAvgSalary.toFixed(2)} Best Salary: ${result[0][1].toFixed(2)}`

          document.querySelector('#workers p').textContent = print;
   }
}