const weatherGet = async x => {        
    const url = ``
    const response = await fetch(url)
    const weather = await response.json()

    // const sunrise = new Date(weather.sys.sunrise * 1000 + weather.timezone * 1000).toLocaleTimeString()
    // const sunset = new Date(weather.sys.sunset * 1000 + weather.timezone * 1000).toLocaleTimeString()


    document.getElementById('name').innerHTML = weather.name
    document.getElementById('lon').innerHTML = `Longitude: ${weather.coord.lon}`
    document.getElementById('lat').innerHTML = `Latitude: ${weather.coord.lat}`
    document.getElementById('current').innerHTML = `Current:${weather.main.temp}°F`
    document.getElementById('high').innerHTML = `High: ${weather.main.temp_max}°F`
    document.getElementById('low').innerHTML = `Low: ${weather.main.temp_min}°F`
    document.getElementById('humidity').innerHTML = `Humidity: ${weather.main.humidity}%`
    document.getElementById('wind').innerHTML = `Wind: ${weather.wind.speed}`
    document.getElementById('timezone').innerHTML = `Time: ${weather.timezone}`
    // document.getElementById('sunrise').innerHTML = `Sunrise: ${sunrise}`
    // document.getElementById('sunset').innerHTML = `Sunset: ${sunset}`

    if (weather.weather[0].main == 'Clouds') {
        document.getElementById('video').innerHTML = `<video loop muted autoplay><source src="static/Clouds.mp4" type="video/mp4"></video>`
    } else if (weather.weather[0].main == 'Rain') {
        document.getElementById('video').innerHTML = `<video loop muted autoplay><source src="static/rainy.mp4" type="video/mp4"></video>`
    } else if (weather.weather[0].main == 'Snow') {
        document.getElementById('video').innerHTML = `<video loop muted autoplay><source src="static/snowy.mp4" type="video/mp4"></video>`
    } else if (weather.weather[0].main == 'Clear') {
        document.getElementById('video').innerHTML = `<video loop muted autoplay><source src="static/clear.mp4" type="video/mp4"></video>`
    } else if (weather.weather[0].main == 'Thunderstorm') {
        document.getElementById('video').innerHTML = `<video loop muted autoplay><source src="static/thunderstorm.mp4" type="video/mp4"></video>`
    } else if (weather.weather[0].main == 'Drizzle') {
        document.getElementById('video').innerHTML = `<video loop muted autoplay><source src="static/drizzle.mp4" type="video/mp4"></video>`
    } else if (weather.weather[0].main == 'Mist') {
        document.getElementById('video').innerHTML = `<video loop muted autoplay><source src="static/Mist.mp4" type="video/mp4"></video>`
    }
    // document.getElementById('video').insertAdjacentHTML('afterbegin', `<video loop muted autoplay>
    // <source src="static/${weather.weather[0].main}.mp4" type="video/mp4">
    // </video>`);

    // document.getElementById('video').innerHTML = `static/${weather.weather.main}.mp4`

    // if (weather.weather[0].main == 'Clouds') {
    //     document.getElementById('video').src = 'static/cloudy.mp4'
    // } else if (weather.weather[0].main == 'Rain') {
    //     document.getElementById('video').src = 'static/rainy.mp4'
    // } else if (weather.weather[0].main == 'Snow') {
    //     document.getElementById('video').src = 'static/snowy.mp4'
    // } else if (weather.weather[0].main == 'Clear') {
    //     document.getElementById('video').src = 'static/sunny.mp4'
    // } else if (weather.weather[0].main == 'Thunderstorm') {
    //     document.getElementById('video').src = 'static/thunderstorm.mp4'
    // } else if (weather.weather[0].main == 'Drizzle') {
    //     document.getElementById('video').src = 'static/drizzle.mp4'
    // } else if (weather.weather[0].main == 'Clear') {
    //     document.getElementById('video').src = 'static/clear.mp4'
    // } else if (weather.weather[0].main == 'Mist') {
    //     document.getElementById('video').src = 'static/mist.mp4'
    // }


    // if (weather.weather.main == Clouds) {
    //     document.getElementById('allbody').src = 'static/Clouds.mp4';
    // } else if (weather.weather.main == Rain) {
    // document.body.style.backgroundImage = "url(rain3.gif)";
    // } else if (weatherinfo == Clouds) {
    // document.body.style.backgroundImage = "url(cloud.gif)";
    // } else if (weatherinfo == Clear) {
    // document.body.style.backgroundImage = "url(sky3.gif)";
    // } else {
    // document.body.style.backgroundImage= "url(background.gif)";
    // }
}



const search_weather = document.getElementById('weatherInput')
const search_btn = document.getElementById('weatherButton')
search_btn.addEventListener('click', () => weatherGet(search_weather.value))
