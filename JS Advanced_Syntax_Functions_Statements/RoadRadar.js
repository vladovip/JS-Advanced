function  roadRadar ( param1, param2 ){

    if (param2 == 'city') {
        if (param1 > 50) {
            let speeding = param1 - 50;
            registeredSpeeding(speeding);
        }
    } else if (param2 == 'motorway') {
        if (param1 > 130) {
            let speeding = param1 - 130;
            registeredSpeeding(speeding);
        }
    } else if (param2 == 'interstate') {
        if (param1 > 90) {
            let speeding = param1 - 90;
            registeredSpeeding(speeding);
        }
    } else if (param2 == 'residential') {
        if (param1 > 20) {
            let speeding = param1 - 20;
            registeredSpeeding(speeding);
        }
    }
 
    function registeredSpeeding(speeding) {
        if (speeding <= 20) {
            console.log('speeding');
        } else if (speeding <= 40) {
            console.log('excessive speeding');
        } else {
            console.log('reckless driving');
        }
    }

}

roadRadar (40, 'city');
roadRadar (21, 'residential');
roadRadar (120, 'interstate');
roadRadar (200, 'motorway');