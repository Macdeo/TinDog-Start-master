var a = 3;
var b = 8;

var c = a;
a = b;
b = c;

console.log("a is " + a);
console.log("b is " + b);


var names = 'angela';
var capName = names.slice(0,1)
capName = capName.toUpperCase();
var reNames = names.slice(1,6)
console.log('Hello ' + capName + reNames );