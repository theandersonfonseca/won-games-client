import { Story, Meta } from '@storybook/react/types-6-0'
import Logo, { LogoProps } from '.'

export default {
  title: 'Logo',
  component: Logo,
  argTypes: {
    color: {
      options: ['white', 'black'],
      type: 'radio'
    },
    size: {
      options: ['normal', 'large'],
      type: 'radio'
    },
    hideOnMobile: {
      type: 'boolean'
    }
  }
} as Meta

export const Default: Story<LogoProps> = (props) => <Logo {...props} />
