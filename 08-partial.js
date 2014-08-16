var _arg = {};
function bind2(func, context /* args... */) {
  args = Array.prototype.slice.call(arguments, 2);
  
  return function (arg) {
    full_args = _.map(args, function(e) {
      if (e === _arg) {
        return arg;
      } else {
        return e;
      }
    })
    
    return func.apply(context, full_args);
  }
}

function nums(x, y, z) {
  return [x, y, z];
}

var n = bind2(nums, null, 1, _arg, 3, 4);
console.log(n(2));
