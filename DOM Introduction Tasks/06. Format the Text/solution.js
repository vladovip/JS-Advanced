function solve() {

  let inputTextArea = document.getElementById('input').value;
  // console.log(inputTextArea);
  let outputElement = document.getElementById('output');
  let sentences = inputTextArea.split(".").filter( s => s.length != 0);
  //  console.log(sentences);

  while (sentences.length > 0 ){
    let textForEachParagraph = sentences.splice(0,3).join(". ") + '.';
    let paragraph = document.createElement("p");
    paragraph.textContent = textForEachParagraph;
    outputElement.appendChild(paragraph);
  }

}