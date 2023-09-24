function solve() {

  let [generateBtn, buyBtn] = Array.from(document.querySelectorAll("button"));
  generateBtn.addEventListener("click", generateFn);
  buyBtn.addEventListener("click", buyFn);

  function generateFn(event) {
    let input = JSON.parse(document.querySelector("textarea").value);
    input.forEach( element => {
      let tr = document.createElement("tr");
      let td1 = document.createElement("td");
      let img = document.createElement("img");
      img.src = element.img;
      td1.appendChild(img);
      tr.appendChild(td1);
      let td2 = document.createElement("td");
      let paragraph = document.createElement("p");
      paragraph.textContent = element.name;
      td2.appendChild(paragraph);
      tr.appendChild(td2);
      let td3 = document.createElement("td");
      let paragraph2 = document.createElement("p");
      paragraph2.textContent = Number(element.price);
      td3.appendChild(paragraph2);
      tr.appendChild(td3);
      let td4 = document.createElement("td");
      let paragraph3 = document.createElement("p");
      paragraph3.textContent = Number(element.decFactor);
      td4.appendChild(paragraph3);
      tr.appendChild(td4);
      let td5 = document.createElement("td");
      let inputTag = document.createElement("input");
      inputTag.type = "checkbox";
      td5.appendChild(inputTag);
      tr.appendChild(td5);
      document.querySelector("tbody").appendChild(tr);
    });
  }

  function buyFn(event) {
    let checkboxes = Array.from(document.querySelectorAll("tbody input")).filter( el => el.checked);
    let boughtItems = [];
    let totalPrice = 0;
    let decorationFactor = 0;

    checkboxes.forEach(el => {
      let parent = el.parentElement.parentElement;
      let dataFurniture = Array.from(parent.querySelectorAll("p"));
      boughtItems.push(dataFurniture[0].textContent);
      totalPrice += Number(dataFurniture[1].textContent);
      decorationFactor += Number(dataFurniture[2].textContent);
      });

      let outputResult = document.querySelectorAll("textarea")[1];
      outputResult.textContent += `Bought furniture: ${boughtItems.join(", ")}\r\n`;
      outputResult.textContent += `Total price: ${totalPrice.toFixed(2)}\r\n`;
      outputResult.textContent += `Average decoration factor: ${decorationFactor / boughtItems.length}`;
  }


}
