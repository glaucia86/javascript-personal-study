var num = 0;
console.log('O valor de num é...: ' + num); //0

num = num + 2;
console.log('O valor de num é...: ' + num); //2

num = num * 3;
console.log('O valor de num é...: ' + num);

num = num / 2;
console.log('O valor de num é...: ' + num);

num++;
num--;

console.log('O novo valor de num é...: ' + num);
console.log('O mod de nuum 2 é...: ' + num % 2);

num += 1;
num -= 2;
num *= 3;
num /= 2;
num %= 3;

console.log('num == 1 : ' + (num == 1));
console.log('num === 1 : ' + (num === 1));
console.log('num != 1 : ' + (num != 1));
console.log('num > 1 : ' + (num > 1));
console.log('num < 1 : ' + (num < 1));
console.log('num >= 1 : ' + (num >= 1));
console.log('num <= 1 : ' + (num <= 1));

console.log('true && false : ' + (true && false));
console.log('true || false : ' + (true || false));
console.log('!true : ' + !true);

console.log('5 & 1:', 5 & 1); 
console.log('5 | 1:', 5 | 1); 
console.log('~ 5:', ~5);
console.log('5 ^ 1:', 5 ^ 1); 
console.log('5 << 1:', 5 << 1);
console.log('5 >> 1:', 5 >> 1);

console.log('typeof num:', typeof num);
console.log('typeof Livro:', typeof 'Livro');
console.log('typeof true:', typeof true);
console.log('typeof [1,2,3]:', typeof [1, 2, 3]);
console.log('typeof { name: Glaucia }:', typeof { name: 'Glaucia' });

var myObj = { name: 'Glaucia', age: 33 };
delete myObj.age;
console.log(myObj);