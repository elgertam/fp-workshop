var sales = {
  joe: 34,
  bill: 12,
  alice: 22,
  james: 23,
  becca: 45,
  emily: 15
};

var i = 0;
var avg = 0;
for(var k in sales) {
  avg += sales[k];
  i++;
}
avg /= i;

function averageSales(obj) {
  return _.reduce(_.values(obj), function (acc, val) {
    return acc + val;
  }, 0)/(_.values(obj).length)
}

function doubleSales(obj) {
  _.each(_.keys(obj), function (e) {
    obj[e] = obj[e] * 2;
  })
  return obj;
}

function doubleSales2(obj) {
  return _.object(_.keys(obj), _.map(_.values(obj), function (e) { return e * 2}))
}

console.log(avg);
console.log(averageSales(sales));
console.log(doubleSales2(sales));
console.log(doubleSales(sales));
