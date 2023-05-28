const timeE1 = document.getElementById('time');
const dateE1 = document.getElementById('date');
const currentWeatherItemsE1 = document.getElementById('current-weather-items')

var input = document.getElementById("city_name");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("mybtn").click();
  }
});



const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];


setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
    const minutes = time.getMinutes();
    const ampm = hour >=12  ? 'AM' : 'PM'

    timeE1.innerHTML = hoursIn12HrFormat + ':' + minutes+ ' ' + `<span
     id="am-pm">${ampm}</span>`

     dateE1.innerHTML = days[day] + ',' + date+ ' ' + months[month]

}, 1000);


function getWeatherData() {

    var city_name = document.getElementById('city_name').value;
    axios.get("http://api.weatherapi.com/v1/forecast.json?key=1c1798c8ceba48f4a2675935230505&q="+city_name+"&days=7&aqi=no&alerts=yes")

    .then ( (response) => {
    

    var currentDay = response.data.current;
    var location = response.data.location;

    console.log(response.data);
    showWeatherData(response.data);

    document.getElementById('location').innerText = location.name;
   
    document.getElementById('current_temp').innerHTML = currentDay.temp_c +'<span> &#8451;</span>';
    document.getElementById('icon').innerHTML = `<img src = ${currentDay.condition.icon}>`;
    document.getElementById('current_weather').innerText = currentDay.condition.text;
    });

    
    

   
    };
    
    function showWeatherData(data){
        let{humidity,pressure_mb,uv,wind_kph} = data.current

        currentWeatherItemsE1.innerHTML = 

        `<div class="weather-items">
        <div>Humidity</div>
        <div>${humidity}%</div>
    </div>
    <div class="weather-items">
    <div>Pressure</div>
       <div>${pressure_mb}</div>
        </div>
        <div class="weather-items">
                        <div>Wind Speed</div>
                        <div>${wind_kph}</div>
                        
                  </div>
                  <div class="weather-items">
                        <div>UV</div>
                        <div>${uv}</div>
                        

                    </div>`

    }