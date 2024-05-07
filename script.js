const apiKey="7db5fc05c8813fc632fc47d5a12e0e9a";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox= document.querySelector(".search input ")
const searchBtn= document.querySelector(".search button ")
const weatherIcon=document.querySelector(".weather-icon");


async function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);


    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
        }else{
            
            var data=await response.json();

    
            document.querySelector(".city").innerHTML=data.name;
            document.querySelector(".temp").innerHTML= Math.round(data.main.temp)  + "°C";
            document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
            document.querySelector(".wind").innerHTML=Math.round(data.wind.speed) + "km/h";
        
        
            if(data.weather[0].main == "Clouds"){
                weatherIcon.src="images/clouds.png";
            }
            else if(data.weather[0].main == "Clear"){
                weatherIcon.src ="images/clear.png";
            }
            else if(data.weather[0].main == "rain"){
                weatherIcon.src="images/clear.png";
            }
            else if(data.weather[0].main == "Drizzle"){
                weatherIcon.src="images/drizzle.png";
            }
            else if(data.weather[0].main == "Mist"){
                weatherIcon.src="images/mist.png";
            }
            else if(data.weather[0].main == "Mist"){
                weatherIcon.src="images/snow.png";
            }
        
        
            document.querySelector(".weather").style.display = "block";

        }


    

}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchbox.value);

})
checkWeather();
