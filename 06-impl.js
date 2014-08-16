
function reduce(arr, func, start) {
  _.each(arr, function (e) {
    start = func(e, start);
  })
  return start;
}

function reduceRecursive(arr, func, start) {
  return arr.length == 0 ? start : reduceRecursive(_.rest(arr), func, func(arr[0], start));
}

console.log(reduceRecursive([1,2,3,4], function(acc, x) {
  return acc + x;
}, 0))
console.log(reduce([1,2,3,4], function(acc, x) {
  return acc + x;
}, 0))
