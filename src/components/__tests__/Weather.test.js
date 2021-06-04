import { render, screen, waitFor } from '@testing-library/react'
import Weather from '../Weather'
import renderer from 'react-test-renderer'
import mockedAxios from '../../__mocks__/axios'

const city = 'test city'
const weatherResponse = {
  data: {
    data: [
      {
        temp: '30',
        weather: {
          description: 'weather description'
        },
        wind_spd: '100',
        wind_cdir: 'NNN'
      }
    ]
  }
}

test('Weather should render', async () => {
  mockedAxios.get.mockResolvedValueOnce(weatherResponse)
  render(<Weather city={city} />)
  const WeatherElement = screen.getByTestId('Weather')
  await waitFor(() => {
    expect(WeatherElement).toBeInTheDocument
    expect(WeatherElement.textContent).toContain('30')
    expect(WeatherElement.textContent).toContain('weather description')
    expect(WeatherElement.textContent).toContain('100')
    expect(WeatherElement.textContent).toContain('NNN')
  })
})

test('matches snapshot', async () => {
  mockedAxios.get.mockResolvedValueOnce(weatherResponse)
  const tree = renderer.create(<Weather city={city} />).toJSON()
  await waitFor(() => {
    expect(tree).toMatchSnapshot()
  })
})
