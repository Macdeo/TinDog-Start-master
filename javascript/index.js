var a = 3;
var b = 8;

var c = a;
a = b;
b = c;

console.log("a is " + a);
console.log("b is " + b);


var names = 'angELa';
var capName = names.slice(0, 1)
capName = capName.toUpperCase();
var reNames = names.slice(1, 6)
reNames = reNames.toLowerCase();
console.log('Hello ' + capName + reNames);

var dogAge = 7;
var humanAge = (dogAge - 2) * 4 + 21;

console.log('This is your dog age: ' + humanAge);




calAge(56);






function calAge(age) {
    var totalweeks = 52 * 90;
    var weeksLeft = totalweeks - (age * 52);
    var totaldays = 365 * 90;
    var daysLeft = totaldays - (age * 365);
    var totalmonths = 12 * 90;
    var monthsLeft = totalmonths - (age * 12);
    console.log('You have ' + daysLeft + ' days, ' + weeksLeft + ' weeks, ' + monthsLeft + ' months left');
}    


function bmi(weight, height){
    var theheight = height*height;
    bmiCal = Math.round(weight/theheight);
    console.log(bmiCal);
}

bmi(65, 1.8);

var output = [];
var count = 1;

function fizzBuzz(){
    output.push(count);
    count++;
    console.log(output);

    return output;
}



fizzBuzz();