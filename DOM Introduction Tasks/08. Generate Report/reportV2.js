function generateReport() {
    
    let tableHeadArr = document.querySelectorAll('thead tr th input');
    // console.log(columnCheckedArr);
    let tableHeadCheckedArr = Array.from(tableHeadArr);
    // console.log(columnChecked);
    let checkedBox = [];
    for (let index = 0; index < tableHeadCheckedArr.length; index++) {
        if ( tableHeadCheckedArr[index].checked == true){
            checkedBox.push(index);
        }    
    }
    // console.log(checkedBox);
    let resultTotal = [];
    let listofAllDataArr = Array.from(document.querySelectorAll('tbody tr'));
    
    for (let index = 0; index < listofAllDataArr.length; index++) {
         let currentRow = listofAllDataArr[index].children;
         currentSelectedItems = {};
        for (let j = 0; j < currentRow.length; j++) { 
            if( checkedBox.includes(j)  == true ){
                let objKeyName = tableHeadCheckedArr[j].name;
                currentSelectedItems[objKeyName] = currentRow[j].textContent;
            }
            
        }
        resultTotal.push(currentSelectedItems);
    }
    
    let jsonFinalStr = JSON.stringify(resultTotal);
    let desiredOutput = document.getElementById('output');
    desiredOutput.value = jsonFinalStr;


}