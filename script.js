let loadCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountry(data))
}
let displayCountry = countrys => {
    let country = countrys.map(country => countryHTML(country))
}
let countryHTML = (country) => {
    console.log(country)
    let content = document.getElementById('content');
    let div = document.createElement('div');
    div.innerHTML = `
    <div class="details">
        <h1>${country.name.common}</h1>
        <img src="${country.flags.png}">
    </div>
    `;
    content.appendChild(div);
}
loadCountry()