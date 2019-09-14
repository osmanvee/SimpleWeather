window.addEventListener('load', ()=> {
//longitude and latitude are described
let long;
let lat;
let temperatureDescription = document.querySelector(".temp-description");
let temperatureDegree = document.querySelector(".temp-degree");
let locationTimezone = document.querySelector('.location-timezone'); 

if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(position => {
//console.log(position);
long = position.coords.longitude;
lat = position.coords.latitude;
//We got the information we needed


const proxy = 'https://cors-anywhere.herokuapp.com/';
//API call from DarkSky.net
const api = `${proxy}https://api.darksky.net/forecast/18979ead30bafcfeef8c33be17aed5ff/${lat},${long}`;

fetch(api)
    .then(response =>{
        return response.json();
    })
    //After it makes it into json we
    .then( data => {
        console.log(data);
        //Now we use the fetched data
        const {temperature, summary} = data.currently;
    //Set DOM elements from the API
    temperatureDegree.textContent = temperature;
    temperatureDescription.textContent = summary;

    locationTimezone.textContent = data.timezone;
    });
});


} 

});