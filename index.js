function refreshWeather(response){

    let temperatureElement= document.querySelector(".weather-app-temperature");
    let temperatureof = response.data.temperature.current;
    temperatureElement.innerHTML= Math.round(temperatureof);
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#Humidity");
    let windElement= document.querySelector("#wind-speed");
    let timeElement=document.querySelector("#time");
    let date = new Date (response.data.time *10000);
    console.log(response.date);


    let iconElement = document.querySelector("#icon");
    iconElement.innerHTML = '<img src="${response.data.condition.icon-url}" class= "weather-app-icon"/>';
   
   timeElement.innerHTML= formatDate(date);
    windElement.innerHTML=response.data.wind.speed;
    humidityElement.innerHTML=response.data.temperature.humidity;
    descriptionElement.innerHTML=response.data .condition. description;
}
 function formatDate(date){
  let minutes= date.getMinutes();
  let hourse = date.gethourse();
  let days = [
    "Sunday",
     "Monday",
    "Tuesday",
    "wednessday",
    "thursday",
    "friday",
    "saturday",
  ];
  let day = days[date.getDay];

  return '${day} ${hourse}: ${minutes}';
   
  if(minutes<10){
    minutes='0${minutes}';
  }

 }

   

function searchCity(city) {
  let apiKey = "f03c7t04000f0dbod331aeefa47ad1f6";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
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


  searchCity("paris");
 