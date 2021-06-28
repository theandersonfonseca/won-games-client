import { Story, Meta } from '@storybook/react/types-6-0'
import Auth from '.'

export default {
  title: 'Auth',
  component: Auth
} as Meta

export const Default: Story = () => <Auth title="Won Games">Won Games</Auth>
