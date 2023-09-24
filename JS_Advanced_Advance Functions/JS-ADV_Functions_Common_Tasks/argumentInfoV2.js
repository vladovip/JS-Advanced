 function solve (){
  
    let input = Array.from(arguments);
    let typesObj = {};

    input.forEach( x => 
        console.log(`${typeof x}: ${x}`));

    for ( let x of input ){
         let type = typeof x;
         if( typesObj[type] === undefined){
            typesObj[type] = 0;
         }
         typesObj[type]++;

    };
    
       let sorted =  Object.entries(typesObj).sort( (a,b) =>  b[1]  - a[1]);
       for ( let lineInfo of sorted){
            let [type, num] = lineInfo;
            console.log(`${type} = ${num}`);
       }

 }

 solve('cat', 42, function () { console.log('Hello world!'); });

