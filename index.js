function refreshWeather(response){

    let temperatureElement= document.querySelector(".weather-app-temperature");
    let temperatureof = response.data.temperature.current;
    temperatureElement.innerHTML= Math.round(temperatureof);
}

   

function searchCity(city) {
    let apiKey = "b2a5adcct04b33178913oc335f405433";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(refreshWeather);
  }




function searchforminput(event) {
    event.preventDefault();
    let inputform = document.querySelector("#search-form-input");
    let cityvalue = document.querySelector(".weather-app-city");
    cityvalue.innerHTML = inputform.value;
    searchCity(inputform.value);

    
  }
  
  let searchformElement = document.querySelector("#search-form");
  searchformElement.addEventListener("submit", searchforminput);