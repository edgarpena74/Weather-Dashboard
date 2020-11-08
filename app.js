let user = document.getElementById("user")
let button = document.getElementById("searchButton")
let userCity = localStorage.getItem("City")


console.log("before click func")

function getCity() {
    console.log("search was clicked")
    let city = user.value;
    window.localStorage.setItem("City", city )


}

console.log("after click")

button.addEventListener("click", getCity)


// $("#searchCity").on("click",
//     fetch('http://api.openweathermap.org/data/2.5/forecast?q=London,UK&appid=de8be824ac11480024fa9aeef3ea6f60')
//     .then(response => response.json())
//     .then(data => console.log(data))
// )



// fetch('http://api.openweathermap.org/data/2.5/uvi?q=London.UK&appid=de8be824ac11480024fa9aeef3ea6f60')
//   .then(response => response.json())
//   .then(data => console.log(data));