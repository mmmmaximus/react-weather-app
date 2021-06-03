import { render, screen } from '@testing-library/react'
import Country from '../Country'
import renderer from 'react-test-renderer'
import mockedAxios from '../../__mocks__/axios'

describe('Country component', () => {
  it('should render component', () => {
    const weatherResponse = {
      data: {
        data: [null]
      }
    }
    mockedAxios.get.mockResolvedValueOnce(weatherResponse)

    const country = {
      name: 'Africa',
      capital: 'Wakanda',
      population: '123456',
      languages: [
        {name: 'language1'},
        {name: 'language2'},
        {name: 'language3'}
      ]
    }
    render(<Country country={country}/>)

    // renders component
    const CountryElement =  screen.getByTestId('Country')
    expect(CountryElement).toBeInTheDocument

    // renders content in component
    expect(CountryElement.textContent).toContain('Africa')
    expect(CountryElement.textContent).toContain('Wakanda')
    expect(CountryElement.textContent).toContain('123456')
    expect(CountryElement.textContent).toContain('language1')
    expect(CountryElement.textContent).toContain('language2')
    expect(CountryElement.textContent).toContain('language3')
    expect(screen.getByTestId('img')).toBeInTheDocument
  })

  it('matches snapshot', () => {
    const country = {
      name: 'Africa',
      capital: 'Wakanda',
      population: '123456',
      languages: [
        {name: 'language1'},
        {name: 'language2'},
        {name: 'language3'}
      ]
    }
    const tree = renderer.create(<Country country={country} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
