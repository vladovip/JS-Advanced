function solve (piesArr, start, end){

    let startIndex = piesArr.indexOf(start);
    let endIndex  = piesArr.indexOf(end);
    let result = piesArr.slice(startIndex, endIndex + 1)
    return result;

}
solve (['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
);


console.log(`-----`);


solve (['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
);
