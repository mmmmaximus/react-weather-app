import React from 'react'
import Weather from './Weather'

const Country = ({country}) => {
  return (
    <div className='country' data-testid='Country'>
      <div className='country-data'>
        <img className='img' data-testid='img' src={country.flag} alt={country.name}/>
        <h2>{country.name}</h2>
        <table>
          <tbody>
            <tr>
              <td>
                <h3>Capital</h3>
              </td>
              <td>
                <p>{country.capital}</p>
              </td>
            </tr>
            <tr>
              <td>
                <h3>Population</h3>
              </td>
              <td>
                <p>{country.population}</p>
              </td>
            </tr>
          </tbody>
        </table>
        <div className='languages'>
          <h3>Languages</h3>
          {country.languages.map((language, index) =>
            <li key={index}>{language.name}</li>
          )}
        </div>
      </div>
      <Weather name={country.name} city={country.capital}/>
    </div>
  )
}

export default Country
