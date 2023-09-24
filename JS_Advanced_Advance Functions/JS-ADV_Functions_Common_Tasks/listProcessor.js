function solve(arr){
    let result = [];

    function add (text){
        return result.push(text);
     }
 
     function remove(text){
         return result = result.filter( x => x !== text );
     }
     
     function print(){
         console.log(result.join(','));
     }
     
    let commandsObj = {
        add,
        remove,
        print,
    };

    for (let element  of arr) {
        let [command, text] = element.split(" ");
         commandsObj[command](text);
    }
}



solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
console.log(`&&&&&&&&&&&&&`);
solve(['add pesho', 'add george', 'add peter', 'remove peter','print'])