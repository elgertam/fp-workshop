var data = [{ age: 15 }, { age: 18 }, { age: 30 }];

var ages = [];
for(var i=0; i<data.length; i++) {
  ages.push(data[i].age);
}

var validated = true;
for(var i=0; i<ages.length; i++) {
  if(ages[i] <= 13) {
    validated = false;
  }
}

function aboveAge(arr, age) {
  return _.every(_.pluck(arr, 'age'), function (e) {
    return e > age;
  })
}

console.log(validated);
console.log(aboveAge(data, 13));

