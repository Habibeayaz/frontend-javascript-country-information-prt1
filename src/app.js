import axios from 'axios';

console.log("hallo daar!");

async function fetchData () {
    try {
        const response = await axios.get("https://restcountries.com/v2/all");
        console.log(response.data);
    } catch (e) {
        console.error(e);
    }
}
fetchData();

const firstCountry = countries.find((country) => {
    return (country.name);
});
console.log(firstCountry);