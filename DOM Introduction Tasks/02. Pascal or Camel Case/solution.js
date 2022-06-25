function solve() {
  let textRefForTransform = document.getElementById("text").value;
  let textConvention = document.getElementById("naming-convention").value;
  let resultRef = document.getElementById("result");


  // "this is an example", "Camel Case"   -> thisIsAnExample
  // "secOND eXamPLE", "Pascal Case"      ->  SecondExample
  let words = textRefForTransform.split(" ");

  if (textConvention == "Camel Case") {
    
    for (let index = 0; index < words.length; index++) {
      words[index] = words[index].toLowerCase();
      if (index != 0) {
        words[index] = words[index].charAt(0).toUpperCase() + words[index].substring(1);
      }
    }
    resultRef.textContent = words.join("");

  } else if (textConvention == "Pascal Case") {

    for (let index = 0; index < words.length; index++) {
      words[index] = words[index].toLowerCase();
      words[index] = words[index].charAt(0).toUpperCase() + words[index].substring(1);
    }
    resultRef.textContent = words.join("");

  } else {
    resultRef.textContent = "Error!";
  }

  // console.log(words);
}
