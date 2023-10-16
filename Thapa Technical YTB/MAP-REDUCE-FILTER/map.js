//1. Find the square-root of each element in the array
// arr = [25, 36, 49, 64, 81]

//2. Multiply each element by 2 and return only those elements which are greater than 10
// arr = [2, 3, 4, 6, 8]


// Solution 1. ---->
// let arr = [25, 36, 49, 64, 81];

// const sqrtArr = arr.map((currElem) => Math.sqrt(currElem));
// console.log(sqrtArr);

// Solution 2. ---->
// let arr2 = [2, 7, 4, 6, 8];
// console.log(arr2.map((currElem) => currElem*2).filter((elem) => elem>10).reduce((accumulator, currElm) => accumulator += currElm));