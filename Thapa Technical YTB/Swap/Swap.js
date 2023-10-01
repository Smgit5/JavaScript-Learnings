// Swap two numbers WITHOUT using third variable

var a = 100;
var b = 40;
console.log("Before swapping: "+"a = "+a+", b = "+b);
// Swapping
a = a + b; // 100 + 40 = 140
b = a - b; // 140 - 40 = 100
a = a - b; // 140 - 100 = 40
console.log("After swapping: "+"a = "+a+", b = "+b);