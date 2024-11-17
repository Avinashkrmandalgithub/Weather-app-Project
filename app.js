const apiKey = "ffab9c29baa2f23040edfca978281393";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=matric&q=kolkata";

async function checkWeather(){
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = data.main.temp;
  document.querySelector(".humidity").innerHTML = data.main.humidity;
  // document.querySelector(".wind").innerHTML = 

}

checkWeather();