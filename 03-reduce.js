var strings = ["lorem", "ipsum", "lorem", "amet", "amet", "amet"];

var counts = {};
for(var i=0; i<strings.length; i++) {
  var str = strings[i];
  counts[str] = str in counts ? counts[str] + 1 : 1;
}

function stringCount(arr) {
  return _.reduce(arr, function (acc, val) {
    acc[val] = val in acc ? acc[val] + 1 : 1;
    return acc;
  }, {});
}

console.log(counts);
console.log(stringCount(strings));
