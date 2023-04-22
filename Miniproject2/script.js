const apiKey ="b8f2fbf692709733ab02ce4a11af8414";
        const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const searchbox = document.querySelector(".search input");
        const searchbtn= document.querySelector(".search button");
        const weatherImg=document.querySelector(".weather-img");


        async function checkWeather(city)
        {
            const response =await fetch(apiUrl + city +`&appid=${apiKey}`);
            var data = await response.json();
            console.log(data);
            document.querySelector(".city").innerHTML=data.name;
            document.querySelector(".temp").innerHTML=Math.round(data.main.temp)  +"°c";
            document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
            document.querySelector(".wind").innerHTML=data.wind.speed+"km/hr";

             
           if (data.weather[0].main=="Cloud") {
            weatherImg.src="C:\\Users\\rauts\\Desktop\\Miniproject2\\Miniproject2\\images\\clouds.png"; 
           } 
            else if(data.weather[0].main=="Clear"){
                weatherImg.src="C:\\Users\\rauts\\Desktop\\Miniproject2\\Miniproject2\\images\\clear.png"; 
            }
            else if(data.weather[0].main=="Rain"){
                weatherImg.src="C:\\Users\\rauts\\Desktop\\Miniproject2\\Miniproject2\\images\\rain.png"; 
            }
            else if(data.weather[0].main=="Drizzle"){
                weatherImg.src="C:\\Users\\rauts\\Desktop\\Miniproject2\\Miniproject2\\images\\drizzle.png"; 
            }
            else if(data.weather[0].main=="Mist"){
                weatherImg.src="C:\\Users\\rauts\\Desktop\\Miniproject2\\Miniproject2\\images\\mist.png"; 
            }

            document.querySelector(".weather").style.display="block";
        }
        searchbtn.addEventListener("click",()=>{
            checkWeather(searchbox.value);
        })