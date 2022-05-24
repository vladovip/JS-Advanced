function validityChecker ( param1, param2, param3, param4){

 let inputArray = [ param1, param2, param3, param4 ];

  let x1 = inputArray[0];
  let y1 = inputArray[1];
  let x2 = inputArray[2];
  let y2 = inputArray[3];
  let defaulX = 0;
  let defaultY = 0;

  function distanceX1Y1toX0Y0(x1, y1, defaulX, defaultY) {
    let distance = Math.sqrt(
      Math.pow(x1 - defaulX, 2) + Math.pow(y1 - defaultY, 2)
    );
    return distance;
  }
  let currentDistance1 = distanceX1Y1toX0Y0(x1, y1, defaulX, defaultY);

  function distanceX2Y2toX0Y0(x2, y2, defaulX, defaultY) {
    let distance = Math.sqrt(
      Math.pow(x2 - defaulX, 2) + Math.pow(y2 - defaultY, 2)
    );
    return distance;
  }
  let currentDistance2 = distanceX2Y2toX0Y0(x2, y2, defaulX, defaultY);

  function distanceX1Y1toX2Y2(x1, y1, x2, y2) {
    let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return distance;
  }
  let currentDistance3 = distanceX1Y1toX2Y2(x1, y1, x2, y2);

  if (Number.isInteger(currentDistance1)) {
    console.log(`{${x1}, ${y1}} to {${defaulX}, ${defaultY}} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {${defaulX}, ${defaultY}} is invalid`);
  }

  if (Number.isInteger(currentDistance2)) {
    console.log(`{${x2}, ${y2}} to {${defaulX}, ${defaultY}} is valid`);
  } else {
    console.log(`{${x2}, ${y2}} to {${defaulX}, ${defaultY}} is invalid`);
  }

  if (Number.isInteger(currentDistance3)) {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
  }

  // console.log(`${x1, y1} to ${defaulX, defaultY} is valid`);
  // console.log(`${x2, y2} to ${defaulX, defaultY} is valid`);
  // console.log(`${x1, y1} to ${x2, y2} is valid`);

}
validityChecker (3, 0, 0, 4 ); 


console.log(`---------`);


validityChecker (2, 1, 1, 1);  