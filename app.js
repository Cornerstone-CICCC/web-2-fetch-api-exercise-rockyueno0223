// YOUR JS CODE HERE
const weatherWrapper = document.querySelector('.weather-wrapper')

async function getWeather() {
  try {
    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=49.2497&longitude=-123.1193&current=temperature_2m,is_day,rain,showers,wind_speed_10m&timezone=auto&forecast_days=1')
    const data = await response.json()

    const date = new Date(data.current.time).toLocaleString()

    let weatherElement = document.createElement('div')
    weatherElement.innerHTML = `<p>Today's Weather</p><p class='temperature'>${data.current.temperature_2m} ${data.current_units.temperature_2m}</p><p>Wind Speed: ${data.current.wind_speed_10m} ${data.current_units.wind_speed_10m}</p><p>${data.timezone}</p><P>Last updated: ${date}</P>`

    weatherWrapper.append(weatherElement)

  } catch (error) {
    console.log(error);
  }
}

getWeather()
