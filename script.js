const timeE1 = document.getElementById('time');
const dateE1 = document.getElementById('date');
const currentWeatherItemsE1 = document.getElementById('current-weather-items')

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

}, 1000);