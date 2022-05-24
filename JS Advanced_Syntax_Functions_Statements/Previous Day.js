function previousDay (param1, param2, param3){

let year = +param1;
let month = +param2;
let day = +param3;

let currentDate = new Date (year, month+=1, day-=1 );

let newlyYear = currentDate.getFullYear();
let newlyMonth = currentDate.getMonth();
let newlyDay = currentDate.getDate();

console.log(`${newlyYear}-${newlyMonth-1}-${newlyDay}`);


} 

previousDay (2016, 9, 30); 
previousDay (2016, 10, 1);