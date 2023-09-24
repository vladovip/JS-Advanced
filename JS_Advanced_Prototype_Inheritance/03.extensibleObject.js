function extendObject() {
  let parentObject = {};
  let childObject = Object.create(parentObject);

  childObject.extend = function (templateObj) {
    let templateArr = Object.entries(templateObj);
    for (let [key, value] of templateArr) {
      if (typeof value == "function") {
        parentObject[key] = value;
      } else {
        childObject[key] = value;
      }
    }
  };
  return childObject;
}


// Second Option: 

// function extendObject() {
//     let parentObject = {};
//     let childObject = Object.create(parentObject);
  
//     childObject.extend = function (templateObj) {
//       let templateArr = Object.entries(templateObj);
//       for (let [key, value] of templateArr) {
//         if (typeof value == "function") {
//         Object.getPrototypeOf(childObject)[key] = value; // this will return parentObject, and it will take property which is a function.
//         } else {
//           childObject[key] = value;
//         }
//       }
//     };
//     return childObject;
//   }
