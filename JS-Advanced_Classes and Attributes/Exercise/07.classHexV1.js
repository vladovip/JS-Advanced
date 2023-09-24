class Hex {
    constructor ( param ){
       this.value = param;
    }

    valueOf(){
        return this.value;
    };

    toString(){
        return   "0x" + this.value.toString(16).toUpperCase();
    };

    //•	plus({number}) This function should add a number or Hex object and return a new Hex object.

    plus (objValue){
         let sumResult = this.value + Number(objValue.valueOf());
         return new Hex(sumResult);
    }
 // •	minus({number}) This function should subtract a number or Hex object and return a new Hex object.
    minus(objValue){
        let result = this.value - Number(objValue.valueOf());
        return new Hex(result);
    }

    // •	parse({string}) Create a parse class method that can parse Hexadecimal numbers and convert them to standard decimal numbers.

    parse (hexaDecimalNum){
           return parseInt(hexaDecimalNum,16);
    }
}