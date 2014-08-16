function multiplyArray(arr, n) {
  var res = [];
  for(var i=0; i<arr.length; i++) {
    res.push(arr[i] * n);
  }
  return res;
}

function multiplyArrayFunc(arr, n) {
  return _.map(arr, function (e) {
    return e * n;
  })
}

console.log(multiplyArray([1,2,3], 2));
console.log(multiplyArrayFunc([1,2,3], 2));
