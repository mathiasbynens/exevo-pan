import { screen } from '@testing-library/react'
import { renderWithProviders } from 'utils/test'
import RangeSliderInput from '..'

jest.mock('lodash', () => ({
  debounce: fn => fn,
}))

describe('<RangeSliderInput />', () => {
  test('should render correctly', () => {
    renderWithProviders(
      <RangeSliderInput data-testid="test" min={0} max={100} />,
    )
    expect(screen.getByTestId('test')).toBeInTheDocument()

    const [cursorA, cursorB] = screen.getAllByRole('slider')
    expect(cursorA).toHaveAttribute('aria-label', 'change value')
    expect(cursorA).toHaveAttribute('aria-valuenow', '0')
    expect(cursorA).toHaveAttribute('aria-valuemax', '100')
    expect(cursorA).toHaveAttribute('aria-valuemin', '0')

    expect(cursorB).toHaveAttribute('aria-label', 'change value')
    expect(cursorB).toHaveAttribute('aria-valuenow', '100')
    expect(cursorB).toHaveAttribute('aria-valuemax', '100')
    expect(cursorB).toHaveAttribute('aria-valuemin', '0')
  })

  test('should render cursors correctly', () => {
    renderWithProviders(<RangeSliderInput min={0} max={100} value={[10, 90]} />)

    const [cursorA, cursorB] = screen.getAllByRole('slider')

    expect(cursorA).toHaveStyle('left: 10%')
    expect(cursorB).toHaveStyle('left: 90%')
    expect(screen.getByText('10')).toBeInTheDocument()
    expect(screen.getByText('90')).toBeInTheDocument()
  })

  test('should clamp values', () => {
    renderWithProviders(
      <RangeSliderInput min={0} max={100} value={[-99, 200]} />,
    )

    const [cursorA, cursorB] = screen.getAllByRole('slider')

    expect(cursorA).toHaveStyle('left: 0%')
    expect(cursorB).toHaveStyle('left: 100%')
    expect(screen.getByText('0')).toBeInTheDocument()
    expect(screen.getByText('100')).toBeInTheDocument()
  })

  test('should work well for negative values', () => {
    renderWithProviders(
      <RangeSliderInput min={-200} max={-100} value={[-190, -110]} />,
    )

    const [cursorA, cursorB] = screen.getAllByRole('slider')

    expect(cursorA).toHaveStyle('left: 10%')
    expect(cursorB).toHaveStyle('left: 90%')
    expect(screen.getByText('-190')).toBeInTheDocument()
    expect(screen.getByText('-110')).toBeInTheDocument()
  })

  test('should be controlled correctly', () => {
    const { rerender } = renderWithProviders(
      <RangeSliderInput min={0} max={100} value={[10, 90]} />,
    )

    const [cursorA, cursorB] = screen.getAllByRole('slider')

    expect(cursorA).toHaveStyle('left: 10%')
    expect(cursorB).toHaveStyle('left: 90%')
    expect(screen.getByText('10')).toBeInTheDocument()
    expect(screen.getByText('90')).toBeInTheDocument()

    rerender(<RangeSliderInput min={20} max={200} value={[20, 200]} />)

    expect(cursorA).toHaveStyle('left: 0%')
    expect(cursorB).toHaveStyle('left: 100%')
    expect(screen.getByText('20')).toBeInTheDocument()
    expect(screen.getByText('200')).toBeInTheDocument()
  })
})
