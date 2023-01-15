function solve(inputArr) {

    inputArr.sort(twoCriteriaSort);

    function twoCriteriaSort(current, next){
     
        if ( current.length !== next.length){
            return current.length-next.length;
     } else {
        return current.localeCompare(next);
     }
         
    }
    console.log(inputArr.join("\n"));
}

solve(["alpha", "beta", "gamma"]);
console.log(`---------`);
solve(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
console.log(`---------`);
solve(["test", "Deny", "omen", "Default"]);
