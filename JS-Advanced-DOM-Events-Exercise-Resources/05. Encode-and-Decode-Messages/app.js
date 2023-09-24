function encodeAndDecodeMessages() {
  let encodeTextArea = document.querySelectorAll("textarea")[0];
  let decodeTextArea = document.querySelectorAll("textarea")[1];
  let encodeButton = document.querySelectorAll("button")[0];
  let decodeButton = document.querySelectorAll("button")[1];

  encodeButton.addEventListener("click", encodeFn);
  decodeButton.addEventListener("click", decodeFn);

  function encodeFn(event) {
    let encodeMessage = "";
    let inputText = encodeTextArea.value;
    for (let index = 0; index < inputText.length; index++) {
      encodeMessage += String.fromCharCode(inputText[index].charCodeAt(0) + 1);
    }
    decodeTextArea.value = encodeMessage;
    encodeTextArea.value = "";
  }

  function decodeFn(event) {
    let decodedMessage = "";
    let inputText = decodeTextArea.value;
    for (let index = 0; index < inputText.length; index++) {
        decodedMessage += String.fromCharCode(inputText[index].charCodeAt(0) - 1);
    }
    decodeTextArea.value = decodedMessage;
  }
}
