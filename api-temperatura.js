const graus = document.getElementById("graus");
const vento = document.getElementById("vento");
const img = document.getElementById("img");

async function getDataApi() {
  let url = "https://api.openweathermap.org/data/2.5/weather?lat=-23.5462307&lon=-46.6247545&appid=c981e9478b944cec2e368c8ed1b8eb48&units=metric"

  try {
    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)

        loadData(data);
      });
  } catch (error) {
    console.log(error);
  }
}

function loadData(data) {
  graus.innerHTML = `Temperatura: ${Math.floor(data.main.temp)}° C`;
  img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  vento.innerHTML = `Vento: ${data.wind.speed} km/h`;
}

getDataApi();