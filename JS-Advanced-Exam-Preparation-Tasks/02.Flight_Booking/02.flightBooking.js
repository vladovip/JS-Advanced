



// in judge system   is  81 / 100 points. The solution needs to be refined.

class  FlightBookingSystem {
    constructor(agencyName) {
        this.agencyName = agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0;
    }
   // TO DO methods: 
   addFlight (flightNumber, destination, departureTime, price) {
        let currentFlight =  this.flights.find((el) => el.flightNumber === flightNumber)
        if( currentFlight == undefined ){
            this.flights.push({flightNumber, destination, departureTime, price});
            return `Flight ${flightNumber} to ${destination} has been added to the system.`;
        }
        return `Flight ${flightNumber} to ${destination} is already available.`;

   }

   bookFlight (passengerName, flightNumber){
       let isFlightExists  = this.flights.some((x)=> x.flightNumber == flightNumber);
       if ( isFlightExists == false ){
        return `Flight ${flightNumber} is not available for booking.`
       } else {
        this.bookings.push({passengerName, flightNumber});
        this.bookingsCount+=1;
        return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`
       }

   }

   cancelBooking (passengerName, flightNumber){
      let isBookingExists = this.bookings.some((el)=> el.passengerName == passengerName && el.flightNumber == flightNumber);
      if (isBookingExists == false ){
        throw new Error (`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`);
      } else {
        let indexOfCancelledFlight =  this.bookings.findIndex( (el) => el.passengerName == passengerName && el.flightNumber == flightNumber);
        if (indexOfCancelledFlight != -1) {
            this.bookings.splice(indexOfCancelledFlight, 1);
            this.bookingsCount -=1;
            return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
        }
      }


   }

   showBookings(criteria){
    
         if( this.bookings.length == 0 ){
          throw Error (`No bookings have been made yet.`);
         } else {

            if ( criteria  == "all"){
                let resultArr  = this.bookings.map((el)=> `${el.passengerName} booked for flight ${el.flightNumber}.`)  
                return `All bookings(${this.bookingsCount}):\n` + resultArr.join("\n");
                }
               
            if (criteria == "cheap"){
                let isFlightIsCheap = this.flights.some((xFlight)=> xFlight.price <= 100 );
                if (isFlightIsCheap ==  false ){
                         return `No cheap bookings found.`;
                } else {
                        let cheapFlightArr = this.flights.filter((xFlight)=> xFlight.price <= 100 );
                        let result =  cheapFlightArr.map((xFlight) => `${xFlight.passengerName} booked for flight ${xFlight.flightNumber}.`);
                        return `Cheap bookings:\n` + result.join("\n");
                }
            }
            
                if ( criteria == "expensive" ){
                        let isFlightIsExpensive = this.flights.some((xFlight)=> xFlight.price > 100 );
                        if (isFlightIsExpensive ==  false ){
                            return `No expensive bookings found.`;
                        } else {
                           let expensiveFlightArr = this.flights.filter((xFlight)=> xFlight.price > 100 );
                           let resultArr =  expensiveFlightArr.map((xFlight) => `${xFlight.passengerName} booked for flight ${xFlight.flightNumber}.`)
                           return `Expensive  bookings:\n` + resultArr.join("\n");
                        }
                }
         }
   }

}