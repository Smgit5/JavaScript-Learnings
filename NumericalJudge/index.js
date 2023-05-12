// with user input (line 3 to 20)

let a = prompt("Enter the 1st value", "");
let val1 = parseFloat(a);
console.log("val1 = "+val1);
let b = prompt("Enter the 2nd value", "");
let val2 = parseFloat(b);
console.log("val2 = "+val2);
if(val1>val2){
    alert(val1 + " is greater than " + val2);
    console.log(val1 + " is greater than " + val2);
}
else if(val1<val2){
    alert(val1 + " is lesser than " + val2);
    console.log(val1 + " is lesser than " + val2);
}
else{
    alert(val1 + " is equal to " + val2);
    console.log(val1 + " is equal to " + val2);
}

// w/o user input (line 24 to 35)

// function check(a,b) {
//     if (a>b) {
//         return (a + " is greater than " + b);
//     }
//     else if(a==b){
//         return (a + " is equal to " + b);
//     }
//     else{
//         return (b + " is greater than " + a);
//     }
// }
// console.log(check(5,10));