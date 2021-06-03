import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Countries from '../Countries'
import App from '../../App'
import renderer from 'react-test-renderer'
import mockedAxios from '../../__mocks__/axios'

const countriesResponse = {
  data: [
    {
      name: 'Africa',
      capital: 'Wakanda',
      population: '123456',
      languages: [
        {name: 'language1'},
        {name: 'language2'},
        {name: 'language3'}
      ]
    },
    { name: 'Afric' },
    { name: 'Afri' },
    { name: 'Afr' },
    { name: 'Af' },
    { name: 'A' },
    { name: 'frica' },
    { name: 'rica' },
    { name: 'ica' },
    { name: 'ca' },
    { name: 'fria' }
  ]
}
let filter = ''
const showButton = (event) => {
  filter = event.target.value
}
const countries = []

test('should render component', () => {
  render(<Countries countries={countries} filter={filter} showButton={showButton} />)
  const CountriesElement = screen.getByTestId('Countries')
  expect(CountriesElement).toBeInTheDocument
})

test('should filter countries when there is no filter applied', () => {
  mockedAxios.get.mockResolvedValueOnce(countriesResponse)
  render(<App />)
  const CountriesElement = screen.getByTestId('Countries')
  const FilterElement = screen.getByTestId('Filter')

  fireEvent.change(FilterElement, { target: { value: '' } })
  expect(CountriesElement.textContent).toBe('Search for a country')
})

test('should filter countries when filter applied and > 10 matches', async () => {
  mockedAxios.get.mockResolvedValueOnce(countriesResponse)
  render(<App />)
  const CountriesElement = screen.getByTestId('Countries')
  const FilterElement = screen.getByTestId('Filter')

  fireEvent.change(FilterElement, { target: { value: 'a' } })
  await waitFor(() => {
    expect(CountriesElement.textContent).toBe('Too many matches, specify another filter')
  })
})

test('should filter countries when filter applied and <= 10 but > 1 matches', async () => {
  mockedAxios.get.mockResolvedValueOnce(countriesResponse)
  render(<App />)
  const CountriesElement = screen.getByTestId('Countries')
  const FilterElement = screen.getByTestId('Filter')

  fireEvent.change(FilterElement, { target: { value: 'afri' } })
  await waitFor(() => {
    expect(CountriesElement.textContent).toContain('Africa')
    expect(CountriesElement.textContent).toContain('Afric')
    expect(CountriesElement.textContent).toContain('Afri')
  })
})

test('should filter countries when filter applied and 1 match', async () => {
  mockedAxios.get.mockResolvedValueOnce(countriesResponse)
  render(<App />)
  const FilterElement = screen.getByTestId('Filter')

  const weatherResponse = {
    data: {
      data: [null]
    }
  }
  mockedAxios.get.mockResolvedValueOnce(weatherResponse)
  fireEvent.change(FilterElement, { target: { value: 'africa' } })
  await waitFor(() => {
    const CountryElement = screen.getByTestId('Country')
    expect(CountryElement).toBeInTheDocument
  })
})

test('matches snapshot', () => {
  const tree = renderer.create(<Countries countries={countries} filter={filter} showButton={showButton} />).toJSON()
  expect(tree).toMatchSnapshot()
})
