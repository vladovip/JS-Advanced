function requestValidator(validatorObj){
let validMethods = ["GET", "POST", "DELETE", "CONNECT"];
let validVersions = [ 'HTTP/0.9', 'HTTP/1.0' , 'HTTP/1.1', 'HTTP/2.0' ];
let uriPattern = /^[\w.]+$/;
// throw an Error message "Invalid request header: Invalid {Method/URI/Version/Message}". 
// method - can be GET, POST, DELETE or CONNECT

if (!(validatorObj.method && validMethods.includes(validatorObj.method )) ){
   throw new Error("Invalid request header: Invalid Method");
}

if (!(validatorObj.uri && ( validatorObj.uri == "*" || uriPattern.test(validatorObj.uri)))){
    throw new Error("Invalid request header: Invalid URI");
}

if (!(validatorObj.version && validVersions.includes(validatorObj.version))){
    throw new Error("Invalid request header: Invalid Version");
}

let messagePattern = /^[^<>\\&'"]*$/;

if (!( validatorObj.hasOwnProperty("message") && (validatorObj.message =="" || messagePattern.test(validatorObj.message)))){
    throw new Error("Invalid request header: Invalid Message")
}

return validatorObj;

}





    
