function dayInMonth(param1, param2) {
 
 
 
  let month = +param1;
  let year = +param2;
  let DateObj = new Date(year, month, 0).getDate();
  
  console.log(DateObj);

}

dayInMonth(1, 2012);

dayInMonth(2, 2021);
