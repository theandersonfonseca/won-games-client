import { Story, Meta } from '@storybook/react/types-6-0'
import Menu, { MenuProps } from '.'

export default {
  title: 'Menu',
  component: Menu,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  argTypes: {
    username: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<MenuProps> = (args) => <Menu {...args} />
