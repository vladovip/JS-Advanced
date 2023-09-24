function cars (inputArray) {
    let collectionsObj = {};
    let commandsCollections = {
        create,
        set,
        print,
    }

    // 'create c1',
    // 'create c2 inherit c1',
    function create (name, inherits, parentName){
    collectionsObj[name] = inherits ? Object.create(collectionsObj[parentName]) : collectionsObj[name] = {};
    }
    // 'set c1 color red',
    function set (name,key,value){
        collectionsObj[name][key] = value;
    };

    //  'print c1',
    function print(name){
        let objectsResult = [];
        for ( let objectAsKey in collectionsObj[name] ){
            objectsResult.push(`${objectAsKey}:${collectionsObj[name][objectAsKey]}`);
        }
        console.log(objectsResult.join(','));
    }

    inputArray.forEach(element => {
        let [command, name, key, value] = element.split(" ");
        commandsCollections[command](name,key,value);
    });

}

cars([
    'create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'
  ]);