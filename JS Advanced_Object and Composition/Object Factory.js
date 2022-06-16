 
  function factory (paramLibrary, paramOrders) {

     let  result = [];

     for (let order of paramOrders) {
         let object = {};
         let template = order.template;
         for (let properties in template) {
            object[properties] = template[properties];
         }
          
          let parts = order.parts;
          for (let element of parts) {
              object[element] = paramLibrary[element];
            //   console.log(paramLibrary[element]);
          }
        
        result.push(object);
     }

     return result;
} 


// Second Option:
// function factory(library, orders) {
//     const result = [];

//     for (let order of orders) {
//         const current = Object.assign({}, order.template);
//         for (let part of order.parts) {
//             current[part] = library[part];
//         }
//         result.push(current);
//     }

//     return result;
// }






const library = {
    print: function () {
      console.log(`${this.name} is printing a page`);
    },
    scan: function () {
      console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
      console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
  };


  const orders = [
    {
      template: { name: 'ACME Printer'},
      parts: ['print']      
    },
    {
      template: { name: 'Initech Scanner'},
      parts: ['scan']      
    },
    {
      template: { name: 'ComTron Copier'},
      parts: ['scan', 'print']      
    },
    {
      template: { name: 'BoomBox Stereo'},
      parts: ['play']      
    }
  ];

  const products = factory(library, orders);
  console.log(products);
  
