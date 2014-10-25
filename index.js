/* jshint node:true */

require('longjohn');
var async = require('async');

// This works (appears in the trace)
// setTimeout(three, 100);

return async.series([
  one, two, three
], function(err) {
  // That's nice
  console.log('end');
});

function one(callback) {
  return setImmediate(callback);
}

function two(callback) {
  return setImmediate(callback);
}

function three(callback) {
  console.log('TRACING IN THREE');
  console.trace();
  return setImmediate(callback);
}
