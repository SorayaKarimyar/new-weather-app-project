function searchforminput(event){
    event.preventDefault();
    let inputform = document.querySelector("#search-form-input");
    let cityvalue = document.querySelector("#city");
    cityvalue.innerHTML=inputform.value;

}




let searchformElement = document.querySelector("#search-form");
searchformElement.addEventListener("submit",searchforminput);