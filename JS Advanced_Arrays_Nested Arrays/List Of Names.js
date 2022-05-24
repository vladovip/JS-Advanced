function listNames(inputArr) {
  inputArr.sort((a, b) => a.localeCompare(b));
  //   console.log(inputArr);

  for (let index = 0; index < inputArr.length; index++) {
    console.log(`${index + 1}.${inputArr[index]}`);
  }
}

listNames(["John", "Bob", "Christina", "Ema"]);
