function checkAge(){
    let x = prompt("Tell me your Age (in years)", "example: 18");
    let age = parseInt(x, 10);
    console.log("User age = " + age);
    if (age >= 18) {
        alert("Congratulations! You are eligible to vote.");
        console.log("YES - eligible");
    }
    else {
        alert("Sorry! You are NOT eligible to vote.");
        console.log("NO - not eligible");
    }
}
checkAge();
let conf = confirm("Do you want to continue ?");
console.log("Continue? = " + conf);
while(conf){
    checkAge();
    conf = confirm("Do you want to continue ?");
    console.log("Continue? = " + conf);
}
