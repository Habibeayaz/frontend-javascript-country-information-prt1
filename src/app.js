import axios from 'axios';

console.log("hallo daar!");

async function fetchData () {
    try {
        const response = await axios.get("https://restcountries.com/v2/all");
        const countries = response.data;

        countries.sort((a, b) => {return a.population - b.population;});

        const countryMap = countries.map((country) => {
            return `<li> <img src="${country.flag}" alt="The national flag of ${country.name}" id="flag">
              <p class="region ${getRegionClass(country.region)}">${country.name}</p>
              <p class="population"> Has a population of ${country.population} people</p>
              </li>`
        });

        const countriesList = document.getElementById("country-list");
        countriesList.innerHTML = countryMap.join('');
    } catch (e) {
        console.error(e);
    }
}

fetchData();

function getRegionClass(currentRegion) {
    switch (currentRegion) {
        case 'Africa':
            return 'blue';
        case 'Americas':
            return 'green';
        case 'Asia':
            return 'red';
        case 'Europe':
            return 'yellow';
        case 'Oceania':
            return 'purple';
        default:
            return 'default';
    }
}


/*function getColor(currentRegion) {
    const colors = {
        'Africa': 'blue',
        'Americas': 'green',
        'Asia': 'red',
        'Europe': 'yellow',
        'Oceania': 'purple'
    };
    return colors[currentRegion] || 'default';
}*/

