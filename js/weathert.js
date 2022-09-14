//Weather for Tignes
var city = document.querySelector('.city');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var press = document.querySelector('.press');

//connecting with weather API
fetch('https://api.openweathermap.org/data/2.5/weather?lat=45.469729&lon=6.907594&appid=9feea4f31d0f94bbd0d9f05ae064f9d3')
.then(response => response.json())
.then(data => {

    //taking details from weather API
    var pressValue = data['main']['pressure'];
    var cityValue = data['name'];
    var tempValue = data['main']['temp'];
    var descValue = data['weather'][0]['description'];
    var iconimg = data['weather'][0]['icon'];
    var iconshow = "http://openweathermap.org/img/wn/" + iconimg + ".png"
    //changing Kelvins to Celsius
    var celsius = tempValue - 273.15
    var celsiusr = celsius.toFixed(2)
 


//displaying weather details
    city.innerHTML = "City: " + cityValue;
    press.innerHTML = "Pressure: " + pressValue;
    temp.innerHTML = "Temperature: " + celsiusr + "°C";
    desc.innerHTML = "Weather: " + descValue;
    document.getElementById("icon").src = iconshow;


})

