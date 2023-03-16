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


// function bmi(weight, height){
//     var theheight = height*height;
//     bmiCal = Math.round(weight/theheight);
//     console.log(bmiCal);
// }

// bmi(65, 1.8);

// var output = [];
// var count = 1;

// function fizzBuzz(){
//     output.push(count);
//     count++;
//     console.log(output);

//     return output;
// }



// fizzBuzz();

// var noOfBottles = 99;

// function lyrics(){
//     while (noOfBottles > 0){
//     console.log(noOfBottles + ' bottles of beer on the wall, ' + noOfBottles + ' bottles of beer.');
//     noOfBottles--;
//     if (noOfBottles === 0){
//           console.log('Take one down and pass it around, no more bottles of beer on the wall.');
//     } else {
//             console.log('Take one down and pass it around, ' + noOfBottles + ' bottles of beer on the wall.');
//      }
        
// }

// console.log('No more bottles of beer on the wall, no more bottles of beer.');
// console.log('Go to the store and buy some more, 99 bottles of beer on the wall.');
//     return noOfBottles;
// }

// lyrics();


function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
        var noOfItem = [];

        if ( n <= 1){
            noOfItem = [0]; 
        } else if ( n == 2){
            noOfItem = [0, 1];
        } else{
            noOfItem = [0, 1];
            for(var i = 2; i < n; i++ ){
                var additem = noOfItem[noOfItem.length - 2] + noOfItem[noOfItem.length - 1];
                noOfItem.push(additem);
            }
        }
        
        return noOfItem;
        
        
        //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
    }
    
console.log(fibonacciGenerator(10));