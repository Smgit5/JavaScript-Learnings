// Check age using Conditional (Ternary) operator instead of IF-ELSE

function VoteAge(){
    let x = prompt("Tell me your Age (in years)", "example: 18");
    let age = parseInt(x, 10);
    alert((age >= 18) ? "Congratulations! You are eligible to vote!" : "NO, You are not eligible to vote.");
}
VoteAge();
let conf = confirm("Do you want to continue ?");
while(conf){
    VoteAge();
    conf = confirm("Do you want to continue ?");
}
