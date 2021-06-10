import { render, screen, waitFor } from '@testing-library/react'
import Weather from '../Weather'
import renderer from 'react-test-renderer'
import mockedAxios from '../../__mocks__/axios'
import t01d from '../../weather_icons/t01d.png'

const name = 'country name'
const city = 'test city'
const weatherResponse = {
  data: {
    data: [
      {
        temp: '30',
        weather: {
          description: 'weather description',
          weather: {
            icon: 't01d'
          }
        },
        wind_spd: '100',
        wind_cdir: 'NNN'
      }
    ]
  }
}

test('Weather should render', async () => {
  mockedAxios.get.mockResolvedValueOnce(weatherResponse)
  jest.mock(require(`../weather_icons/t01d.png`).default);
  render(<Weather name={name} city={city} />)
  const WeatherElement = screen.getByTestId('Weather')
  await waitFor(() => {
    expect(WeatherElement).toBeInTheDocument
    expect(WeatherElement.textContent).toContain('country name')
    expect(WeatherElement.textContent).toContain('30')
    expect(WeatherElement.textContent).toContain('weather description')
    expect(WeatherElement.textContent).toContain('100')
    expect(WeatherElement.textContent).toContain('NNN')
  })
})

test('matches snapshot', async () => {
  mockedAxios.get.mockResolvedValueOnce(weatherResponse)
  const tree = renderer.create(<Weather name={name} city={city} />).toJSON()
  await waitFor(() => {
    expect(tree).toMatchSnapshot()
  })
})
