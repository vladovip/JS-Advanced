function solve() {
    let productElement = document.querySelector("#type-product");
    let descriptionElement = document.querySelector("#description");
    let clientNameElement = document.querySelector("#client-name");
    let phoneElement = document.querySelector("#client-phone");
    let buttonSendElement = document.querySelector("#right form button");
    let sectionElementReceivedOrders = document.getElementById("received-orders");
    let completedOrdersElement = document.querySelector("#completed-orders");
  
    buttonSendElement.addEventListener("click", sendinfo);
  
    let clearButtonElement = document.querySelector(
      "#completed-orders button.clear-btn"
    );
    clearButtonElement.addEventListener("click", clearOrdersList);
  
    function sendinfo(event) {
      event.preventDefault();
  
      let product = productElement.value;
      let description = descriptionElement.value;
      let client = clientNameElement.value;
      let phone = phoneElement.value;
  
      if (description == "" || client == "" || phone == "") {
        return;
      }
  
      productElement.value = "";
      descriptionElement.value = "";
      clientNameElement.value = "";
      phoneElement.value = "";
  
      let divElementCurrentOrder = document.createElement("div");
      divElementCurrentOrder.classList.add("container");
  
      let h2Element = document.createElement("h2");
      h2Element.textContent = `Product type for repair: ${product}`;
  
      let h3Element = document.createElement("h3");
      h3Element.textContent = `Client information: ${client}, ${phone}`;
  
      let h4Element = document.createElement("h4");
      h4Element.textContent = `Description of the problem: ${description}`;
  
      let buttonStartRepair = document.createElement("button");
      buttonStartRepair.textContent = "Start repair";
      buttonStartRepair.classList.add("start-btn");
      buttonStartRepair.addEventListener("click", startRepairFn);
  
      let buttonFinishRepair = document.createElement("button");
      buttonFinishRepair.textContent = "Finish repair";
      buttonFinishRepair.classList.add("finish-btn");
      buttonFinishRepair.disabled = true;
      buttonFinishRepair.addEventListener("click", finishRepairFn);
  
      divElementCurrentOrder.appendChild(h2Element);
      divElementCurrentOrder.appendChild(h3Element);
      divElementCurrentOrder.appendChild(h4Element);
      divElementCurrentOrder.appendChild(buttonStartRepair);
      divElementCurrentOrder.appendChild(buttonFinishRepair);
      sectionElementReceivedOrders.appendChild(divElementCurrentOrder);
    }
  
    function startRepairFn(event) {
      event.preventDefault();
      event.currentTarget.disabled = true;
      event.currentTarget.parentElement.querySelector(
        "button.finish-btn"
      ).disabled = false;
    }
  
    function finishRepairFn(event) {
      event.preventDefault();
      let containerHoldingInfo = event.currentTarget.parentElement;
      event.currentTarget.remove();
      containerHoldingInfo.querySelector("button.start-btn").remove();
      containerHoldingInfo.remove();
      completedOrdersElement.appendChild(containerHoldingInfo);
    }
  
    function clearOrdersList(event) {
      event.preventDefault();
      let allDataOrders = Array.from(
        event.currentTarget.parentElement.getElementsByClassName("container")
      );
      allDataOrders.forEach((element) => element.remove());
    }
  }