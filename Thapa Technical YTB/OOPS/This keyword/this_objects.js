// console.log(this); // --> window object

// function fun() {
//     console.log(this); // --> window object
// }
// fun();

// const fun2 = function() {
//     console.log(this); // --> window object
// }
// fun2();

// const bioData = {
//     myName: "Suman Maji",
//     myAge: 20,
//     myInterest: "Web Development",
//     myMethod() {
//         console.log("Hello World");
//     },
//     myThisMethod() {
//         console.log(this); // --> current object (bioData)
//     }
// }
// bioData.myThisMethod();

// const obj = {
//     arrowMethod : () => {
//         console.log(this); // --> window object
//     }
// }
// obj.arrowMethod();