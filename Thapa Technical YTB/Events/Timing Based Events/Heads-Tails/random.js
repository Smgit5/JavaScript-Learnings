const btn = document.querySelector("#btn");
const result = document.querySelector("#result");
const reset = document.querySelector("#reset");

btn.addEventListener("click", () => {
    result.style.display = "block";
    result.innerHTML = "Loading...";
    let x = Math.trunc(Math.random()*100);
    setTimeout(() => {
        if (x % 2 == 0) {
            result.innerHTML = "Heads";
        }
         else {
            result.innerHTML = "Tails";
         }
         console.log(x);
    }, 1000);
});

reset.onclick = () => {
    result.style.display = "none"
    console.log("Reset");
};