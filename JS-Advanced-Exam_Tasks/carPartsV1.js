function solve() {
    let modelEl = document.getElementById("car-model")
    let yearEl = document.getElementById("car-year")
    let partNameEl = document.getElementById("part-name")
    let partNumberEl = document.getElementById("part-number")
    let partConditionEl = document.getElementById("condition")
    let nextBtnEl = document.getElementById("next-btn")
    let infoListUl = document.querySelector(".info-list")
    let confirmListUl = document.querySelector(".confirm-list")
    let completeImgEl = document.getElementById("complete-img")
    let completeTextEl = document.getElementById("complete-text")


    nextBtnEl.addEventListener("click", onNext)
    function onNext(e) {
            e.preventDefault();
            if (modelEl.value == "" ||
                    yearEl.value == "" ||
                    yearEl.value < 1980 ||
                    yearEl.value > 2023 ||
                    partNameEl.value == "" ||
                    partNumberEl.value == "" ||
                    partConditionEl.value == "") {
                    return;
            }

            completeImgEl.style.visibility = "none"
            completeTextEl.textContent = ""


            let li = document.createElement("li")
            li.setAttribute("class", "part-content")

            let article = document.createElement("article")

            let p1 = document.createElement("p")
            p1.textContent = `Car Model: ${modelEl.value}`

            let p2 = document.createElement("p")
            p2.textContent = `Car Year: ${yearEl.value}`

            let p3 = document.createElement("p")
            p3.textContent = `Part Name: ${partNameEl.value}`

            let p4 = document.createElement("p")
            p4.textContent = `Part Number: ${partNumberEl.value}`

            let p5 = document.createElement("p")
            p5.textContent = `Condition: ${partConditionEl.value}`

            let editBtn = document.createElement("button")
            editBtn.setAttribute("class", "edit-btn")
            editBtn.textContent = "Edit"


            let continueBtn = document.createElement("button")
            continueBtn.setAttribute("class", "continue-btn")
            continueBtn.textContent = "Continue"

            article.appendChild(p1)
            article.appendChild(p2)
            article.appendChild(p3)
            article.appendChild(p4)
            article.appendChild(p5)

            li.appendChild(article)
            li.appendChild(editBtn)
            li.appendChild(continueBtn)

            infoListUl.appendChild(li)

            let editModel = modelEl.value
            let editYear = yearEl.value
            let editPartName = partNameEl.value
            let editPartNumber = partNumberEl.value
            let editCondition = partConditionEl.value

            modelEl.value = ""
            yearEl.value = ""
            partNameEl.value = ""
            partNumberEl.value = ""
            partConditionEl.value = ""

            nextBtnEl.disabled = true

            editBtn.addEventListener("click", onEdit)
            function onEdit() {
                    modelEl.value = editModel
                    yearEl.value = editYear
                    partNameEl.value = editPartName
                    partNumberEl.value = editPartNumber
                    partConditionEl.value = editCondition
                    infoListUl.removeChild(li)
                    nextBtnEl.disabled = false
            }

            continueBtn.addEventListener("click", onContinue)
            function onContinue() {

                    let confirmBtn = document.createElement("button")
                    confirmBtn.setAttribute("class", "confirm-btn")
                    confirmBtn.textContent = "Confirm"

                    let cancelBtn = document.createElement("button")
                    cancelBtn.setAttribute("class", "cancel-btn")
                    cancelBtn.textContent = "Cancel"

                    li.removeChild(editBtn)
                    li.removeChild(continueBtn)

                    li.appendChild(confirmBtn)
                    li.appendChild(cancelBtn)

                    confirmListUl.appendChild(li)


                    confirmBtn.addEventListener("click", onConfirm)
                    function onConfirm() {
                            confirmListUl.removeChild(li)
                            completeImgEl.style.visibility = "visible"
                            completeTextEl.textContent = "Part is Ordered!"
                            nextBtnEl.disabled = false
                    }

                    cancelBtn.addEventListener("click", onCancel)
                    function onCancel(){
                            confirmListUl.removeChild(li)
                            nextBtnEl.disabled = false
                    }
            }

    }
}
