import axios from "axios";

async function getCountryData(name) {

    const containerResult = document.getElementById("results");
    const errorMessage = document.getElementById('error-message')

    errorMessage.innerHTML = '';
    containerResult.innerHTML = '';

    try {

        const result = await axios.get(`https://restcountries.com/v2/name/${name}`)
        console.log(result.data)
        const country = result.data[0]

        containerResult.innerHTML = `

        <br>
        
        <div id="info-block">
            <div id="name-flag">
                <img src="${country.flags.svg}" width="100px">
                <h3>${country.name}.</h3> 
            </div>
            <p>${country.name} is situated in ${country.subregion}  and has a population of ${country.population}.</p>
            <p>The Capital is ${country.capital} ${getCurrencies(country.currencies)}.</p>
            <p>They speak ${getLanguage(country.languages)}</p>
        </div>
        `

    } catch (e) {
        console.error(e);
        errorMessage.innerHTML = `
        <p>${name} Does not exist, try again.</p>
        `
    }
}


function getCurrencies(currencie) {

    if (currencie.length === 2) {
        return `and you can pay with ${currencie[0].name} and ${currencie[1].name}`
    } else {
        return `and you can pay with ${currencie[0].name}`
    }
}

function getLanguage(input) {
    if (input.length === 3) {
        return `${input[0].name}, ${input[1].name} and ${input[2].name}`
    } else if (input.length === 2) {
        return `${input[0].name} and ${input[1].name}.`
    } else {
        return `${input[0].name}.`
    }
}

const searchForm = document.getElementById("search-form");
searchForm.addEventListener('submit', searchCountries)

function searchCountries(e) {
    e.preventDefault()

    const inputField = document.getElementById("search-country");

    getCountryData(inputField.value);

}

