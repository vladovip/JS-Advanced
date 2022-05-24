function solve(year, month, day) {


  let dateObj = new Date(year, month-1, day);
  dateObj.setDate(dateObj.getDate()-1);
  console.log(`${dateObj.getFullYear()}-${dateObj.getMonth()+1}-${dateObj.getDate()}`);
}
solve(2016, 10, 1);
solve(2016, 9, 30);  



// function  oneDayBackwards (year, month, day){
    
//     let dateObj = new Date(year, month-1, day);
//     // console.log(dateObj);
//     let tempDate = new Date(dateObj).setDate(-1);
//     // console.log(tempDate);
//     let newDateChanged = new Date (tempDate)
//     console.log(`${newDateChanged.getFullYear()}-${newDateChanged.getMonth()+1}-${newDateChanged.getDate()}`)

// }

// oneDayBackwards (2016, 10, 1);
// oneDayBackwards (2016, 9, 30);
