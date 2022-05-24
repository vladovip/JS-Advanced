function roadRadar (paramSpeed, paramArea) {

  let printInfo = "";
  let speedLimit = 0;
  let excedingSpeed = 0;
  let status = "";

  if (paramArea === "city") {
    speedLimit = 50;
  } else if (paramArea === "residential") {
    speedLimit = 20;
  } else if (paramArea === "interstate") {
    speedLimit = 90;
  } else if (paramArea === "motorway") {
    speedLimit = 130;
  }

  if (paramSpeed <= speedLimit && paramSpeed > 0) {
    printInfo = `Driving ${paramSpeed} km/h in a ${speedLimit} zone`;
  } else {
    excedingSpeed = paramSpeed - speedLimit;
    if (excedingSpeed <= 20) {
      status = "speeding";
    } else if (excedingSpeed > 20 && excedingSpeed <= 40) {
      status = "excessive speeding";
    } else {
      status = "reckless driving";
    }

    printInfo = `The speed is ${excedingSpeed} km/h faster than the allowed speed of ${speedLimit} - ${status}`;

  }
  console.log(printInfo);
}

roadRadar (40, 'city');
roadRadar (21, 'residential');
roadRadar (120, 'interstate');
roadRadar (200, 'motorway');
