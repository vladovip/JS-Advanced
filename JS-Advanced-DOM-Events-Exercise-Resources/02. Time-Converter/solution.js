function attachEventsListeners() {
   
    let dayButtonRef = document.getElementById("daysBtn");
    let hoursButtonRef = document.getElementById("hoursBtn");
    let minutesButtonRef = document.getElementById("minutesBtn");
    let secondsButtonRef = document.getElementById("secondsBtn");

    let inputDays = document.getElementById("days");
    let inputHours = document.getElementById("hours");
    let inputMinutes = document.getElementById("minutes");
    let inputSeconds = document.getElementById("seconds");

    let objectRatio = {
        day: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    }

    dayButtonRef.addEventListener("click", convertTime);
    hoursButtonRef.addEventListener("click", convertTime);
    minutesButtonRef.addEventListener("click", convertTime);
    secondsButtonRef.addEventListener("click", convertTime);
    

    function convert (value, timeMeasure){
        let currentDays  = value / objectRatio[timeMeasure];
        return {
            days: currentDays,
            hours: currentDays   * objectRatio.hours,
            minutes: currentDays * objectRatio.minutes,
            seconds: currentDays * objectRatio.seconds,
        }
    }

    function convertTime(event){
        let inputData = event.target.parentElement.querySelector("input[type='text']");
        let timeObj = convert  (Number(inputData.value), inputData.id);

        inputDays.value = timeObj.days;
        inputHours.value = timeObj.hours;
        inputMinutes.value = timeObj.minutes;
        inputSeconds.value = timeObj.seconds;
    } 

}