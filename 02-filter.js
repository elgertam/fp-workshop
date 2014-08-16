var messages = [
  { message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { message: "Nullam dignissim nulla id ante porta sollicitudin." },
  { message: "Nullam pulvinar dolor nec risus porta tempor." },
  { message: "Fusce in justo id ante iaculis tincidunt non nec mi." },
  { message: "Sed suscipit augue ac nisi malesuada tincidunt." },
  { message: "Nullam et orci fringilla, euismod nibh eget, fermentum arcu." },
  { message: "Suspendisse ut risus tincidunt, sodales ligula quis, luctus lorem." },
  { message: "Proin tincidunt enim ac iaculis ullamcorper." },
  { message: "Sed consequat risus sit amet risus ultrices, a dictum quam venenatis." },
  { message: "Phasellus lobortis leo vitae risus porttitor, eleifend accumsan nunc feugiat." },
  { message: "Praesent at ante tincidunt, bibendum velit aliquet, volutpat lorem." },
  { message: "Sed ut diam vulputate, dignissim tortor ac, venenatis magna." },
  { message: "Cras sit amet odio vitae sem lacinia accumsan eget sollicitudin odio." }
];

var result = [];
for(var i=0; i<messages.length; i++) {
  if(messages[i].message.length < 50) {
    result.push(messages[i].message);
  }
}

function biggerThanFifty(arr){
  filtered = _.filter(arr, function (e) {
    //console.log(e.message);
    return e.message.length < 50;
  })
  
  return _.map(filtered, function(e) {
    return e.message;
  })
}

console.log(result);
console.log(biggerThanFifty(messages));
