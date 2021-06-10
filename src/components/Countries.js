import React from "react"
import Country from './Country'

const Countries = ({countries, filter, showButton}) => {
  const filteredCountries = countries.filter(
    country => country.name.toLowerCase().includes(filter.toLowerCase())
  )

  if (filter === '') {
    return <div className='countries' data-testid='Countries'>
      <p className='filter-text'>Search for a country</p>
    </div>
  } else if (filteredCountries.length > 10) {
    return <div className='countries'>
      <p className='filter-text'>Too many matches, specify another filter</p>
    </div>
  } else if (filteredCountries.length <= 10 && filteredCountries.length > 1) {
    return <div className='countries'>
      <div className='countries-text'>
        {filteredCountries.map(country =>
          <p key={country.name}>{country.name}<button onClick={showButton} value={country.name}>show</button></p>
        )}
      </div>
    </div>
  } else {
    return <div className='countries'>
      {filteredCountries.map(country =>
        <Country country={country}/>
      )}
    </div>
  }
}

export default Countries
