function tickets(arrTicketDescription, sortingCrietria){
    let arrOfTickets = [];

    class Ticket {

        constructor (destination, price, status){
           this.destination = destination;
           this.price = price;
           this.status = status;
        }
        compareTo (other, currentCriteria) {
           if(typeof this[currentCriteria] === "string"){
              return this[currentCriteria].localeCompare(other[currentCriteria]);
           } else {
               return this[currentCriteria] - other[currentCriteria];
           }
        }
    }

    for (let index = 0; index < arrTicketDescription.length; index++) {
       let [destination, price, status ] = arrTicketDescription[index].split("|");
       price = Number(price);
       let currentTicket = new Ticket(destination, price, status);
       arrOfTickets.push(currentTicket);
        
    }
        arrOfTickets.sort( (a,b) => a.compareTo( b, sortingCrietria));
        return arrOfTickets;

}

console.log(tickets(['Philadelphia|94.20|available',
 'New York City|95.99|available',
 'New York City|95.99|sold',
 'Boston|126.20|departed'],
'destination'
));
console.log(`----------------`);

console.log(tickets(['Philadelphia|94.20|available',
 'New York City|95.99|available',
 'New York City|95.99|sold',
 'Boston|126.20|departed'],
'status'
));