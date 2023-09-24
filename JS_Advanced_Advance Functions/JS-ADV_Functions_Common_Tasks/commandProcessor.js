function commandProcessed (){
   let state = "";

   function append (str){
    state += str;
   }

   function removeStart(n){
    state = state.slice(n,);
   }

   function removeEnd(n) {
     state = state.slice(0,-n);
    }
 
   function print(){
    console.log(state)
   }

   return {
     append,
     removeStart,
     removeEnd,
     print,
   }

}



let firstZeroTest = commandProcessed ();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();



// append(string) - append the given string at the end of the internal string
// removeStart(n) - remove the first n characters from the string, n is an integer
// removeEnd(n) - remove the last n characters from the string, n is an integer
// print - print the stored string on the console
