function wordsUpperCase (text){

    let result = text.toUpperCase()
    .split(/[\W]+/)
    .filter(word => word.length > 0)
    .join(", ");

      console.log(result);
    }
   

wordsUpperCase ( 'Hi, how are you?' )
wordsUpperCase ( 'hello')


// SECOND OPTION: 
// function solve(text) {
//     let result = text.toUpperCase()
//       .match(/\w+/g)
//       .join(', ');
    
//     console.log(result);
//   }
// solve ( 'Hi, how are you?' )
// solve ( 'hello')
