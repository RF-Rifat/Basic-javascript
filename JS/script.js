var num10 = 12.4554;
var num11 = 15;

num10 = parseFloat(num10);

var total = num10 + num11;

console.log(total);

let num12 = 12.8788;
let num13 = 15;

num12 = parseInt | (num12);

let num14 = num12 + num13;
console.log(num14)

var m = 15;
var n = 20;

m = "" + m;

console.log(typeof m)

var num1 = 20;
var num2 = 50;
var num3 = num1 - num2;
var sum = Math.abs(num3);
// Math.absolute
console.log(sum)

var num4 = 10;
var num5 = .6;

var sum2 = Math.round(num5);
// Math.round 
console.log(sum2)

var num6 = 10;
var num7 = .0006;

var sum2 = Math.ceil(num7);
// Math.ceil 
console.log(sum2)

var num8 = 10;
var num9 = .0006;

var sum2 = Math.floor(num9);
// Math.floor 
console.log(sum2)


var num10 = 10;
var num11 = 6;

var sum2 = Math.random(num11);
// Math.random 
console.log(sum2)

var lottery = Math.random() * 10;
console.log(lottery)


var Array = [7,8,"arif",5,"tanvir",9,3]

Array[1] = 6; // this will change the value of 8 = 6
console.log(Array);

Array.push(10) // push add a new value to array in last
console.log(Array);

Array.pop() // pop remove the last array value
console.log(Array);

Array.shift() // shift remove the first array value
console.log(Array);

Array.unshift(12) // unshift add a new value to array 
console.log(Array);

console.log(Array.slice(1, 3)) 

var m = [12, 28, 54, 15, 54]
m.splice(0, 2, "new","second")
console.log(m);

