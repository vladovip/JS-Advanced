function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  let rows = Array.from(document.querySelectorAll("tbody tr"));
  let inputText = document.getElementById("searchField");

  function onClick() {
    for (let row of rows) {
      row.classList.remove("select");
      if ( row.innerHTML.includes(inputText.value) &&  inputText.value != "") {
        row.classList.add("select");
      }
    }
    inputText.value = "";
  }
}
