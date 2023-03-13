var a = 3;
var b = 8;

var c = a;
a = b;
b = c;

console.log("a is " + a);
console.log("b is " + b);


var names = 'angELa';
var capName = names.slice(0,1)
capName = capName.toUpperCase();
var reNames = names.slice(1,6)
reNames = reNames.toLowerCase();
console.log('Hello ' + capName + reNames );

var dogAge = 7;
var humanAge = (dogAge - 2) * 4 + 21;

console.log('This is your dog age: ' + humanAge);