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

    try{

        let response = await fetch(url)
        if(!response.ok){
            throw new Error("City not found")
        }

        let data = await response.json()

        console.log(data);

    } catch(error){

        console.log(error);

    }
    
}

function displayWeather(data){
    let {name, weather, timezone, coord } = data
        let weatherInfo = document.getElementById('weatherInfo')
weatherInfo.innerHTML = 
    <div class="last">
        <h3>Weather in ${name}</h3>
        <p>Weather timezone ${timezone}</p>
        <p>Weather description ${weather[0].description}</p>
        <p>Weather description ${coord.lat}</p>
        <p>Weather description ${coord.lon}</p>
    </div> 
    
    //  console.log(data);
}






