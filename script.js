console.log("This js file is linked!");

async function weather (){
    const response = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=accra&appid=b2f3762212a93432cb01ba054a297a38&units=imperial");
    
    console.log(response);

    document.querySelector(".city").innerHTML = "CITY: " + response.data.name;
    document.querySelector(".temp").innerHTML = "TEMPERATURE: " + Math.round(response.data.main.temp) + "°F";
    document.querySelector(".humidity").innerHTML = "HUMIDITY: " + response.data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = "WIND: " + Math.round(response.data.wind.speed) + " mph";
    document.querySelector(".description").innerHTML = "DESCRIPTION: " + response.data.weather[0].description;
}

weather ();

