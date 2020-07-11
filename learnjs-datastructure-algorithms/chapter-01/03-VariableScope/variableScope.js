// @ts-nocheck
/* eslint-disable */

var myVariable = 'global';
myOtherVariable = 'global';

function myFunction() {
    var myVariable = 'local';
    return myVariable;
}

function myOtherFunction() {
    myOtherVariable = 'local';
    return myOtherVariable;
}

console.log(myVariable); //global
console.log(myFunction()); //local

console.log(myOtherVariable); //global
console.log(myOtherFunction()); //local
console.log(myOtherVariable); //local
