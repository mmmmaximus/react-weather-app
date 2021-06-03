import { fireEvent, render, screen } from '@testing-library/react'
import Filter from '../Filter'
import renderer from 'react-test-renderer'

const filterFn = jest.fn()

test('Filter component should render', () => {
  render(<Filter func={filterFn} />)
  const FilterElement = screen.getByTestId('Filter')
  expect(FilterElement).toBeInTheDocument
})

test('should call function on input change', () => {
  render(<Filter func={filterFn} />)
  const FilterElement = screen.getByTestId('Filter')
  fireEvent.change(FilterElement, { target: { value: '1' } })
  expect(filterFn).toBeCalledTimes(1)
  fireEvent.change(FilterElement, { target: { value: '12' } })
  expect(filterFn).toBeCalledTimes(2)
})

test('it matches snapshot', () => {
  const tree = renderer.create(<Filter func={filterFn} />).toJSON()
  expect(tree).toMatchSnapshot()
})
