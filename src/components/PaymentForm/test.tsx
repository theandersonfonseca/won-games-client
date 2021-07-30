import { render, screen } from 'utils/test-utils'

import PaymentForm from '.'

describe('<PaymentForm />', () => {
  it('should render the heading', () => {
    render(<PaymentForm />)

    expect(
      screen.getByRole('heading', { name: /Payment/i })
    ).toBeInTheDocument()
  })
})
