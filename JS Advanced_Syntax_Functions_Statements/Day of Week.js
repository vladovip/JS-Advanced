function dayWeek(text) {

  let strParam = text;
  let result ="";

  switch (strParam) {
    case "Monday":
      result += 1;
      break;
    case "Tuesday":
      result += 2;
      break;
    case "Wednesday":
      result += 3;
      break;
    case "Thursday":
      result += 4;
      break;
    case "Friday":
      result += 5;
      break;
    case "Saturday":
      result += 6;
      break;
    case "Sunday":
      result += 7;
      break;
    default: console.log(`error`);
      break;
  }

  console.log(result);
}

dayWeek("Monday");
dayWeek("Friday");
dayWeek("Invalid");
