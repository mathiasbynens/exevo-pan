/* eslint-disable max-lines-per-function */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable testing-library/no-wait-for-empty-callback */
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from 'utils/test'
import Tooltip from '..'

/*
    We are using 'await waitFor(() => {})' at the end
    of each test to get rid of unexpected warnings.
    This is a issue with react-popper. See:
    https://github.com/popperjs/react-popper/issues/368
*/

describe('<Tooltip />', () => {
  test('visibility is correctly controlled by mouse HOVER', async () => {
    renderWithProviders(
      <Tooltip trigger="hover" content={<div>tooltip content</div>}>
        <h1>wrapped</h1>
      </Tooltip>,
    )

    const contentElement = screen.getByText('tooltip content')
    const wrappedElement = screen.getByRole('heading')

    expect(contentElement).toBeInTheDocument()
    expect(wrappedElement).toBeInTheDocument()
    expect(
      screen.queryByLabelText('Click here to close'),
    ).not.toBeInTheDocument()

    expect(contentElement).not.toBeVisible()

    userEvent.hover(wrappedElement)
    expect(contentElement).toBeVisible()

    userEvent.unhover(wrappedElement)
    expect(contentElement).not.toBeVisible()

    await waitFor(() => {})
  })

  test('visibility is correctly controlled by mouse CLICK', async () => {
    renderWithProviders(
      <Tooltip trigger="click" content={<div>tooltip content</div>}>
        <h1>wrapped</h1>
      </Tooltip>,
    )

    const contentElement = screen.getByText('tooltip content')
    const wrappedElement = screen.getByRole('heading')

    expect(contentElement).toBeInTheDocument()
    expect(wrappedElement).toBeInTheDocument()

    expect(contentElement).not.toBeVisible()

    userEvent.click(wrappedElement)
    expect(contentElement).toBeVisible()
    userEvent.click(contentElement)
    expect(contentElement).toBeVisible()

    userEvent.click(wrappedElement)
    expect(contentElement).not.toBeVisible()

    userEvent.click(wrappedElement)
    expect(contentElement).toBeVisible()
    userEvent.click(screen.getByLabelText('Click here to close'))
    expect(contentElement).not.toBeVisible()

    await waitFor(() => {})
  })

  test('HOVER visibility is correctly controlled by KEYBOARD', async () => {
    renderWithProviders(
      <Tooltip trigger="hover" content={<div>tooltip content</div>}>
        <h1>wrapped</h1>
      </Tooltip>,
    )

    const contentElement = screen.getByText('tooltip content')

    expect(contentElement).toBeInTheDocument()
    expect(screen.getByRole('heading')).toBeInTheDocument()
    expect(
      screen.queryByLabelText('Click here to close'),
    ).not.toBeInTheDocument()

    expect(contentElement).not.toBeVisible()

    userEvent.tab()
    expect(contentElement).toBeVisible()

    userEvent.tab()
    expect(contentElement).not.toBeVisible()

    userEvent.tab()
    expect(contentElement).toBeVisible()

    await waitFor(() => {})
  })

  test('CLICK visibility is correctly controlled by KEYBOARD', async () => {
    renderWithProviders(
      <Tooltip trigger="click" content={<div>tooltip content</div>}>
        <h1>wrapped</h1>
      </Tooltip>,
    )

    const contentElement = screen.getByText('tooltip content')
    const wrappedElement = screen.getByRole('heading')

    expect(contentElement).toBeInTheDocument()
    expect(wrappedElement).toBeInTheDocument()

    expect(contentElement).not.toBeVisible()

    userEvent.tab()
    expect(contentElement).not.toBeVisible()
    userEvent.keyboard('{enter}')
    expect(contentElement).toBeVisible()
    userEvent.type(wrappedElement, '{space}')
    expect(contentElement).not.toBeVisible()

    await waitFor(() => {})
  })

  describe('visibility is correctly controlled', () => {
    test('with TRUE', async () => {
      renderWithProviders(
        <Tooltip trigger="none" visible content={<div>tooltip content</div>}>
          <h1>wrapped</h1>
        </Tooltip>,
      )

      const contentElement = screen.getByText('tooltip content')
      const wrappedElement = screen.getByRole('heading')

      expect(contentElement).toBeInTheDocument()
      expect(wrappedElement).toBeInTheDocument()
      expect(
        screen.queryByLabelText('Click here to close'),
      ).not.toBeInTheDocument()

      expect(contentElement).toBeVisible()

      userEvent.tab()
      expect(contentElement).toBeVisible()
      userEvent.keyboard('{enter}')
      expect(contentElement).toBeVisible()
      userEvent.type(wrappedElement, '{space}')
      expect(contentElement).toBeVisible()

      userEvent.click(wrappedElement)
      expect(contentElement).toBeVisible()
      userEvent.click(wrappedElement)
      expect(contentElement).toBeVisible()
      userEvent.click(contentElement)
      expect(contentElement).toBeVisible()

      await waitFor(() => {})
    })

    test('with FALSE', async () => {
      renderWithProviders(
        <Tooltip
          trigger="none"
          visible={false}
          content={<div>tooltip content</div>}
        >
          <h1>wrapped</h1>
        </Tooltip>,
      )

      const contentElement = screen.getByText('tooltip content')
      const wrappedElement = screen.getByRole('heading')

      expect(contentElement).toBeInTheDocument()
      expect(wrappedElement).toBeInTheDocument()
      expect(
        screen.queryByLabelText('Click here to close'),
      ).not.toBeInTheDocument()

      expect(contentElement).not.toBeVisible()

      userEvent.tab()
      expect(contentElement).not.toBeVisible()
      userEvent.keyboard('{enter}')
      expect(contentElement).not.toBeVisible()
      userEvent.type(wrappedElement, '{space}')
      expect(contentElement).not.toBeVisible()

      userEvent.click(wrappedElement)
      expect(contentElement).not.toBeVisible()
      userEvent.click(wrappedElement)
      expect(contentElement).not.toBeVisible()

      await waitFor(() => {})
    })
  })
})
