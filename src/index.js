import './css/styles.css';
import { fetchCountries } from "./fetchCountries";
import Notiflix from 'notiflix';

const debounce = require('lodash.debounce');
const input = document.querySelector("#search-box");
const countryList = document.querySelector(".country-list");
const countryInfo = document.querySelector(".country-info");
const DEBOUNCE_DELAY = 300;


input.addEventListener("input", debounce(() => {
    fetchCountries()
        .then((countries) => renderCountryList(countries))
        .catch((error) => Notiflix.Notify.failure('Oops, there is no country with that name'));
}, DEBOUNCE_DELAY))

function renderCountryList(countries) {
    if (countries.length === 1) {
        const markupCapPopLang = countries
        .map(({capital, population, languages}) => {
            return `
            <ul class = "list">
            <li><b>Capital: </b>${capital}</li>
            <li><b>Population: </b>${population}</li>
            <li><b>Languages: </b>${Object.values(countries[0].languages)}</li>
            </ul>
            `;
        }).join("");
        const markupFlagName = countries
        .map(({ flags, name }) => {
            return `
            <li>
            <img src = ${flags.svg} width = 50; height = 40 /> ${name.official}
            </li>
            `;
        }).join("");
    countryInfo.innerHTML = markupCapPopLang;
    countryList.innerHTML = markupFlagName;   
    } else if (countries.length >= 2 && countries.length <= 10) {
        const markupFlagName = countries
        .map(({ flags, name }) => {
            return `
            <li>
            <img src = ${flags.svg} width = 50; height = 40 /> ${name.official}
            </li>
            `;
        }).join("");
    countryInfo.innerHTML = "";
    countryList.innerHTML = markupFlagName;
    } else if (countries.length > 10) {
    countryInfo.innerHTML = "";
    countryList.innerHTML = "";
    Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
    } else {
    countryInfo.innerHTML = "";
    countryList.innerHTML = "";
    }
}