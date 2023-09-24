(function stringExtensions() {
    
    String.prototype.ensureStart = function(strParam){
        if( this.startsWith(strParam) == false ){
            return  strParam + this.toString();
        } else {
            return this.toString();
        }
    }

    String.prototype.ensureEnd = function (strParam){
        if( this.endsWith(strParam) == false){
            return this.toString() + strParam;
        } else {
            return this.toString();
        }
    }

     String.prototype.isEmpty = function (){
        return this.length > 0 ? true : false ;
     }

     String.prototype.truncate = function (n){
       if ( n < 4){
         return ".".repeat(n);
       }

       if( this.toString().length <= n){
         return this.toString();
       } else if (this.toString().length > n ) {
          if( this.includes(" ") === true ){
          let lastIndexOfSpace = this.slice(0, n-2).lastIndexOf(" ");
          return this.slice(0, lastIndexOfSpace ) + "...";
          } else {
            return this.slice(0, n-3) + "...";
          }
        }
       }

       String.format  = function (string, ...params){
           let currentString = string;
           params.forEach((el, i) => {
            currentString = currentString.replace(`{${i}}`, el)
           });
           return currentString;

       }


     })()


