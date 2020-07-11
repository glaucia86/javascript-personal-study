function testTruthy(val) {
    return val ? console.log('true') : console.log('false');
}

testTruthy(true);
testTruthy(false);
testTruthy(new Boolean(false));

testTruthy('');
testTruthy('Glaucia');
testTruthy(new String(''));

testTruthy(1);
testTruthy(-1);
testTruthy(NaN);
testTruthy(new Number(NaN));

testTruthy({});

var obj = { name: 'Glaucia' };
testTruthy(obj);
testTruthy(obj.name);
testTruthy(obj.age);