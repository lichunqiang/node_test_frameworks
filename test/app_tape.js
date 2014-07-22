var test = require('tape');


test('timing teset', function(t){
  t.plan(2); //测试次数，如果未定义并且t.end未调用则测试会被挂起

  t.equal(typeof Date.now, 'object', 'this is description');

  t.equal(typeof Date.now, 'function'); //msg is default of assert type

  t.end();

});

test('t.fail', function(t){
  t.fail('this is fail msg');
  t.end();
});

test('t.pass', function(t){
  t.pass('this is pass msg');
  t.end();
});

test('t.ok', function(t){
  t.plan(2);
  t.ok(false, 'test the value is ture');
  t.ok(1===1, 'test the value is ture');
});

test('t.error', function(t){
  var err = new Error('test');
  t.error(err);

  t.end();
});

//sub test

test('sub.test', function(t){

    t.ok(true, 'this is parent test');

    t.test('sub_test', function(st){ // 只有当父t测试结束时，子测试的callback才会被调用
      st.ok(true, 'this is children test');
      st.end();
    });

    t.end();
});