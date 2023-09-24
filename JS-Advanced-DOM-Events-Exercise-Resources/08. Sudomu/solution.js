function solve() {
   let buttonsRef = Array.from(document.querySelectorAll("button"));
   let quickCheckBtn = buttonsRef[0];
   let clearBtn = buttonsRef[1];
   let inputCollections = Array.from(document.querySelectorAll("input"));
   let outputParagraph = document.querySelector("div#check p");
   let tableRef = document.querySelector("table");
 
//    console.log(`first element in colllection:`+ inputCollections[0].textContent);

   quickCheckBtn.addEventListener("click", checkFn);

   function checkFn (event) {
    // create matrix for sudomu, to visualize the 2 dimensional matrix:
    let matrixInputs = [ 
        [inputCollections[0].value, inputCollections[1].value, inputCollections[2].value ],
        [inputCollections[3].value, inputCollections[4].value, inputCollections[5].value ],
        [inputCollections[6].value, inputCollections[7].value, inputCollections[8].value ],
       ];
    // this 4 rows below should be adjusted, thus to make function to check for equality between sum of rows and columns:
        let rowSum = matrixInputs.map(r => r.reduce((a, b) => a + b));
        let colSum = matrixInputs.reduce((a, b) => a.map((x, i) => x + b[i]));
        let totalSumRows = rowSum.reduce((acc, curentValue) => acc + curentValue, 0);
        let totalSumColumns = colSum.reduce((acc, curentValue) => acc + curentValue, 0);

      if (totalSumRows === totalSumColumns ){
       tableRef.style.border = "2px solid green";
       outputParagraph.textContent = "You solve it! Congratulations!";
       outputParagraph.style.color = "green";

     } else if (totalSumRows !== totalSumColumns) {
        tableRef.style.border = "2p3x solid red";
        outputParagraph.textContent = "NOP! You are not done yet...";
        outputParagraph.style.color = "red";
     }
   
   }

   clearBtn.addEventListener("click", clearFn);
   function clearFn (event) {
        inputCollections.forEach( element => element.value = "");
        outputParagraph.textContent = "";
        tableRef.style.border = "none";  
   }
   
}



    // This is working solution 100/100:

    // let inputs = document.querySelectorAll('input');
    // const checkBtn = document.querySelectorAll('button')[0];
    // const clear = document.querySelectorAll('button')[1];

    // const table = document.querySelector('table');
    // const checkPar = document.querySelectorAll('#check p')[0];

    // checkBtn.style.cursor = 'pointer';
    // clear.style.cursor = 'pointer';

    // clear.addEventListener('click', reset);
    // checkBtn.addEventListener('click', checkResult);

    // function reset() {
    //     [...inputs].forEach(input => (input.value = ''));
    //     table.style.border = 'none';
    //     checkPar.textContent = '';
    // }

    // function checkResult() {
    //     let matrix = [
    //         [inputs[0].value, inputs[1].value, inputs[2].value],
    //         [inputs[3].value, inputs[4].value, inputs[5].value],
    //         [inputs[6].value, inputs[7].value, inputs[8].value]
    //     ];
    //     isSudomu = true;
    //     for (let i = 1; i < matrix.length; i++) {
    //         let row = matrix[i];
    //         let col = matrix.map(row => row[i]);
    //         if (col.length != [...new Set(col)].length || row.length != [...new Set(row)].length) {
    //             isSudomu = false;
    //             break;
    //         }
    //     }
    //     if (isSudomu) {
    //         table.style.border = '2px solid green';
    //         checkPar.style.color = 'green';
    //         checkPar.textContent = 'You solve it! Congratulations!';
    //     } else {
    //         table.style.border = '2px solid red';
    //         checkPar.style.color = 'red';
    //         checkPar.textContent = 'NOP! You are not done yet...';
    //     }
    // }