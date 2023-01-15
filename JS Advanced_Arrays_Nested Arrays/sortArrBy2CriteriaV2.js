function solve(arr) {
  
  function sort2Criteria(a, b) {
    if (a.length !== b.length) {
      return a.length - b.length;
    } else {
      return  a.localeCompare(b);
    }
  }
  arr.sort(sort2Criteria);
  console.log(arr.join("\n"));
  
}

solve(["alpha", "beta", "gamma"]);
solve(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
solve(["test", "Deny", "omen", "Default"]);

/*•	
An array can be sorted by passing a comparing function to the Array.sort() function.
•	Creating a comparing function by 2 criteria can be achieved by first comparing by the main criteria, 
if the 2 items are different (the result of the compare is not 0) - 
return the result as the result of the comparing function. 
If the two items are the same by the main criteria (the result of the comparison is 0), then
we need to compare by the second criteria and the result of that comparison 
is the result of the comparing function.
•	You can check more about Array.sort() */

