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

    timeE1.innerHTML = (hoursIn12HrFormat < 10? "0"+hoursIn12HrFormat : hoursIn12HrFormat)
    + ':' + (minutes < 10? "0"+minutes : minutes)+ ' ' + `<span id="am-pm">${ampm}</span>`

     dateE1.innerHTML = days[day] + ',' + date+ ' ' + months[month]

}, 1000);


function getWeatherData() {

    var city_name = document.getElementById('city_name').value;
    axios.get("http://api.weatherapi.com/v1/forecast.json?key=1c1798c8ceba48f4a2675935230505&q="+city_name+"&days=7&aqi=yes&alerts=no")

    .then ( (response) => {
    

    var currentDay = response.data.current;
    var location = response.data.location;
    var TUE = response.data.forecast.forecastday[1];
    var WED = response.data.forecast.forecastday[2];
    var THU = response.data.forecast.forecastday[3];
    var FRI = response.data.forecast.forecastday[4];
    var SAT = response.data.forecast.forecastday[5];
    var SUN = response.data.forecast.forecastday[6];

    console.log(response.data);
    showWeatherData(response.data);

    
   
    document.getElementById('current_temp').innerHTML = currentDay.temp_c +'<span> &#8451;</span>';
    document.getElementById('icon').innerHTML = `<img src = ${currentDay.condition.icon}>`;
    document.getElementById('current_weather').innerText = currentDay.condition.text;

    document.getElementById('day1_avg_temp').innerHTML = TUE.day.avgtemp_c +'<span> &#8451;</span>';
    document.getElementById('day1_icon').innerHTML = `<img src = ${TUE.day.condition.icon}>`;
    document.getElementById('day1_condition').innerText = TUE.day.condition.text;


    document.getElementById('day2_avg_temp').innerHTML = WED.day.avgtemp_c +'<span> &#8451;</span>';
    document.getElementById('day2_icon').innerHTML = `<img src = ${WED.day.condition.icon}>`;
    document.getElementById('day2_condition').innerText = WED.day.condition.text;


    document.getElementById('day3_avg_temp').innerHTML = THU.day.avgtemp_c +'<span> &#8451;</span>';
    document.getElementById('day3_icon').innerHTML = `<img src = ${THU.day.condition.icon}>`;
    document.getElementById('day3_condition').innerText = THU.day.condition.text;


    document.getElementById('day4_avg_temp').innerHTML = FRI.day.avgtemp_c +'<span> &#8451;</span>';
    document.getElementById('day4_icon').innerHTML = `<img src = ${FRI.day.condition.icon}>`;
    document.getElementById('day4_condition').innerText = FRI.day.condition.text;


    document.getElementById('day5_avg_temp').innerHTML = SAT.day.avgtemp_c +'<span> &#8451;</span>';
    document.getElementById('day5_icon').innerHTML = `<img src = ${SAT.day.condition.icon}>`;
    document.getElementById('day5_condition').innerText = SAT.day.condition.text;


    document.getElementById('day6_avg_temp').innerHTML =SUN.day.avgtemp_c +'<span> &#8451;</span>';
    document.getElementById('day6_icon').innerHTML = `<img src = ${SUN.day.condition.icon}>`;
    document.getElementById('day6_condition').innerText = SUN.day.condition.text;


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