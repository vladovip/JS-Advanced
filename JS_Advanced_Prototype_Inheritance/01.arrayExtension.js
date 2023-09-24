(function arrayExtension () {
    
    let arr = [1,2,3];
    
    Array.prototype.last = function (){
        return this[this.length - 1];
    }

     // skip the first n elements
    Array.prototype.skip = function (n){
     return this.slice(n);
    }

    // - returns a new array containing the first n elements from the original array; n is a Number parameter
    Array.prototype.take = function (n){
       return this.slice(0, n)
    }
    
    // •	sum() - returns a sum of all array elements

    Array.prototype.sum = function (){
        return this.reduce((acc, currentValue)  => acc + currentValue, 0);
    }

    // •	average() - returns the average of all array elements
    Array.prototype.average = function (){
     return this.reduce((acc, currentValue)  => acc + currentValue, 0) / this.length;   
    }
   
  })();