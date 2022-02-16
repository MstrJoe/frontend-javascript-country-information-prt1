//Import axios
import axios from "axios";

//Maak een async functie waarbij de benodigde informatie wordt opgehaald

async function getCountryDataList() {

    try {
        const result = await axios.get('https://restcountries.com/v2/all?fields=name,region,flags,population');
        console.log(result.data);

        result.data.sort((a, b) =>{
            return a.population - b.population;
        })

        getAllCountries(result.data);

    } catch (error) {
        console.error(error);
    }
}
getCountryDataList();

function getAllCountries(countries) {
    const countryUnorderedList = document.getElementById('country-list');

    countries.map((allCountries) => {

        const countryList = document.createElement('li');
        countryList.innerHTML = `
            <img class="flag" src="${allCountries.flags.png}" alt="flag">
            <h3 class="${allCountries.region}">${allCountries.name}</h3>
            <p>Has a population of :${allCountries.population} people.</p>`

        countryUnorderedList.appendChild(countryList);
    })
}

// Installeer en importeer Axios;   V
// Neem de documentatie van de REST Countries API goed door. Welk endpoint heb je nodig om informatie over alle landen op te halen? Endpoint aanwezig! V
// Schrijf een asynchrone functie die, met behulp van Axios, een GET-request maakt naar het juiste endpoint. V
// Log de response in de console en bestudeer de data goed: hoe is het opgebouwd? V
// Probeer eens om de naam van het allereerste land te loggen in de console, welk pad moet je hiervoor volgen?  V
// Maak een <ul>-tag in de HTML die je als referentie kunt gebruiken in jouw JavaScript bestand;  V
// Zorg ervoor dat de naam van het allereerste land wordt weergegeven als <li>-tag in het lijst-element op de pagina;
// Zorg er nu ook voor dat de populatie (Has a population of [amount] people) daaronder wordt weergegeven;
// Schrijf een aparte functie die één regio-naam verwacht, en op basis van deze regio de correcte kleur-naam als string teruggeeft.
// Gebruik deze, om de naam van het land in de juiste kleur weer te geven op de pagina. Tip: zorg ervoor dat je CSS-classes maakt voor alle regio-kleuren!Breidt de <li>-tag uit met een <img>-tag om zo ook de url van de meegegeven vlag-afbeelding weer te kunnen geven;
// Gebruik de map-methode om over de array met landen heen te mappen, en zo een <li>-element te maken voor álle landen;
// Zorg er ten slotte voor dat je de response data eerst sorteert op populatie, van laag naar hoog, voor je eroverheen mapt om de landen op de pagina weer te geven.