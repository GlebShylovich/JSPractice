const container = document.querySelector(".container");
const row = document.querySelector('.row');

function getData() {
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (let i = 0; i < data.length; i += 5) {
        const flag = data[i].flags.png;
        const country = data[i].name.official;
        const region = data[i].region;
        const population = Math.round(data[i].population / 1e4);
        const language = Object.values(data[i].languages);
        const currency = Object.values(Object.values(data[i].currencies)[0]);
        console.log(currency);
        createCard(data, flag, country, region, population, language, currency);
      }
    });
}

getData();

function createCard(data, flag, country, region, population, language, currency) {
  const template = `
    <div class="col">
        <div class="card h-100">
            <img src="${flag}" class="card-img-top" alt="flag">
            <div class="card-body">
                <h1>${country}</h1>
                <p>${region}</p>
                <p>&#128106: ${population}K</p>
                <p>&#128483: ${language}</p>
                <p>&#128176: ${currency}</p>
            </div>
        </div>
    </div>
    `;
    for (let i = 0; i < data.length; i++) {
      row.innerHTML += template;
    }
}
