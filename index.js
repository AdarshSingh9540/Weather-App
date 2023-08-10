const apikey = "41d51354fcc05fec5350e0f43c1c0518";
    const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon =document.querySelector(".weather-icon");

    async function checkWeather(city){
      const response = await fetch(apiurl+city+'&appid=41d51354fcc05fec5350e0f43c1c0518');

      if(response.status==404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
      }else {
        var data = await response.json();  

document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  +"°C";
document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

 if(data.weather[0].main == "clouds"){
  weatherIcon.src = "images/clouds.png";
 }else if(data.weather[0].main == "Haze"){
  weatherIcon.src = "images/clear.png";
 }else if(data.weather[0].main == "Rain"){
  weatherIcon.src = "images/Rain.png";
 }
else if(data.weather[0].main == "Drizzle"){
  weatherIcon.src = "images/Drizzle.png";
}else if(data.weather[0].main == "Mist"){
  weatherIcon.src = "images/Mist.png";
}

document.querySelector(".weather").style.display = "block";
      }

      

    }
    checkWeather();

    searchBtn.addEventListener("click",()=>{
      checkWeather(searchBox.value);
    })