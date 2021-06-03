import React from "react"
import Country from './Country'

const Countries = ({countries, filter, showButton}) => {
  const filteredCountries = countries.filter(
    country => country.name.toLowerCase().includes(filter.toLowerCase())
  )

  if (filter === '') {
    return <div data-testid='Countries'>Search for a country</div>
  } else if (filteredCountries.length > 10) {
    return <div data-testid='Countries'>Too many matches, specify another filter</div>
  } else if (filteredCountries.length <= 10 && filteredCountries.length > 1) {
    return <div>
      {filteredCountries.map(country =>
        <p key={country.name}>{country.name} <button onClick={showButton} value={country.name}>show</button></p>
      )}
    </div>
  } else {
    return <div>
      {filteredCountries.map(country =>
        <Country country={country}/>
      )}
    </div>
  }
}

export default Countries
