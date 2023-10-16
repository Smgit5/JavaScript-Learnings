const genderElem = document.getElementById("gender");

genderElem.addEventListener("change", () => {
    const name = document.getElementById("name").value;
    const gender = document.getElementById("gender").value;
    const symbol = document.getElementById("symbol");

    symbol.style.display = "block";
    const result = document.getElementById("result");
    result.innerHTML = `${name} selected ~ ${gender}`;
});