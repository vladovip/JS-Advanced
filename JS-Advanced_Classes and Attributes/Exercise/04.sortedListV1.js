class List {
// Implement a class List, which keeps a list of numbers, sorted in ascending order
constructor (){
    this.collectionElements = [];
    this.size = this.collectionElements.length;
}

add(element) {
this.collectionElements.push(element);
this.size = this.collectionElements.length;
this.collectionElements.sort((a,b)=> a-b);
}

remove(index) {
    if ( index >= this.collectionElements.length || index < 0 ){
        throw new Error("The index is invalid. It should be an integer between 0 and list's length.");  
    } else {
        this.collectionElements.splice(index,1);
        this.size = this.collectionElements.length;
        this.collectionElements.sort((a,b)=> a-b);
    }
}
get (index){
  if ( index <0 || index>= this.collectionElements.length ){
     throw new RangeError("Index out of bounds");
  } else {
    this.collectionElements.sort((a,b)=> a-b);
    return this.collectionElements[index];
  }
}

}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
