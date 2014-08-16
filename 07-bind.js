
function log(type, message) {
  console.log('[' + type + '] ' + message);
}

// create `info` and `error` functions

var info = _.bind(log, null, 'info');
var error = _.bind(log, null, 'error');

info('some info');
error('an error!');
