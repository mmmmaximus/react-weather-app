import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Filter from './components/Filter'
import Countries from './components/Countries'
import './style/App.css'

const App = () => {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])

  const changeFilter = (event) => {
    setFilter(event.target.value)
  }

  const showButton = (event) => {
    setFilter(event.target.value)
  }

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  return (
    <div data-testid='App'>
      <Filter func={changeFilter}/>
      <Countries countries={countries} filter={filter} showButton={showButton}/>
    </div>
  )
}

export default App;
