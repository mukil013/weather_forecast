let temp = document.querySelector(".temp");
let des = document.querySelector(".description");
let inp = document.querySelector("#init");
let go = document.querySelector("#start");

go.addEventListener('click' , () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inp.value}&units=metric&appid=4216104a9c50bfc97ddb77e6a7d3af2b`)
    .then(response => response.json())
    .then(displayData)
    .catch(err => alert('enter correct city!!!'));
});

let displayData = (weather) =>{
    temp.textContent = `${weather.main.temp}°C`;
    des.textContent = `${weather.weather[0].description}`
}