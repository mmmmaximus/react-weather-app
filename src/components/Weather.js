import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Weather = ({name, city}) => {
  const [weather, setWeather] = useState('')

  useEffect(() => {
    axios
      .get(`http://api.weatherbit.io/v2.0/current?city=${city}&key=${process.env.REACT_APP_API_KEY}`)
      .then(response => setWeather(response.data.data[0]))
  }, [city])

  if (weather) {
    return <div data-testid='Weather' className='weather'>
      <img
        className='img'
        data-testid='img'
        src={require(`../weather_icons/${weather.weather.icon}.png`).default}
        alt={name}
      />
      <h2>Weather in {name}</h2>
      <h3 className='description'>
        {weather.weather.description}
      </h3>
      <table>
        <tbody>
          <tr>
            <td>
              <h3>Temperature</h3>
            </td>
            <td>
              <p>{weather.temp}°C</p>
            </td>
          </tr>
          <tr>
            <td>
              <h3>Wind</h3>
            </td>
            <td>
              <p>{Math.round(weather.wind_spd * 100)/100} m/s direction {weather.wind_cdir}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  } else {
    return <div data-testid='Weather'></div>
  }
}

export default Weather
