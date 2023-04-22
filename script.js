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
            weatherImg.src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRW9GVg62JpDwVraVkjq_75NZy3udZnlAPEfxGePrQfH1WJ-tzb"; 
           } 
            else if(data.weather[0].main=="Clear"){
                weatherImg.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCi6smJJE0Uj53q9Y0MWLR7t61slJdVZ2IOqHS2qWwldkQSdt2";    
            }
            else if(data.weather[0].main=="Rain"){
                weatherImg.src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQX55VJwa-fxeY74J-nkYpKU-FFBxdT-WNK9nNp-B0xIvRGQtWQ";    
            }
            else if(data.weather[0].main=="Drizzle"){
                weatherImg.src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQE0Tf4NJWhPEPIPMtIEjaojwPBhLykmBqCvScAI_56L2yGjV7j";    
            }
            else if(data.weather[0].main=="Mist"){
                weatherImg.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA8FmdziilLkBQIbQjJ5fjLVm5qNAZtLsHVtwVrnGTjtMrha6I";    
            }

            document.querySelector(".weather").style.display="block";
        }
        searchbtn.addEventListener("click",()=>{
            checkWeather(searchbox.value);
        })