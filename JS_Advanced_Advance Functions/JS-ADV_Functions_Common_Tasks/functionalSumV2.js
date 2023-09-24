function add(num) {

  let inner = function (x) {
    num += x;
    return inner;
  };

  inner.toString = function () {
    return num;
  };

  return inner;
}


console.log(add(1).toString());
console.log(add(1)(6)(-3).toString());
