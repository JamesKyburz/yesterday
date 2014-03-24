var test = require('tape');
test('setdate(0) test', function(t) {
  t.plan(3);
  var d = new Date(2014, 2, 1); // 1 march 2014
  d.setDate(0);
  // assert date is now 28 feb 2014
  t.equal(2014, d.getFullYear());
  t.equal(1, d.getMonth());
  t.equal(28, d.getDate());
});
