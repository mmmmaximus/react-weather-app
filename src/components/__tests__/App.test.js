import { render, screen } from '@testing-library/react'
import App from '../../App'
import renderer from 'react-test-renderer'
import mockedAxios from '../../__mocks__/axios'

test('App component renders', () => {
  const countriesResponse = { data: [] }
  mockedAxios.get.mockResolvedValueOnce(countriesResponse)
  render(<App />)
  const AppElement = screen.getByTestId('App')
  expect(AppElement).toBeInTheDocument
})

test('matches snapshot', () => {
  const tree = renderer.create(<App />).toJSON()
  expect(tree).toMatchSnapshot()
})
