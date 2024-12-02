import React, { useState } from 'react'
import axios from 'axios'

const Weather = () => {

    const [city, setCity] = useState();
    const [weather, setWeather] = useState();

    const handleCityChange = (e) => {
        setCity(e.target.value)
    }

    const fetchWeather = async () => {
        try {
            const respons = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'b7ec7bf570671d7f87892f63ff16109f'}`)
            console.log(respons)
            setWeather(respons);
        } catch (error) {
            console.log('error fetching weather data', error)
        }
    }
    const handleClick = () => {
        fetchWeather()
    }

  return (
    <div className='weather-container'>
        <input type="text" placeholder='Eter city namme' value={city} onChange={handleCityChange} />
        <button onClick={handleClick} >Get weather</button>
        {
            weather && 
            <>
            <div className='weather-info'>
                <h2>{weather.data.name}</h2>
                <p>Temp is {weather.data.main.temp}</p>
                <p>{weather.data.weather[0].description}</p>
            </div>
            </>
        }
    </div>
  )
}

export default Weather