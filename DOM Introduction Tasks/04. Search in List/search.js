function search() {
   let listElementsRef  = document.querySelectorAll('ul#towns li');
   let resultElementRef = document.getElementById('result');
   let searchedText = document.getElementById('searchText').value ; 
   let counter = 0;
   
//    for (let element of listElementsRef) {
//       element.style.fontWeight='normal';
//       element.style.textDecorationLine='none';
// }

   for (let element of listElementsRef) {
       let text = element.textContent;
      //  console.log(text);
      if (text.match(searchedText) != null){
         counter++;
         element.style.fontWeight='bold';
         element.style.textDecorationLine='underline';
      } else {
         element.style.fontWeight='normal';
         element.style.textDecorationLine='none';
      }
   }
   resultElementRef.textContent = `${counter} matches found`
}
