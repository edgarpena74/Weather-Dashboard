let user = document.getElementById("user")
let searchCity = document.getElementById("searchCity")
let button = document.getElementById("searchButton")
let cityList = document.getElementsByClassName("cityList")
let list = document.getElementById("list")


console.log("before click func")

function getCity() {
    console.log("search was clicked")
    let city = user.value;
    // window.localStorage.setItem("City", city )

    

    let URL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=de8be824ac11480024fa9aeef3ea6f60"

    fetch(URL)
        .then(response => response.json())
        .then(data => console.log(data))


    let addCity = document.createElement("li");
    addCity.textContent = city;
    list.prepend(addCity);

    
}

console.log("after click")

button.addEventListener("click", getCity)
searchCity.addEventListener("submit", function(event){
    preventDefault(event);
})



// $("#searchCity").on("click",
//     fetch('http://api.openweathermap.org/data/2.5/forecast?q=London,UK&appid=de8be824ac11480024fa9aeef3ea6f60')
//     .then(response => response.json())
//     .then(data => console.log(data))
// )



// fetch('http://api.openweathermap.org/data/2.5/uvi?q=London.UK&appid=de8be824ac11480024fa9aeef3ea6f60')
//   .then(response => response.json())
//   .then(data => console.log(data));