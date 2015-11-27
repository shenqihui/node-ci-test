var tape = require('tape');
tape('demo success test', function (t) {
  t.equal(['a'].length, 1);
  t.end();
});