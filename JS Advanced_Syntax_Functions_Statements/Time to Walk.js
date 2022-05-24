function timeWalk (param1, param2, param3) {


    let stepsNumber = +param1;
    let stepsMetersHr = +param2;
    let studentSpeed = +param3;
  
    let distanceMeters = stepsNumber * stepsMetersHr;
    let speedMetersSec = studentSpeed / 3.6;
    let time = distanceMeters / speedMetersSec;
    let rest = Math.floor(distanceMeters / 500);
  
    let timeMin = Math.floor(time / 60);
    let timeSec = Math.round(time - (timeMin * 60));
    let timeHr = Math.floor(time / 3600);
  
  
    console.log((timeHr < 10 ? "0" : "") + timeHr + ":" + (timeMin + rest < 10 ? "0" : "") + (timeMin + rest) + ":" + (timeSec < 10 ? "0" : "") + timeSec);

}
timeWalk (4000, 0.60, 5);
timeWalk(2564, 0.70, 5.5);
