

var age = 18;
var age2 = 100;

if (x > y) {
console.log("Allowed");
}

else if(x < y){
    console.log('Not Allowed')
}

else {
    console.log('pending')
}

var loop2 = 9;
var loop3 = (loop2 < 10) ? "Welcome" : "Hello There";

console.log(loop3)

for (var i = 0; i < 6; i ++){
    if(i == 3) {
        console.log("Value of 4");
        break;
    }
    console.log(i);
} // ans: 0,1,3

for (var s = 0; s < 7; s ++){
    if(s == 3) {
        console.log("hello");
        continue;
    }
    console.log(s);
}

let r = 4;

switch (r) {
    case 4:
        console.log("Hi")
        break
    case 8:
        console.log("Hello")
        break
    case 12:
        console.log("Welcome")
        break
    default:
        console.log("default value")
}

//Array Loop

var loopNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (var i = 0; i < loopNum.length; i++){
    console.log(loopNum)
}
while (i < 15) {
    console.log(i)
    i++
}
