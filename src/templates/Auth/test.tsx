import { render, screen } from 'utils/test-utils'

import Auth from '.'

describe('<Auth />', () => {
  it('should render all components and children', () => {
    render(
      <Auth title="Auth Title">
        <input type="text" data-testid="input children" />
      </Auth>
    )

    expect(screen.getAllByLabelText(/won games/i)).toHaveLength(2)

    expect(
      screen.getByRole('heading', {
        name: /All your favorite games in one place/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /Won is the best and most complete gaming platform./i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Auth Title/i })
    ).toBeInTheDocument()

    expect(screen.getByTestId('input children')).toHaveAttribute('type', 'text')
  })
})
