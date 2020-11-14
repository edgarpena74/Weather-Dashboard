let user = document.getElementById("user")
let searchCity = document.getElementById("searchCity")
let button = document.getElementById("searchButton")
let cityList = document.getElementsByClassName("cityList")
let list = document.getElementById("list")
let cityForecast = document.getElementById("cityForecast")
let fiveDay = document.getElementById("fiveDay")
let mainIcon = document.getElementById("mainIcon");
let cityName = document.getElementById("cityName")
let listItem = document.getElementById("listItem")






console.log("before click func")

function getCity() {
    console.log("search was clicked")
    let city = user.value;
  

    
    //url for user search
    let URL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=de8be824ac11480024fa9aeef3ea6f60"

    


    //fetches api data
       fetch(URL)
        .then(response => response.json())
        .then(function(data){
            console.log(data);
            
            let lon = data.city.coord.lon
            let lat = data.city.coord.lat
            let uvURL = "http://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=de8be824ac11480024fa9aeef3ea6f60";
            
            fetch(uvURL)
             .then(response => response.json())
             .then(data => uvData(data))
            
            function uvData(response){
               
                let uv = response.value
                let uvText = document.createElement("div")
                uvText.textContent = "UV Index:  " + uv
               
                console.log(response.value + "   uv text")
                cityForecast.appendChild(uvText)
            }

            let forData = data.list;
            console.log(forData)

            // i will need to make a for loop for the list items
            // ***if i make a foreloop it would only be for data like
            // icon temp humidity for the 5 day forecast */
            for (let index = 1; index < forData.length; index++) {
                if (index > 5){
                console.log("will break here")
                  break;
                } else {
 
                //make a card with icon, temp, and humidity percent
                    let fiveIcon = data.list[index].weather[0].icon;
                    let fiveTemp = data.list[index].main.temp;
                    let fiveHum = data.list[index].main.humidity
            

                    //create columns
                    let fiveCol = document.createElement("div")
                    fiveCol.className = "col";
                    
                    //column temps
                    let fiveColTemp = document.createElement("div")
                    fiveColTemp.textContent = fiveTemp + "  °F";
                    
                    //create image section
                    let fiveColImg = document.createElement("img")
                    let fiveURLimg = "http://openweathermap.org/img/wn/" + fiveIcon + "@2x.png";
                    fiveColImg.src = fiveURLimg

                    
                    //column humidity
                    let fiveColHum = document.createElement("div");
                    fiveColHum.textContent = "Humidity: " + fiveHum + "%";
                    
                    fiveCol.appendChild(fiveColImg);
                    fiveCol.appendChild(fiveColTemp);
                    fiveCol.appendChild(fiveColHum);
                    
                    fiveDay.appendChild(fiveCol)
                    

                    
                }    
            }

            //City name and **********date
            let apiName = data.city.name;
            let name = document.createElement("div")
            name.textContent = apiName
            console.log("api name   " + apiName)
          
            // //current weather conditions
            let apiweather = data.list[0].weather;
            let weatherString = JSON.stringify(apiweather);
            console.log("weather string   " + weatherString);
            //access specific data(icon of weather, temp, humi, wind speed, 
         
            let icon = data.list[0].weather[0].icon;
            let windSpeed = data.list[0].wind.speed
            let temp = data.list[0].main.temp;
            let feels_like = data.list[0].main.feels_like;
            let humidity = data.list[0].main.humidity;
     
            //Main Icon image
            let iconIMG = icon;
            let urlIMG = "http://openweathermap.org/img/wn/" + iconIMG + "@2x.png";
            console.log("icon test   " + iconIMG)
            mainIcon.src = urlIMG;

            //******Main forecast
            
            //main Feels like
            let mainFL = document.createElement("div");
            mainFL.textContent = "Feels Like: " + feels_like + "  °F";
            
            //Main temp
            let mainTemp = document.createElement("div");
            mainTemp.textContent = "Temperature: " + temp + "  °F";

           //main humidity
            let mainHum = document.createElement("div");
            mainHum.textContent = "Humidity: " + humidity + "%";
            
              //main Wind Speed
            let mainWS = document.createElement("div");
            mainWS.textContent = "Wind Speed: " + windSpeed + " MPH";

            //apending main elements
            cityName.appendChild(name)
            cityForecast.appendChild(mainWS);
            cityForecast.appendChild(mainTemp);
            cityForecast.appendChild(mainFL);
            cityForecast.appendChild(mainHum);
            

            // //i could mak*e an array and call the content
            // let icon = document.createElement("p");
            // icon.textContent = icon;
            // cityForecast.appendChild(icon)
            

          
           
            
         
        })
  
 

//    let cityString = JSON.stringify(cityFetch)
//    console.log("cityData stringfy " + cityString)

    let addCity = document.createElement("li");
    addCity.textContent = city;
    list.prepend(addCity);

    
}

console.log("after click")

button.addEventListener("click", getCity)

searchCity.addEventListener("submit", function(event){
    event.preventDefault();
})



// $("#searchCity").on("click",
//     fetch('http://api.openweathermap.org/data/2.5/forecast?q=London,UK&appid=de8be824ac11480024fa9aeef3ea6f60')
//     .then(response => response.json())
//     .then(data => console.log(data))
// )



// fetch('http://api.openweathermap.org/data/2.5/uvi?q=London.UK&appid=de8be824ac11480024fa9aeef3ea6f60')
//   .then(response => response.json())
//   .then(data => console.log(data));