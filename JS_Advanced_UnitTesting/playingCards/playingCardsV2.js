function playCards (face,suit){
// TO DO , TO BE COMPLETED
 let validCardFacesArr= [ "2", "3", "4", "5", '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
 let validCardSuits= {
    S: '\u2660',
    H: '\u2665',
    D: '\u2666',
    C: '\u2663'
 }

    if (validCardFacesArr.includes(face) === false){
        throw new Error("Error");
    }
    if (validCardSuits.hasOwnProperty(suit) == false){
        throw new Error("Error");
    }
    
  
     return cardObj = {
        face: face,
        suit: validCardSuits[suit],
        toString () {
          return  (this.face) + (this.suit);
        }
     }

}

console.log(playCards('A', 'S').toString());
console.log(playCards('10', 'H').toString());
console.log(playCards('1', 'C').toString());
