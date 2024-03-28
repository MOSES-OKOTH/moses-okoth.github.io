//getting time
function setTime(){
    let now = new Date();
    let hours = now.getHours();
    let mins = now.getMinutes();
    let secs = now.getSeconds();
    let date = now.getDate();
    let month = now.getMonth();
    let year = now.getFullYear();

    if(hours<10){
        document.getElementById('hours').textContent = "0"+hours;
    } else{
        document.getElementById('hours').textContent = hours;
    }

    if(mins<10){
        document.getElementById('mins').textContent = "0"+mins;
    } else{
        document.getElementById('mins').textContent = mins;
    }

    if(secs<10){
        document.getElementById('secs').textContent = "0"+secs;
    } else{
        document.getElementById('secs').textContent = secs;
    }

    if(date<10){
        document.querySelector(".date").textContent = "0"+date;
    } else{
        document.querySelector(".date").textContent = date;
    }

    if(month == 0){
        document.querySelector(".month").textContent = "Jan";
    } else if(month == 1){
        document.querySelector(".month").textContent = "Feb";
    } else if(month == 2){
        document.querySelector(".month").textContent = "Mar";
    } else if(month == 3){
        document.querySelector(".month").textContent = "Apr";
    } else if(month == 4){
        document.querySelector(".month").textContent = "May";
    } else if(month == 5){
        document.querySelector(".month").textContent = "Jun";
    } else if(month == 6){
        document.querySelector(".month").textContent = "Jul";
    } else if(month == 7){
        document.querySelector(".month").textContent = "Aug";
    } else if(month == 8){
        document.querySelector(".month").textContent = "Sep";
    } else if(month == 9){
        document.querySelector(".month").textContent = "Oct";
    } else if(month == 10){
        document.querySelector(".month").textContent = "Nov";
    } else if(month == 11){
        document.querySelector(".month").textContent = "Dec";
    }

    document.querySelector(".year").textContent = year;
}

window.setInterval(setTime, 500);


function getWeather(){
    const apiKey = "8a61a495d2c4f58d7b323a7e41569dd0";

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`).then(
                async function(res){
                    let data = await res.json();
                    let humidity = data.main.humidity;
                    let apiPressure = data.main.pressure;
                    let pressure = ((apiPressure*0.000987)+'').split("").slice(0,5).join("");
                    let apiTemp = data.main.temp;
                    let apiTempFeelLike = data.main.feels_like;

                    let tempDegrees = apiTemp - 273.15;
                    let feels_like = apiTempFeelLike - 273.15;

                    let temp = tempDegrees.toString().split("").slice(0,5).join("");
                    let feelsLike = (feels_like+'').split("").slice(0,5).join("");

                    document.querySelector(".temp").innerHTML = "<p>Temperature: "+temp+"<sup>0</sup>C</p>";

                    document.querySelector(".feels-like").innerHTML = "<p>Feels Like: &nbsp"+feelsLike+"<sup>0</sup>C</p>";

                    document.querySelector(".humidity").innerHTML = "<p>Humidity: &nbsp &nbsp"+humidity+"%</p>";

                    document.querySelector(".pressure").innerHTML = "<p>Pressure: &nbsp &nbsp"+pressure+"atm</p>";

                    document.querySelector(".location").textContent = data.name;
                }
    )
        })
    }
}

getWeather()

function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
}

document.querySelector(".fullscreen").addEventListener(
    "click",
    () => {
        toggleFullScreen();
    }
);
  