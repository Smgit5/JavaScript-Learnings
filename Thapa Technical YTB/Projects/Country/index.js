const container = document.querySelector(".container");

const req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/name/India");
req.send();

req.addEventListener("load", function() {
    const [data] = JSON.parse(this.responseText);

    const htmlData = `
        <div class="card">
            <img src="${data.flags.svg}" alt="">
            <div id="basicInfo">
                <h3 id="name">${data.name.common}</h3>
                <p id="capital">Capital: <b>${data.capital}</b></p>
            </div>
            <hr>
            <div id="extraInfo">
                <div id="region" class="extraInfoClass">
                    <h3>${data.region}</h3>
                    <p>Region</p>
                </div>

                <div id="population" class="extraInfoClass">
                    <h3>${data.population}</h3>
                    <p>Population</p>
                </div>

                <div id="timeZone" class="extraInfoClass">
                    <h3>${data.timezones}</h3>
                    <p>Time Zone</p>
                </div>
            </div>
        </div> 
    `;

    container.insertAdjacentHTML("afterbegin", htmlData);
});