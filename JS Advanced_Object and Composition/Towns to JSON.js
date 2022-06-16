function solve (inputArr){

let resultArr = [];

class Town {
    constructor ( townName, latitude, longitude ){
         this.Town = townName;
         this.Latitude = Number(latitude);
         this.Longitude = Number(longitude);
    }
}

for (let index = 1; index < inputArr.length; index++) {
  let tempArr = inputArr[index].split("|").map(el=> el.trim()).splice(1,3);
  //   let currentArr = tempArr.slice(1,-1);
  // console.log(tempArr);
  let nameOfTown = tempArr[0];
  let lat = (+tempArr[1]).toFixed(2);
  let long = (+tempArr[2]).toFixed(2);
 
  let town = new Town (nameOfTown, lat, long);
  resultArr.push(town);
}

 return  JSON.stringify(resultArr); 

}



solve (['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
);


console.log(`---------`);


solve (['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']
);
