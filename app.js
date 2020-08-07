const api = {
    key: "196ce3ae3461fe88a1b5c56b0b35adc1" ,
    base: "https://api.openweathermap.org/data/2.5/" ,


}

const searchbox = document.querySelector("input.search-box");
searchbox.addEventListener('keypress' , setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13) {
        getResults(searchbox.value);
        console.log(searchbox.value);
    }



function getResults(query) {
    fetch (`${api.base}weather?q=${query}&units=metric&APPID=196ce3ae3461fe88a1b5c56b0b35adc1`)
    .then(weather => {
    return weather.json();
    }).then(displayResults);

}

function displayResults (weather) {
    console.log(weather);
    let city = document.querySelector('.location .city')
   city.innerText = `${weather.name} , ${weather.sys.country}`

   let temp = document.querySelector('.current .temp')
   temp.innerHTML = `${Math.round(weather.main.temp)}<span> °C </span>`

   let sumUp = document.querySelector('.current .weather')
   sumUp.innerText = `${weather.weather[0].description}`

   let hiLow = document.querySelector('.hi-low')
   hiLow.innerText = `${weather.main.temp_max} °C / ${weather.main.temp_min} °C`;
}
}