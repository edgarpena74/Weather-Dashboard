let user = document.getElementById("user")
let searchCity = document.getElementById("searchCity")
let button = document.getElementById("searchButton")
let cityList = document.getElementsByClassName("cityList")
let list = document.getElementById("list")
let cityForecast = document.getElementById("cityForecast")
let fiveDay = document.getElementById("fiveDay")


console.log("before click func")

function getCity() {
    console.log("search was clicked")
    let city = user.value;
    let cityArray = [];
    // window.localStorage.setItem("City", city )

    
    //url for user search
    let URL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=de8be824ac11480024fa9aeef3ea6f60"

    //fetches api data
       fetch(URL)
        .then(response => response.json())
        .then(function(data){
            console.log(data);

            // i will need to make a for loop for the list items


            //City name and **********date
            let apiName = data.city.name;
            console.log("api name   " + apiName)
            //current weather conditions
            let apiweather = data.list[0].weather;
            let weatherString = JSON.stringify(apiweather);
            console.log("weather string   " + weatherString);
            //access specific data(icon of weather, temp, humi, wind speed, 
            //******I STILL NEED TO ADD UV INDEX****) MAYBE MAKE A LOCAL STORAGE OBJECT WITH THE SPECIFIC DIRECTION TO LONG LAT
            let icon = data.list[0].weather[0].icon;
            let windSpeed = JSON.stringify(data.list[0].wind)
            let temp = data.list[0].main.temp;
            let feels_like = data.list[0].main.feels_like;
            let humidity = data.list[0].main.humidity;
            console.log("wind speed    " + windSpeed)
            console.log("icon   " + icon)
            console.log("feels like " + feels_like)
            console.log("humidity  " + humidity)
            console.log("temp   " + temp)

            let icon = document.createElement("p");
            icon.textContent = icon;
            cityForecast.appendChild(icon)
            let windSpeedHTML

          
           
            
         
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