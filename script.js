///
async function getWeather(){

    let city = document.getElementById('city').value

    console.log(city);

    let weatherInfo = document.getElementById('weatherInfo')

    if(!city){
        weatherInfo.innerHTML = "<p class='danger'>Please Enter a City Name!</p>"

        return
    }

    let apikey = "9fb5deca63f2e2f9ea83d18c125e5fdb"
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`

    
}