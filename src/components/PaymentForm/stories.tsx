import { Story, Meta } from '@storybook/react/types-6-0'
import PaymentForm from '.'

export default {
  title: 'PaymentForm',
  component: PaymentForm
} as Meta

export const Default: Story = () => <PaymentForm />
