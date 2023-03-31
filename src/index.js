import './css/styles.css';

const input = document.querySelector("#search-box");
const countryList = document.querySelector(".country-list");
const countryInfo = document.querySelector(".country-info");
const DEBOUNCE_DELAY = 300;

input.addEventListener("input", () => {
    fetchCountries(name)
        .then((countries) => renderCountryList(countries))
        .catch((error) => console.log(error));
});

function fetchCountries(name) {
    return fetch("https://restcountries.com/v3.1/name/{name}")
        .then((response) => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    });
};