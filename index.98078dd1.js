const e=document.querySelector("#search-box");document.querySelector(".country-list"),document.querySelector(".country-info");e.addEventListener("input",(()=>{(name,fetch("https://restcountries.com/v3.1/name/{name}").then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))).then((e=>renderCountryList(e))).catch((e=>console.log(e)))}));
//# sourceMappingURL=index.98078dd1.js.map
